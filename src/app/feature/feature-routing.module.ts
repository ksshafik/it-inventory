import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceModifyComponent } from './device/device-modify/device-modify.component';
import { DeviceComponent } from './device/device.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeModifyComponent } from './employee/employee-modify/employee-modify.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          {
            path: 'list',
            component: EmployeeListComponent,
          },
          {
            path: 'modify',
            component: EmployeeModifyComponent,
          },
        ],
      },

      {
        path: 'device',
        component: DeviceComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          {
            path: 'list',
            component: DeviceListComponent,
          },
          {
            path: 'modify',
            component: DeviceModifyComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
