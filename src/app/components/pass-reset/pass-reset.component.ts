import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.component.html',
  styleUrls: ['./pass-reset.component.scss']
})
export class PassResetComponent implements OnInit {

  constructor(private titleService:Title) {
  	this.titleService.setTitle("Loop | Reset Password");
  }

  ngOnInit() {
  }

}
