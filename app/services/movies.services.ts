import {Injectable} from 'angular2/core';
import {Movies} from './mock.movies';
import {Movie} from '../model/movie';

@Injectable()
export class MoviesService{

  getHello(){
    return "Hello world from a service";
  }
  
  getMovies(){
    return Movies;
  }

  insertMovie(movie:Movie){
    Promise.resolve(Movies).then((movies: Movie[]) => movies.push(movie));
  }

}
