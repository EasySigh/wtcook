import { Injectable } from '@angular/core';
import { UserData } from '../../models/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor() { }

  public registerNewUser(user: UserData): void | Error {
    if (RegisterService.isExist(user)) {
      return new Error('User already exist!');
    }
  }

  public static isExist({email}: UserData): boolean {
    // verify if user already exist.
    return false;
  }
}
