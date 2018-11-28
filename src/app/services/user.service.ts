import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})

export class UserService {

  headers

  constructor(public http: HttpClient, private auth:AuthService) {
    this.headers = new HttpHeaders();
  }

  getAllUsers(){
    return this.http.get(environment.url + 'home/users', {headers: new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken())});
  }

  getUser(id){
    return this.http.get(environment.url + 'home/users/' + id, {headers: new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken())});
  }

  updateUser(id, user) {
    return this.http.put(environment.url + 'home/users/' + id, user, {headers: new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken())});
  }

  deleteUser(id) {
    return this.http.delete(environment.url + 'home/users/' + id, {headers: new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken())});
  }

  updatePassword(id, pass){
    return this.http.put(environment.url + 'home/users/' + id + '/changePassword', pass, {headers: new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken())});
  }

  forgotPassword(email){
    return this.http.get(environment.url + 'UpdatePassword/' + email);
  }

}
