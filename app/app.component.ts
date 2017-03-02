/*
* importar el núcleo de Angular
*/
import {Component} from 'angular2/core';
/*
* decorador component indicamos el selector donde cargar la
* plantilla y definimos el html de la plantilla. Utilizamos las
* dobles llaves para mostrar el valor de las propiedades o
* atributos de la clase AppComponent
*/
@Component({
  selector: 'my-app',
  templateUrl:"app/views/movies.html"
})
/*
* exportamos la clase para que el componente este disponible
*/
export class AppComponent {
  /*
  * definimos las propiedades y su tipo
  */
  public title:string = "Peliculas con Angular 2";

  public movie:string;
  public director:string;
  public year:number;

  constructor(){
    this.movie = "Batman v Superman";
    this.director = "Zack Snider";
    this.year = 2016;
    this.holaMundo();
  }

  public holaMundo(){
    console.log("Pelicula: " + this.movie+ " - "+ this.director+ " - "+ this.year);
  }

}
