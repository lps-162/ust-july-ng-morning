import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Employee } from 'app/shared/models/employee';


@Component({
  selector: 'employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {
  @Output() employeeCreated = new EventEmitter();

  employee: Employee = new Employee();

  constructor() { }

  ngOnInit() {
  }

  createEmployee() {
    // console.log('Form submission is working');
    // console.log(this.employee);

    this.employeeCreated.emit({ employee: this.employee, dummy: 'super'});
    
    this.employee = new Employee();
  }

}
