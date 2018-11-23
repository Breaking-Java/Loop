import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items: any;

  constructor() {
    this.items = [
      {
        name: 'Batman',
        rating: '7.8'
      },{
        name: 'Calamardo',
        rating: '7.8'
      }
    ];
  }

  ngOnInit() {
  }

}
