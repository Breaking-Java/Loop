import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  headers

  constructor(public http: HttpClient, private auth:AuthService) {
    this.headers = new HttpHeaders();
    this.headers.set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6MTU0MjkzNDA5OTI5NCwiZW1haWwiOiJsb2xAbG9sLmNvbSIsIm5hbWUiOiJhc2QiLCJsZXZlbCI6IiIsImV4cCI6MTU0MjkzNjMxNzcwMn0sImlhdCI6MTU0MjkzNjMwNn0.uFVBhwXGc_sFEPY05WBJeqll8gIuGJY3VuJF0IMNUN4');
  }

  getAllMovies(){
    return this.http.get(environment.url + 'home/movies', {headers: new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6MTU0MjkzNDA5OTI5NCwiZW1haWwiOiJsb2xAbG9sLmNvbSIsIm5hbWUiOiJhc2QiLCJsZXZlbCI6IiIsImV4cCI6MTU0MjkzNjMxNzcwMn0sImlhdCI6MTU0MjkzNjMwNn0.uFVBhwXGc_sFEPY05WBJeqll8gIuGJY3VuJF0IMNUN4')});
    //.map(res => res as Cliente[] || []);
  }
}