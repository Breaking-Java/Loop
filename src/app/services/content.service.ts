import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(public http: HttpClient) { }

  getAllMovies(){
    return this.http.get(environment.url + 'home/movies');
    //.map(res => res as Cliente[] || []);
  }
}
