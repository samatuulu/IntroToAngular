import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2> welcome {{ name }}</h2> <h2> {{ 2+2 }}</h2>
  <h2>{{ "Welcome " +  name }}</h2>
  <h2>{{ name.length }}</h2>
  <h2>{{ name.toUpperCase() }}</h2>
  <h2> {{ greetUser() }} </h2>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = 'Bektursun'

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
