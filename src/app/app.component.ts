import { Component } from '@angular/core';
import { Actor } from './Model/Actor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngfor';
  
  dato: any = { "id": 1, "name": "Ram", "age": 30 };

  constructor() {

  }

}
