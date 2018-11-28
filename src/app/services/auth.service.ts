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

  private token: string;
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
        this.cookieService.set('token',this.token);
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
    this.cookieService.set('token',this.token);
    this.isLoggedIn = true;
    this.getUserData();
  }

  getUserData(){
    this.http.get(environment.url + 'home', {headers: new HttpHeaders().set('Authorization','Bearer ' + this.getToken())}).subscribe(data => {
      this.user = data;
      this.cookieService.set('user',this.user);
    }, err => {
      this.user = null;
      alert("Error de respuesta del servidor:" + err);
    });
  }
  
  getUserInfo(){
    return this.http.get(environment.url + 'home', {headers: new HttpHeaders().set('Authorization','Bearer ' + this.getToken())});
  }

  signUp(user: User){
    return this.http.post(environment.url + 'signup', user);
  }

  isAuthenticated(): boolean {
    //return this.isLoggedIn;
    if(this.cookieService.check('token')){
      this.user = this.cookieService.get('user');
      this.token = this.cookieService.get('token');
      return true;
    }
    if (this.cookieService.check('AuthFB')) {
      this.user = this.cookieService.get('user');
      this.token = this.cookieService.get('token');
      return true;
    }
    return false;
  }

  getToken() {
    if(this.cookieService.check('token')){
      this.token = this.cookieService.get('token');
      console.log("Token en cookie: " + this.token);
      return this.token;
    }
    return null;
  }

  logout(){
    this.isLoggedIn = false;
    this.cookieService.delete('AuthFB');
    this.cookieService.delete('user');
    this.cookieService.delete('token');
    this.router.navigate(['login']);
  }
}
