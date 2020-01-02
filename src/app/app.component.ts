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
    this._employeeService.getEmployee()
        .subscribe(data=> this.employees = data);
  }
  
}
