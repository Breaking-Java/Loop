import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
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
       this.user = data;
       this.token = this.user.token;
       console.log("Token");
       console.log(this.token);
       this.isLoggedIn = true;
        observer.next(true);
        observer.complete();
      }, _err => {
        observer.next(false);
        observer.complete();
      });
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
