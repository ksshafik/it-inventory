import { Employee } from '../interfaces/employee';
import * as EmployeeActions from './../actions/employee.actions';

const initialState: Employee = {
  name: 'shafik',
  email: 'ksshafik@gmail.com',
};

export function reducer(
  state: Employee[] = [initialState],
  action: EmployeeActions.Actions
) {
  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return [...state, action.payload];
    case EmployeeActions.REMOVE_EMPLOYEE:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
