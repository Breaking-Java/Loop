import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-series',
  templateUrl: './catalog-series.component.html',
  styleUrls: ['./catalog-series.component.scss']
})
export class CatalogSeriesComponent implements OnInit {

  @Input() items;

  constructor() {
  }

  ngOnInit() {
  }

}
