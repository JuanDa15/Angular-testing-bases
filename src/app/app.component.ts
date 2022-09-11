import { Component, OnInit } from '@angular/core';
import { Calculator } from './calculator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-testing';


  ngOnInit(): void {
    const calculator = new Calculator();
    const rta = calculator.multiply(3,3);
    const rta2 = calculator.divide(2,0);
    console.log(rta,rta2);
  }
}
