import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

@Injectable()
export class FormDeactivateService implements CanDeactivate<AuthComponent> {

  canDeactivate(component: AuthComponent): boolean {
    if(component.form.dirty) {
      return false;
    }
 
  };


}