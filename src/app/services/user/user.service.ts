import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor() {

    this.users = [];

    this.users.push(new User('Thomas', 'Chevalier', 'contact@thomaschevalier.fr', 'azerty'));
    this.users.push(new User('Admin', 'Admin', 'admin@thomaschevalier.fr', 'azerty'))
  }

  getUserBy(searchedAttr: string, searchValue: string): User | undefined {
    for(const user of this.users){
      console.log(user);
      if (user[searchedAttr] == searchValue) {
        return user;
      }
    }
    return undefined;
  }

  updateUser(editedUser: User | void){
    if(editedUser instanceof User){
      for(let i = 0; i < this.users.length; i++){
        if(this.users[i].id === editedUser.id) {
          this.users[i] = editedUser;
          break;
        }
      }
    }
  }
}
