import { Action } from '@ngrx/store';
import { Inventory } from 'src/app/shared/interfaces/inventory';
import { AppUtil } from 'src/app/shared/utils/util';
import * as InventoryActions from '../actions/inventory.actions';

const initialState: Inventory = {
  id: 0,
  description: '',
  employee: {
    id: 0,
    name: '',
    email: '',
  },
  device: {
    id: 0,
    type: '',
    description: '',
  },
};

export function inventoryReducer(state: Inventory[] = [], action: Action) {
  const inventoryAction = action as InventoryActions.Actions;

  switch (inventoryAction.type) {
    case InventoryActions.ADD_INVENTORY:
      let payload = { ...inventoryAction.payload };
      payload.id = state.length + 1;
      return [...state, payload];
    case InventoryActions.UPDATE_INVENTORY:
      const inventories = state.map((emp) => {
        if (emp.id === inventoryAction.payload['id']) {
          return inventoryAction.payload;
        }
        return emp;
      });
      return [...inventories];
    case InventoryActions.SEARCH_INVENTORY:
      return [...state, inventoryAction.payload];
    default:
      return state;
  }
}
