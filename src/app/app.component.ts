import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  


  list = [
    
 
    
    {
      firstName: 'Igor',
      lastName: 'Drozdovski',
      age: 32,
    },
    {
      firstName: 'Aleksej',
      lastName: 'Buchko',
      age: 33,
    },
    {
      firstName: 'Vasilij',
      lastName: 'Oblomov',
      age: 30,
    },
   
  ];
}