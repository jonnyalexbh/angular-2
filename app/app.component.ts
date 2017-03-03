/*
* importar el núcleo de Angular
*/
import {Component} from 'angular2/core';
import {MoviesListComponent} from './components/movies-list.component';
import {MoviesFooterComponent} from './components/movies-footer.component';

/*
* decorador component indicamos el selector donde cargar la
* plantilla y definimos el html de la plantilla. Utilizamos las
* dobles llaves para mostrar el valor de las propiedades o
* atributos de la clase AppComponent
*/
@Component({
  selector: 'my-app',
  templateUrl:"app/views/movies.html",
  directives: [MoviesListComponent, MoviesFooterComponent]
})
/*
* exportamos la clase para que el componente este disponible
*/
export class AppComponent {

}
