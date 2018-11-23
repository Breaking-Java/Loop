import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {

  serie;
  stars: Array<number>;

  constructor(private route: ActivatedRoute, private contentService: ContentService, private location: Location) { }

  ngOnInit(): void {
    this.getSerie();
  }

  getSerie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentService.getSerie(id)
    .subscribe(data => {
      this.serie = data[0];
      console.log(this.serie);
      this.stars = new Array();
      let j = Number(this.serie.Rating);
      for (let i = 0; i < j; i++) {
        this.stars.push(1);
      }
    });
  }
  goBack(): void {
    this.location.back();
  }

}
