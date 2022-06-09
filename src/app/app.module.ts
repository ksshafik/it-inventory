import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { employeeReducer } from './app-state/reducers/employee.reducer';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { AppState } from './app-state/app-state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { deviceReducer } from './app-state/reducers/device.reducer';
import { inventoryReducer } from './app-state/reducers/inventory.reducer';

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot(
      {
        employee: employeeReducer,
        device: deviceReducer,
        inventory: inventoryReducer,
      },
      { metaReducers }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
