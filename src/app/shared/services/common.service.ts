import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'any',
})
export class CommonService {
  constructor(private _snackBar: MatSnackBar) {}

  /**
   * @name openSnackBar
   * @description Open snackbar
   */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 5000});
  }
}
