import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatInputModule, MatButtonModule, MatTableModule, MatIconModule],
  exports: [MatInputModule, MatButtonModule, MatTableModule, MatIconModule],
})
export class AppMaterialModule {}
