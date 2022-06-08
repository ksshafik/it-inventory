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
      },
      { metaReducers }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
