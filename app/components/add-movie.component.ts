/*
* importar el núcleo de Angular
*/
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Movie} from '../model/movie';
import {Router, RouteParams} from 'angular2/router';
import {MoviesService} from '../services/movies.services';  // import service

@Component({
  templateUrl:"app/views/add-movie.html",
  providers:[MoviesService]
})

export class AddMovieComponent implements OnInit{

  public TitleMovie = "";
  public newMovie: Movie;

  constructor(private _moviesServices:MoviesService,
    private _router: Router,
    private _routeParams: RouteParams){

    }

    onSubmit(){
      this._moviesServices.insertMovie(this.newMovie);
      this._router.navigate(["Movies"]);
    }

    ngOnInit():any{
      this.TitleMovie = this._routeParams.get("title");
      this.newMovie= new Movie(
        0,
        this._routeParams.get("title"),
        "N/A",
        this._routeParams.get("director"),
        parseInt(this._routeParams.get("year"))
      );
    }

  }
