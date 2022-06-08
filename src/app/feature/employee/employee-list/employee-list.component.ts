import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state/app-state';
import { Employee } from 'src/app/shared/interfaces/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  private employees$: Observable<Array<Employee>>;
  public displayedColumns = ['name', 'email', 'actions'];
  public dataSource: MatTableDataSource<Employee>;

  constructor(private store: Store<AppState>) {
    this.employees$ = new Observable();
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.initData();
  }

  /**
   * @name initData
   * @description Initialize data
   */
  initData() {
    let employees: Array<Employee>;
    this.employees$ = this.store.select('employee');
    this.employees$.subscribe((emp: Array<Employee>) => {
      employees = emp;
      this.dataSource = new MatTableDataSource<Employee>(employees);
    });
  }
}
