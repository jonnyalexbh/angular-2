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
  template: `<h1>{{title}}</h1>
  <ul>
  <li><b>movie: </b> {{movie}}</li>
  <li><b>director: </b> {{director}}</li>
  <li><b>year: </b> {{year}}</li>
  </ul>`
})
/*
* exportamos la clase para que el componente este disponible
*/
export class AppComponent {
  /*
  * definimos las propiedades y su tipo
  */
  public title = "Peliculas con Angular 2";
  movie = "Batman v Superman";
  public director = "Zack Snider";
  public year = "2016";
}
