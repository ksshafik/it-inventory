import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  constructor() {}

  /**
   * @name getEmployeesTask
   * @desc Service call to get list of employees.
   */
  public getEmployeesTask(): void {}
}
