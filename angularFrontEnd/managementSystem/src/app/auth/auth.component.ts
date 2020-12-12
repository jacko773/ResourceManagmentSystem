import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private AuthService : AuthenticationService) { }

  ngOnInit() {
  }
  signIn(...arg){
    this.AuthService.logIn();
  }
}
