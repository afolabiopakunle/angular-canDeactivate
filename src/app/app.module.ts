import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: AuthComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    MaterialsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'login', component: AuthComponent},
      {path: 'register', component: RegisterComponent}
    ])
  ],
  declarations: [ 
    AppComponent, 
    AuthComponent,
    RegisterComponent,
    LoginComponent,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
