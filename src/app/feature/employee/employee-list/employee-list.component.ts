import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/shared/interfaces/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Array<Employee>;
  displayedColumns = ['name', 'email'];
  dataSource: MatTableDataSource<Employee>;

  constructor() {
    this.employees = [
      { name: 'shafik', email: 'ksshafik@gmail.com' },
      { name: 'thazniya', email: 'thazniyamm@gmail.com' },
    ];
    this.dataSource = new MatTableDataSource<Employee>(this.employees);
  }

  ngOnInit(): void {
   
  }
}
