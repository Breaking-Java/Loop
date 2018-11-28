import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  token: string;
  user: any;
  d: any;
  isLoggedIn: any;

  constructor(public http: HttpClient, private cookieService: CookieService, private router: Router) {
    this.token = null;
    this.isLoggedIn = false;
    this.user = null;
  }

  login(credentials): Observable<boolean> {
    console.log("Llamando a login")
    console.log(credentials)
    return new Observable<boolean>(observer => {
      this.http.post(environment.url + 'login', credentials).subscribe(data => {
        this.d = data;
        this.token = this.d.token;
        this.isLoggedIn = true;
        this.getUserData();
        observer.next(true);
        observer.complete();
      }, _err => {
        observer.next(false);
        observer.complete();
      });
    });
  }

  facebookLogin(token){
    this.token = token;
    this.isLoggedIn = true;
    this.getUserData();
  }

  getUserData(){
    this.http.get(environment.url + 'home', {headers: new HttpHeaders().set('Authorization','Bearer ' + this.token)}).subscribe(data => {
      this.user = data;
      this.cookieService.set('Auth',this.user);
    }, err => {
      this.user = null;
      alert("Error de respuesta del servidor:" + err);
    });
  }

  signUp(user: User){
    return this.http.post(environment.url + 'signup', user);
  }

  isAuthenticated(): boolean {
    //return this.isLoggedIn;
    if(this.cookieService.check('Auth')){
      this.user = this.cookieService.get('Auth');
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    return this.token;
  }
  logout(){
    this.isLoggedIn = false;
    this.cookieService.delete('AuthFB');
    this.cookieService.delete('Auth');
    this.router.navigate(['login']);
  }
}
