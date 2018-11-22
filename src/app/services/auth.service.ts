import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  token: string;
  user: any;

  constructor(public http: HttpClient) {
    this.token = null;
  }
  login(credentials): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.post('http://breakingjava.tk:8080/login', credentials).subscribe(data => {
       this.user = data;
       this.token = this.user.id;
        observer.next(true);
        observer.complete();
      }, _err => {
        observer.next(false);
        observer.complete();
      });
    });
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
  getToken() {
    return this.token;
  }
  logout(){
    return this.http.post('http://localhost:3000/api/logout?access_token=' + this.token, {});
  }
}
