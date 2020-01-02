import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public employees = [];

  constructor(private _employeeService: TestServiceService){}

  ngOnInit(){
    this.employees = this._employeeService.getEmployee();
  }
  
}
