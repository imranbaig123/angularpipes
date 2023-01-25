import { PercentPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { filterPipe } from './filter.pipe';
import { percentagePipe } from './percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    percentagePipe,
    filterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
