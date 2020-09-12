import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  register(signUpData: Object) {
    if (Math.random() < 0.5) {
      return of({
        success: false,
        message: 'Email address already exists',
      }).pipe(delay(1000));
    } else {
      return of({ success: true, message: 'Thanks for signing up!' }).pipe(
        delay(1000)
      );
    }
  }
}
