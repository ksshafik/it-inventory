import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state/app-state';
import { Device } from 'src/app/shared/interfaces/device';
import { Inventory } from 'src/app/shared/interfaces/inventory';
import { AppUtil } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss'],
})
export class InventoryViewComponent implements OnInit {
  public inventories: Array<Inventory>;
  public inventory: Inventory;
  public deviceEmployees: Array<Inventory>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.inventories = [];
    this.deviceEmployees=[];
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
  }

  ngOnInit(): void {
    this.initData();
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

          //Multiple devices assigned to an employee
          this.deviceEmployees = inventories.filter(
            (res) => res.employee.id === this.inventory.employee.id
          );
        });
      }
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
}
