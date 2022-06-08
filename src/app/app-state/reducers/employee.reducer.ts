import { Action } from '@ngrx/store';
import { Employee } from 'src/app/shared/interfaces/employee';
import { AppUtil } from 'src/app/shared/utils/util';
import * as EmployeeActions from './../actions/employee.actions';

const initialState: Employee = {
  id: 1,
  name: 'a',
  email: 'a',
};

export function employeeReducer(
  state: Employee[] = [initialState],
  action: Action
) {
  const employeeAction = action as EmployeeActions.Actions;

  switch (employeeAction.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      let payload = {...employeeAction.payload};
      payload.id = state.length + 1;
      return [...state, payload];
    case EmployeeActions.UPDATE_EMPLOYEE:
      console.log('UPDATE state: ', state);
      console.log('UPDATE payload: ', employeeAction.payload);
      const employees = state.map((emp) => {
        if (emp.id === employeeAction.payload['id']) {
          return employeeAction.payload;
        }
        return emp;
      });
      return [...employees];
    default:
      return state;
  }
}
