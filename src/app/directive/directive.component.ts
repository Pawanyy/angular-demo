import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {


  blueButtonClass = false;
  fontSize = 16;

  items = ["lamp", "lights", "bulbs", "wires"]

  constructor() { }

  ngOnInit(): void {
  }

}
