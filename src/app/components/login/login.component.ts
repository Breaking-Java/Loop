import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
  	document.body.style.background = 'rgb(15,15,15)';
  }

  ngOnInit() {
  }

}
