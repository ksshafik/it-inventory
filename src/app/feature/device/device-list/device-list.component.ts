import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state/app-state';
import { Device } from 'src/app/shared/interfaces/device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  private devices$: Observable<Array<Device>>;
  public displayedColumns = ['type', 'description', 'actions'];
  public dataSource: MatTableDataSource<Device>;

  constructor(private store: Store<AppState>) {
    this.devices$ = new Observable();
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.initData();
  }

  /**
   * @name initData
   * @description Initialize data
   */
  initData() {
    let devices: Array<Device>;
    this.devices$ = this.store.select('device');
    this.devices$.subscribe((emp: Array<Device>) => {
      devices = emp;
      this.dataSource = new MatTableDataSource<Device>(devices);
    });
  }

  /**
   * @name applyFilter
   * @description Apply filter to table
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
