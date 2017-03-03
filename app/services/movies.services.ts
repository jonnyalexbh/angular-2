import {Injectable} from 'angular2/core';
import {Movies} from './mock.movies';

@Injectable()
export class MoviesService{

  getHello(){
    return "Hello world from a service";
  }

  getMovies(){
    return Movies;
  }

}
