import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myFirstApp';

  onClick() {
    alert(currentData);
  }
}


let date = new Date();
let day = ('0' + date.getDate()).slice(-2);
let month =('0' + date.getDay()).slice(-2);
let year = date.getFullYear();
let hours = ('0' + date.getHours()).slice(-2);
let minutes = ('0' + date.getMinutes()).slice(-2);
let seconds = ('0' + date.getSeconds()).slice(-2);
let currentData = 
`${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;


