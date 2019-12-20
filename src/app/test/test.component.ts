import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Welcome {{name}} </h2>
  <h2 [style.color]="hasError? 'red': 'green'" >Style Binding</h2>
  <h2 [style.color]="highlighColor">Style Binding 2 </h2>
  <h2 [style.color]="highlighColor">Style Binding 3 </h2>
  <h2 [ngStyle]="titleStyles">Style Binding 4 </h2>
  

  
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = 'Bektursun'
  public successClass = "text-success"
  public hasError = true;
  public isSpecial = true;
  public highlighColor = "yellow";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
