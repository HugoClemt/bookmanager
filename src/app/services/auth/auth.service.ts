import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  userIdAuth: number | undefined;

  constructor(private userService: UserService) { }

  signIn(email: string, password: string) {

    return new Promise<void>((res, rej) => {

      setTimeout(() => {

        const user = this.userService.getUserBy('email', email);
        if(user) {
          if(user.password === password){
            this.isAuth = true;
            this.userIdAuth = user.id;
            res();
          }
          rej("Le mot de passe ne correspond pas.")
        }
        rej("L'addresse e-mail n'existe pas.")

      }, 500)
    });
  }

  signOut() {
    this.isAuth = false;
    this.userIdAuth = undefined;
  }
}
