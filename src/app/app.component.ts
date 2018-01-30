import { Component } from '@angular/core';
import { Global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Productos con Angular 5';
  public header_color:string;

  constructor(){
    this.header_color = Global.header_color;
  }
}
