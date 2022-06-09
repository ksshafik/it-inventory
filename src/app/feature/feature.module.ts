import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DeviceComponent } from './device/device.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeModifyComponent } from './employee/employee-modify/employee-modify.component';
import { DeviceModifyComponent } from './device/device-modify/device-modify.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryModifyComponent } from './inventory/inventory-modify/inventory-modify.component';
import { CommonService } from '../shared/services/common.service';
import { InventoryViewComponent } from './inventory/inventory-view/inventory-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    EmployeeComponent,
    DeviceComponent,
    EmployeeListComponent,
    EmployeeModifyComponent,
    DeviceModifyComponent,
    DeviceListComponent,
    InventoryComponent,
    InventoryListComponent,
    InventoryModifyComponent,
    InventoryViewComponent,
  ],
  imports: [
    FeatureRoutingModule,
    CommonModule,
    AppMaterialModule,
    FormsModule,
    FlexLayoutModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[CommonService]
})
export class FeatureModule {}
