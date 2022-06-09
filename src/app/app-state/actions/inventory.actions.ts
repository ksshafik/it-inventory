import { Action } from '@ngrx/store';
import { Inventory } from 'src/app/shared/interfaces/inventory';

export const ADD_INVENTORY = '[INVENTORY] Add';
export const UPDATE_INVENTORY = '[INVENTORY] Update';
export const REMOVE_INVENTORY = '[INVENTORY] Remove';
export const SEARCH_INVENTORY = '[INVENTORY] Search';

export class AddInventory implements Action {
  readonly type = ADD_INVENTORY;

  constructor(public payload: Inventory) {}
}

export class UpdateInventory implements Action {
  readonly type = UPDATE_INVENTORY;

  constructor(public payload: Inventory) {}
}

export class SearchInventory implements Action {
  readonly type = SEARCH_INVENTORY;

  constructor(public payload: Inventory) {}
}

export type Actions = AddInventory | UpdateInventory | SearchInventory;
