import { Action } from '@ngrx/store';
import { Employee } from 'src/app/shared/interfaces/employee';

export const ADD_EMPLOYEE = '[EMPLOYEE] Add';
export const UPDATE_EMPLOYEE = '[EMPLOYEE] Update';
export const REMOVE_EMPLOYEE = '[EMPLOYEE] Remove';
export const SEARCH_EMPLOYEE = '[EMPLOYEE] Search';

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;

  constructor(public payload: Employee) {}
}

export class UpdateEmployee implements Action {
  readonly type = UPDATE_EMPLOYEE;

  constructor(public payload: Employee) {}
}

export class SearchEmployee implements Action {
  readonly type = SEARCH_EMPLOYEE;

  constructor(public payload: Employee) {}
}

export type Actions = AddEmployee | UpdateEmployee | SearchEmployee;
