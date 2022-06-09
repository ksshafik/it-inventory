import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryViewComponent } from './inventory-view.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';


describe('InventoryViewComponent', () => {
  let component: InventoryViewComponent;
  let fixture: ComponentFixture<InventoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryViewComponent ],
      imports: [RouterTestingModule, FormsModule],
      providers: [provideMockStore({})],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
