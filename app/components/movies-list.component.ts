/*
* importar el núcleo de Angular
*/
import {Component} from 'angular2/core';
import {Movie} from '../model/movie';
/*
* decorador component indicamos el selector donde cargar la
* plantilla y definimos el html de la plantilla.
*/
@Component({
  selector: 'movies-list',
  templateUrl:"app/views/movies-list.html",
  styleUrls:["assets/css/styles.css"]
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

  constructor(){
    this.showData=false;

    this.movies = [
      new Movie(1, "Titulo uno", "Batman", "Zack Snider", 2017),
      new Movie(2, "Titulo dos", "Superman", "Zoe", 2016),
      new Movie(3, "Titulo tres", "Goku", "KLW", 2017)
    ];

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
