import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceModifyComponent } from './device-modify.component';

describe('DeviceModifyComponent', () => {
  let component: DeviceModifyComponent;
  let fixture: ComponentFixture<DeviceModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceModifyComponent ]
    })
    .compileComponents();
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
