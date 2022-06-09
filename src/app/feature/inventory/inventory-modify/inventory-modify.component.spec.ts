import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryModifyComponent } from './inventory-modify.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';


describe('InventoryModifyComponent', () => {
  let component: InventoryModifyComponent;
  let fixture: ComponentFixture<InventoryModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      imports: [RouterTestingModule, MatSnackBarModule, FormsModule],
      declarations: [ InventoryModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
