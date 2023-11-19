import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  messageString = "hEllo To tHe WORLD!";

  currnetDate = new Date();

  currencyValue = 2000000;

  decimalValue = 123.235;

  pizza = {
    toppings: ["pepperoni", "bacon"],
    size: "large"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
