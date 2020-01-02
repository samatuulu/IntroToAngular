import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> {{ "Hello " + parentData }} </h2>
  <button (click)="fireEvent()">Send event</button>

  
  `,
  styles: []
})
export class TestComponent implements OnInit {
  @Input() public parentData: string;
  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey, data from child component to parent component!'); 
  }

  constructor() { }

  ngOnInit() {
  }

}
