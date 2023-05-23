import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  isAuth!: boolean;
  profilUrl!: string;

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;

    this.profilUrl = '/profil/' + this.authService.userIdAuth
  }

  onClickSignOut(){
    this.authService.signOut();
    this.router.navigate(['auth']);
  }

}
