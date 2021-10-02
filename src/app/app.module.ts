import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogoComponent } from './logo/logo.component';
import { MapComponent } from './map/map.component';
import { PinFormComponent } from './pin-form/pin-form.component';

import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { FlowLegendComponent } from './flow-legend/flow-legend.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoComponent,
    MapComponent,
    PinFormComponent,
    FlowLegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
