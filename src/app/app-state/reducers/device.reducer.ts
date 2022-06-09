import { Action } from '@ngrx/store';
import { Device } from 'src/app/shared/interfaces/device';
import { AppUtil } from 'src/app/shared/utils/util';
import * as DeviceActions from './../actions/device.actions';

const initialState: Device = {
  id: 1,
  type: 'Laptop',
  description: 'HP Laptop for software development',
};

export function deviceReducer(
  state: Device[] = [initialState],
  action: Action
) {
  const deviceAction = action as DeviceActions.Actions;

  switch (deviceAction.type) {
    case DeviceActions.ADD_DEVICE:
      let payload = { ...deviceAction.payload };
      payload.id = state.length + 1;
      return [...state, payload];
    case DeviceActions.UPDATE_DEVICE:
      const devices = state.map((emp) => {
        if (emp.id === deviceAction.payload['id']) {
          return deviceAction.payload;
        }
        return emp;
      });
      return [...devices];
    case DeviceActions.SEARCH_DEVICE:
      return [...state, deviceAction.payload];
    default:
      return state;
  }
}
