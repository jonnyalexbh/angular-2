/*
* importar el núcleo de Angular
*/
import {Component} from 'angular2/core';
import {Movie} from '../model/movie';
import {Router} from 'angular2/router';
import {MoviesService} from '../services/movies.services';  // import service

@Component({
  templateUrl:"app/views/add-movie.html",
  providers:[MoviesService]
})

export class AddMovieComponent {

  constructor(private _moviesServices:MoviesService, private _router: Router){

  }

  onAddMovie(title, director, year){
    let movie: Movie = new Movie(77, title, "N/A", director, year);
    this._moviesServices.insertMovie(movie);
    this._router.navigate(["Movies"]);
  }

}
