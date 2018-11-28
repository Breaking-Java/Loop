import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pass-forgot',
  templateUrl: './pass-forgot.component.html',
  styleUrls: ['./pass-forgot.component.scss']
})
export class PassForgotComponent implements OnInit {

  constructor(private titleService:Title, private userService: UserService) {
  	this.titleService.setTitle("Loop | Forgot Password");
  }

  email;

  ngOnInit() {
  }

  forgotPass(){
    this.userService.forgotPassword(this.email).subscribe(data => {
      alert("Email sent to " + this.email);
    }, err => {
      alert("Email sent to " + this.email);
    });
  }

}
