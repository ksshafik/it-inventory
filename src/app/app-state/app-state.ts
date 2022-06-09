import { Device } from '../shared/interfaces/device';
import { Employee } from '../shared/interfaces/employee';
import { Inventory } from '../shared/interfaces/inventory';

export interface AppState {
  readonly employee: Employee[];
  readonly device: Device[];
  readonly inventory: Inventory[];
}
