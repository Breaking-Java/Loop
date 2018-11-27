import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pass-forgot',
  templateUrl: './pass-forgot.component.html',
  styleUrls: ['./pass-forgot.component.scss']
})
export class PassForgotComponent implements OnInit {

  constructor(private titleService:Title) {
  	this.titleService.setTitle("Loop | Forgot Password");
  }

  ngOnInit() {
  }

}
