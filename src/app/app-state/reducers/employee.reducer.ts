import { Action } from '@ngrx/store';
import { Employee } from 'src/app/shared/interfaces/employee';
import { AppUtil } from 'src/app/shared/utils/util';
import * as EmployeeActions from './../actions/employee.actions';

const initialState: Employee = {
  id: 1,
  name: 'shafik',
  email: 'ksshafik@gmail.com',
};

export function employeeReducer(
  state: Employee[] = [],
  action: Action
) {
  const employeeAction = action as EmployeeActions.Actions;

  switch (employeeAction.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      let payload = { ...employeeAction.payload };
      payload.id = state.length + 1;
      return [...state, payload];
    case EmployeeActions.UPDATE_EMPLOYEE:
      const employees = state.map((emp) => {
        if (emp.id === employeeAction.payload['id']) {
          return employeeAction.payload;
        }
        return emp;
      });
      return [...employees];
    case EmployeeActions.SEARCH_EMPLOYEE:
      return [...state, employeeAction.payload];
    default:
      return state;
  }
}
