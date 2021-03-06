import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  movie;
  stars: Array<number>;

  constructor(private route: ActivatedRoute, private contentService: ContentService, private location: Location) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentService.getMovie(id)
    .subscribe(data => {
      this.movie = data[0];
      console.log(this.movie);
      this.stars = new Array();
      let j = Number(this.movie.Rating);
      for (let i = 0; i < j; i++) {
        this.stars.push(1);
      }
    });
  }
  goBack(): void {
    this.location.back();
  }

}
