import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceModifyComponent } from './device-modify.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('DeviceModifyComponent', () => {
  let component: DeviceModifyComponent;
  let fixture: ComponentFixture<DeviceModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceModifyComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
