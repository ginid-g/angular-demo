import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  userName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: BehaviorSubject<User | undefined> = new BehaviorSubject(this.getUser());
  constructor() {}

  setUser(userName: string): void {
    const data = { userName: userName };
    localStorage.setItem('user', JSON.stringify(data));

    this.user.next(data);
  }

  getUser(): User | undefined {
    const user = localStorage.getItem('user');
    if (!user) return undefined;
    return JSON.parse(user);
  }

  logOutUser() {
    localStorage.removeItem('user');
    this.user.next(undefined);
  }
}
