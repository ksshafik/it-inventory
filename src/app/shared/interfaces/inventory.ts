import { Device } from './device';
import { Employee } from './employee';

export interface Inventory {
  id: number;
  description: string;
  employee: Employee;
  device: Device;
}
