/*
* importar el núcleo de Angular
*/
import {Component} from 'angular2/core';
import {Movie} from './model/movie';
/*
* decorador component indicamos el selector donde cargar la
* plantilla y definimos el html de la plantilla. Utilizamos las
* dobles llaves para mostrar el valor de las propiedades o
* atributos de la clase AppComponent
*/
@Component({
  selector: 'my-app',
  templateUrl:"app/views/movies.html",
  styleUrls:["assets/css/styles.css"]
})
/*
* exportamos la clase para que el componente este disponible
*/
export class AppComponent {
  /*
  * definimos las propiedades y su tipo
  */
  public movie:Movie;
  public showData:boolean;

  constructor(){
    this.showData=false;
    this.movie= new Movie(1, "Titulo", "Batman v Superman", "Zack Snider", 2016);
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

}
