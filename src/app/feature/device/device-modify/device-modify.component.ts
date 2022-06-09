import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state/app-state';
import { Device } from 'src/app/shared/interfaces/device';
import { AppUtil } from 'src/app/shared/utils/util';
import * as DeviceActions from './../../../app-state/actions/device.actions';

@Component({
  selector: 'app-device-modify',
  templateUrl: './device-modify.component.html',
  styleUrls: ['./device-modify.component.scss']
})
export class DeviceModifyComponent implements OnInit {

  @ViewChild('deviceForm') form: NgForm | undefined;

  public device: Device;
  public devices: Array<Device>;
  public isEdit: boolean;
  private devices$: Observable<Array<Device>>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.device = {
      id: 1,
      type: '',
      description: '',
    };
    this.isEdit = false;
    this.devices$ = new Observable();
    this.devices = [];
  }

  ngOnInit(): void {
    this.initData();
  }

  /**
   * @name initData
   * @description Initialize data
   */
  initData() {
    this.route.queryParams.subscribe((params) => {
      let id = parseInt(params['id']);
      if (id && id >= 0) {
        this.isEdit = true;
        let devices: Array<Device>;
        this.devices$ = this.store.select('device');
        this.devices$.subscribe((emp: Array<Device>) => {
          devices = JSON.parse(JSON.stringify(emp));
          this.device = AppUtil.searchInArrayOfObjects(devices, 'id', id);
        });
      }
    });
  }

  /**
   * @name onSubmit
   * @description On submit form
   */
  onSubmit(device: Device) {
    if (this.isEdit) {
      this.store.dispatch(new DeviceActions.UpdateDevice(device));
    } else {
      this.store.dispatch(new DeviceActions.AddDevice(device));
    }

    this.router.navigate(['/device/list']);
  }

}
