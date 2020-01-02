import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html', 
  styles: []
})
export class TestComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: TestServiceService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

}
