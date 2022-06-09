import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModifyComponent } from './employee-modify.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('EmployeeModifyComponent', () => {
  let component: EmployeeModifyComponent;
  let fixture: ComponentFixture<EmployeeModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeModifyComponent ],
      imports: [RouterTestingModule, FormsModule],
      providers: [provideMockStore({})],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
