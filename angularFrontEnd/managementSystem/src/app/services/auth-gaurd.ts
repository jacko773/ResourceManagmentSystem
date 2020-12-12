import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { promise } from 'protractor';
import { AuthenticationService } from './authentication';

@Injectable({providedIn : 'root'})
export class AuthenticationGaurd implements CanActivate{
    constructor(private authentication : AuthenticationService,private router : Router){}
    canActivate(route : ActivatedRouteSnapshot,state : RouterStateSnapshot) : boolean | Promise<boolean>{
        if(this.authentication.logedIn)
            return true;
        return this.router.navigate(['/auth']);
    }
}
