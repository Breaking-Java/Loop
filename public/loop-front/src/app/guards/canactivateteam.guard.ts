import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return this.auth.isAuthenticated();
  }
}
