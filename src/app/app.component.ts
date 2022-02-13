import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result = 'no value';
  ngOnInit() {
    const sbj = new BehaviorSubject(0);


    setInterval(

      function getRandomValue() {
        const getValue = Math.round(Math.random() * 1000);
        sbj.next(getValue);
        console.log(getValue);
      }

      , 1500);
    
      
    
      sbj
      .pipe(
        filter(value => value >= 300 && value <= 700))
      .subscribe((result: any) => {
    this.result = result;



  });
}
}

