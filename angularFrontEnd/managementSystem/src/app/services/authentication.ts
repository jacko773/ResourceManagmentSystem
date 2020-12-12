import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({providedIn : "root"})
export class AuthenticationService{
constructor(private router : Router){}
    logedIn = false;
    logIn(){
      this.logedIn = true; 
      this.router.navigate(['/project']); 
    }
    autoLogIn(){

    }
    autoLogOut(){

    }
}