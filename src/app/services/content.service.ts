import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})

export class ContentService {

  headers

  constructor(public http: HttpClient, private auth:AuthService) {
    this.headers = new HttpHeaders();
  }

  getAllMovies(){
    return this.http.get(environment.url + 'home/movies', {headers: new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken())});
    //.map(res => res as Cliente[] || []);
  }

  getAllSeries(){
    return this.http.get(environment.url + 'home/series', {headers: new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken())});
  }

  getEpisodes(serieId){
    return this.http.get(environment.url + 'home/episodes/'+serieId, {headers: new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken())});
  }

  getMovie(id){
    return this.http.get(environment.url + 'home/movies/' + id, {headers: new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken())});
  }

  getSerie(id){
    return this.http.get(environment.url + 'home/series/' + id, {headers: new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken())});
  }
}
