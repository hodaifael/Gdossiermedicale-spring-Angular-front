import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    login: any;
    canActivate(): any {
        this.login = localStorage.getItem('adminId');
        if (this.login) {
            return true;
        } else {
            this.router.navigate(['/']);
        }
    }





}