import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state/app-state';
import { Inventory } from 'src/app/shared/interfaces/inventory';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  private inventories$: Observable<Array<Inventory>>;
  public displayedColumns = ['name', 'device', 'description', 'actions'];
  public dataSource: MatTableDataSource<Inventory>;
  public filterType: string;
  public filterTypes: Array<string>;

  constructor(private store: Store<AppState>) {
    this.inventories$ = new Observable();
    this.dataSource = new MatTableDataSource();
    this.filterType = 'Employee';
    this.filterTypes = ['Employee', 'Device'];
  }

  ngOnInit(): void {
    this.initData();
    this.changeFilterType();
  }

  /**
   * @name initData
   * @description Initialize data
   */
  initData() {
    let inventories: Array<Inventory>;
    this.inventories$ = this.store.select('inventory');
    this.inventories$.subscribe((emp: Array<Inventory>) => {
      inventories = emp;
      this.dataSource = new MatTableDataSource<Inventory>(inventories);
    });
  }

  /**
   * @name changeFilterType
   * @description Change filter type to search
   */
  changeFilterType() {
    if (this.filterType === 'Employee') {
      this.dataSource.filterPredicate = (data: Inventory, filter: string) => {
        return data.employee.name.toLocaleLowerCase().includes(filter);
      };
    } else {
      this.dataSource.filterPredicate = (data: Inventory, filter: string) => {
        return data.device.type.toLocaleLowerCase().includes(filter);
      };
    }
  }

  /**
   * @name applyFilter
   * @description Apply filter to table
   */
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
