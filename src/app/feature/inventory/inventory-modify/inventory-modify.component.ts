import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state/app-state';
import { Device } from 'src/app/shared/interfaces/device';
import { Employee } from 'src/app/shared/interfaces/employee';
import { Inventory } from 'src/app/shared/interfaces/inventory';
import { CommonService } from 'src/app/shared/services/common.service';
import { AppUtil } from 'src/app/shared/utils/util';
import * as InventoryActions from './../../../app-state/actions/inventory.actions';

@Component({
  selector: 'app-inventory-modify',
  templateUrl: './inventory-modify.component.html',
  styleUrls: ['./inventory-modify.component.scss'],
})
export class InventoryModifyComponent implements OnInit {
  @ViewChild('inventoryForm') form: NgForm | undefined;

  public inventory: Inventory;
  public inventories: Array<Inventory>;
  public isEdit: boolean;
  public employees: Array<Employee>;
  public devices: Array<Device>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) {
    this.inventory = {
      id: 0,
      description: '',
      employee: {
        id: 0,
        name: '',
        email: '',
      },
      device: {
        id: 0,
        type: '',
        description: '',
      },
    };
    this.isEdit = false;
    this.inventories = [];
    this.employees = [];
    this.devices = [];
  }

  ngOnInit(): void {
    this.initData();
    this.getEmployees();
    this.getDevices();
    this.getInventories();
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
        let inventories: Array<Inventory>;
        let inventories$: Observable<Array<Inventory>>;
        inventories$ = this.store.select('inventory');
        inventories$.subscribe((emp: Array<Inventory>) => {
          inventories = JSON.parse(JSON.stringify(emp));
          this.inventory = AppUtil.searchInArrayOfObjects(
            inventories,
            'id',
            id
          );
        });
      }
    });
  }

  /**
   * @name getEmployees
   * @description Get all devices
   */
  getEmployees() {
    let employees$: Observable<Array<Employee>>;
    employees$ = this.store.select('employee');
    employees$.subscribe((dev: Array<Employee>) => {
      this.employees = dev;
    });
  }

  /**
   * @name getDevices
   * @description Get all devices
   */
  getDevices() {
    let devices$: Observable<Array<Device>>;
    devices$ = this.store.select('device');
    devices$.subscribe((dev: Array<Device>) => {
      this.devices = dev;
    });
  }

  /**
   * @name getInventories
   * @description Get all inventories
   */
  getInventories() {
    let inventories$: Observable<Array<Inventory>>;
    inventories$ = this.store.select('inventory');
    inventories$.subscribe((inv: Array<Inventory>) => {
      this.inventories = inv;
    });
  }
  /**
   * @name isFormValid
   * @description Validate form
   */
  isFormValid(): boolean {
    let retrunValue = true;
    if (!this.inventory.employee || !this.inventory.employee.name) {
      this.commonService.openSnackBar('Employee Name is required', 'Close');
      retrunValue = false;
    }

    if (!this.inventory.device || !this.inventory.device.description) {
      this.commonService.openSnackBar('Device Type is required', 'Close');
      retrunValue = false;
    }
    return retrunValue;
  }

  /**
   * @name onSubmit
   * @description On submit form
   */
  onSubmit(inventory: Inventory) {
    if (this.isFormValid()) {
      if (this.isEdit) {
        this.store.dispatch(new InventoryActions.UpdateInventory(inventory));
        this.router.navigate(['/inventory/list']);
      } else {
        let isExistDevice = this.inventories.find(
          (o) => o.device.id === inventory.device.id
        );
        if (isExistDevice) {
          this.commonService.openSnackBar(
            'This Device is already linked to an Employee. You can update the data through Edit option',
            'Close'
          );
        } else {
          this.store.dispatch(new InventoryActions.AddInventory(inventory));
          this.router.navigate(['/inventory/list']);
        }
      }
    }
  }

  /**
   * @name compareEmployees
   * @description CompareWith function for Employees
   */
  compareEmployees(c1: Employee, c2: Employee): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  /**
   * @name compareDevices
   * @description CompareWith function for Devices
   */
  compareDevices(c1: Employee, c2: Employee): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
