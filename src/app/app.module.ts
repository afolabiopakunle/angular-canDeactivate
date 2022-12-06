import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    MaterialsModule, 
  ],
  declarations: [ AppComponent, AuthComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
