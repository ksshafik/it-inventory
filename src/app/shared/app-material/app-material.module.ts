import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class AppMaterialModule {}
