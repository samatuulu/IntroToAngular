import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<input [id]="myId" type="text" value="Bektursun">
  <input bind-disabled="isDisabled" id="{{ myId }}" type="text" value="Bektursun">`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = 'Bektursun'
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
