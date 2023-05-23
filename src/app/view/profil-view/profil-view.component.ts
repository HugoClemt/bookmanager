import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.css']
})
export class ProfilViewComponent implements OnInit{

  user!: User | void;

  userForm!: FormGroup;

  constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router){

  }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    console.log('ID:', id);
    this.user = this.userService.getUserBy('id', id.toString());
    console.log('User:', this.user);

    /*
      this.userForm = this.formBuilder.group({
      'firstname': [this.user.firstname, [Validators.required]],
      'lastname': [this.user.lastname, [Validators.required]],
      'email': [this.user.email, [Validators.required, Validators.email]],
      'password': [this.user.password, [Validators.required]]
    })
    } */

    if (this.user instanceof User) {
      this.userForm = this.formBuilder.group({
        'firstname': [this.user.firstname, [Validators.required]],
        'lastname': [this.user.lastname, [Validators.required]],
        'email': [this.user.email, [Validators.required, Validators.email]],
        'password': [this.user.password, [Validators.required]]
      });

      this.userForm.patchValue(this.user);
    } else {
    }
  }

  onSubmitEditUser() {
    this.userService.updateUser(this.user);
    this.router.navigate(['books']);

  }

}
