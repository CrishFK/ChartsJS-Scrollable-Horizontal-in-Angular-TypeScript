import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartjsModule } from 'ng-chartjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartjsModule.registerPlugin(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
