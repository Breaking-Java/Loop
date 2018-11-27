import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pageerror',
  templateUrl: './pageerror.component.html',
  styleUrls: ['./pageerror.component.scss']
})
export class PageerrorComponent implements OnInit {

  constructor(private titleService:Title) {
  	this.titleService.setTitle("Loop | Page Error");
  }

  ngOnInit() {
  }

}
