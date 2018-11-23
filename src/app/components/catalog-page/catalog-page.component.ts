import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  movies;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getAllMovies().subscribe(data => {
      console.log(data);
      this.movies = data;
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
});
  }

}
