import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {     FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { CallapiService } from './callapi.service';
@NgModule({
  declarations: [
    AppComponent,
    ShowdataComponent

  ],
  imports: [
    BrowserModule,
        FormsModule,
    HttpClientModule,
    HttpClient
  ],
  providers: [CallapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
