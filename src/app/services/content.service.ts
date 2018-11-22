import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(public http: HttpClient) { }

  getAllMovies(){
    //return this.http.get( + this.auth.getToken())
    //.map(res => res as Cliente[] || []);
  }
}
