import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state/app-state';
import { Employee } from 'src/app/shared/interfaces/employee';
import { AppUtil } from 'src/app/shared/utils/util';
import * as EmployeeActions from './../../../app-state/actions/employee.actions';

@Component({
  selector: 'app-employee-modify',
  templateUrl: './employee-modify.component.html',
  styleUrls: ['./employee-modify.component.scss'],
})
export class EmployeeModifyComponent implements OnInit {
  @ViewChild('employeeForm') form: NgForm | undefined;

  public employee: Employee;
  public employees: Array<Employee>;
  public isEdit: boolean;
  private employees$: Observable<Array<Employee>>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employee = {
      id: 1,
      name: '',
      email: '',
    };
    this.isEdit = false;
    this.employees$ = new Observable();
    this.employees = [];
  }

  ngOnInit(): void {
    this.initData();
  }

  /**
   * @name initData
   * @description Initialize data
   */
  initData() {
    this.route.queryParams.subscribe((params) => {
      let id = parseInt(params['id']);
      if (id && id >= 0) {
        this.isEdit = true;
        let employees: Array<Employee>;
        this.employees$ = this.store.select('employee');
        this.employees$.subscribe((emp: Array<Employee>) => {
          employees = JSON.parse(JSON.stringify(emp));
          this.employee = AppUtil.searchInArrayOfObjects(employees, 'id', id);
        });
      }
    });
  }

  /**
   * @name onSubmit
   * @description On submit form
   */
  onSubmit(employee: Employee) {
    if (this.isEdit) {
      this.store.dispatch(new EmployeeActions.UpdateEmployee(employee));
    } else {
      this.store.dispatch(new EmployeeActions.AddEmployee(employee));
    }

    this.router.navigate(['/list']);
  }
}
