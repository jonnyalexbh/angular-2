/*
* importar el núcleo de Angular
*/
import {Component} from 'angular2/core';
import {Movie} from '../model/movie';                       // import model
import {MoviesService} from '../services/movies.services';  // import service
/*
* decorador component indicamos el selector donde cargar la
* plantilla y definimos el html de la plantilla.
*/
@Component({
  selector: 'movies-list',
  templateUrl:"app/views/movies-list.html",
  styleUrls:["assets/css/styles.css"],
  providers:[MoviesService]
})
/*
* exportamos la clase para que el componente este disponible
*/
export class MoviesListComponent {

  /*
  * definimos las propiedades y su tipo
  */
  public movie:Movie;
  public movieSeleted:Movie;
  public showData:boolean;
  public movies;
  public dataService;

  constructor(private _moviesServices:MoviesService){
    this.showData=false;
    this.dataService= this._moviesServices.getHello();

    this.movies = this._moviesServices.getMovies();

    this.movie = this.movies[0];
    this.movieSeleted = this.movies[0];
    this.debug();
  }
  /*
  * debug
  */
  debug(){
    console.log(this.movie);
  }
  /*
  * onShowHide
  */
  onShowHide(value){
    this.showData=value;
  }
  /*
  * onLog
  */
  onLog(){
    console.log(this.movie.title);
  }
  /*
  * onChangeMovie
  */
  onChangeMovie(movie){
    this.movie = movie;
    this.movieSeleted = movie;
  }

}
