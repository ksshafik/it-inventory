import { Action } from '@ngrx/store';
import { Device } from 'src/app/shared/interfaces/device';

export const ADD_DEVICE = '[DEVICE] Add';
export const UPDATE_DEVICE = '[DEVICE] Update';
export const REMOVE_DEVICE = '[DEVICE] Remove';
export const SEARCH_DEVICE = '[DEVICE] Search';

export class AddDevice implements Action {
  readonly type = ADD_DEVICE;

  constructor(public payload: Device) {}
}

export class UpdateDevice implements Action {
  readonly type = UPDATE_DEVICE;

  constructor(public payload: Device) {}
}

export class SearchDevice implements Action {
  readonly type = SEARCH_DEVICE;

  constructor(public payload: Device) {}
}

export type Actions = AddDevice | UpdateDevice | SearchDevice;
