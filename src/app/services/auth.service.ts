import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  token: string;
  user: any;
  isLoggedIn: boolean;

  constructor(public http: HttpClient) {
    this.token = null;
    this.isLoggedIn = false;
  }

  login(credentials): Observable<boolean> {
    console.log("Llamando a login")
    console.log(credentials)
    return new Observable<boolean>(observer => {
      this.http.post(environment.url + 'login', credentials).subscribe(data => {
        console.log(data);
        this.token = this.user.token;
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
    }, err => {
      this.user = null;
      alert("Error de respuesta del servidor:" + err);
    });
  }

  signUp(user: User){
    return this.http.post(environment.url + 'signup', user);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  getToken() {
    return this.token;
  }
  logout(){
    this.isLoggedIn = false;
    return this.http.post(environment.url + 'logout?access_token=' + this.token, {});
  }
}
