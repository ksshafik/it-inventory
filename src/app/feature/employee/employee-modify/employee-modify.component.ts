import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/shared/interfaces/employee';

@Component({
  selector: 'app-employee-modify',
  templateUrl: './employee-modify.component.html',
  styleUrls: ['./employee-modify.component.scss']
})
export class EmployeeModifyComponent implements OnInit {

  @ViewChild('employeeForm') form: NgForm | undefined;

  public employee: Employee;

  constructor() {
    this.employee = {
      name: '',
      email: '',
    }
   }

  ngOnInit(): void {

  }

    /**
   * @name onSubmit
   * @description On submit form
   */
  onSubmit(employee: Employee) {
    console.log('Name: ', employee.name);
    console.log('Email: ', employee.email);
  }

}
