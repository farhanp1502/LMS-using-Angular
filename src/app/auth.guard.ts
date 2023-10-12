import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MainserviceService } from './services/mainservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private mainservice:MainserviceService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean  {
    
    if (this.mainservice.isauthentication()) {
      return true; 
    } else {
      this.router.createUrlTree(['/home']);
      return false;
    }
  }
}
