import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class FormDeactivateService implements CanDeactivate {

  canDeactivate(component: T,): boolean;
}

}