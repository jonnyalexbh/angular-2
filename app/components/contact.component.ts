/*
* importar el núcleo de Angular
*/
import {Component} from 'angular2/core';

@Component({
  selector: 'contact',
  templateUrl:"app/views/contact.html"
})

export class ContactComponent {
  public title:string = "contact";
}
