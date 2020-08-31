import {Injectable} from '@angular/core';
import {User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor() {
  }

  login(user: User) {
    return new Observable(subscriber => {
      if (user.login === 'ivanov' && user.password === 'ivanov') {
        subscriber.next(1);
      }
    });
  }
}
