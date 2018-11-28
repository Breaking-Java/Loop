import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any;
  cookieValue:String;
  constructor(private router: Router, private auth:AuthService, private titleService:Title, private cookieService: CookieService) {
    this.titleService.setTitle("Loop | Login");
    this.model = {};
    this.cookieValue = null;
  }

  onSubmit(){
    this.login();
  }

  facebook(){
    console.log("FACE");
    window.location.href = 'https://breakingjava.tk/auth/facebook';
  }

  login() {
    const credentials = {email: this.model.email, password: this.model.password};
    this.auth.login(credentials).subscribe(data => {
      if (data) {
        this.router.navigate(['catalog']);
      } else {
        // Mostrar mensaje datos incorrectos
        console.log('Incorrecto');
      }
    }, _err => {
      // Mostrar mensaje error de conexion
    });
}

  ngOnInit() {
    if(this.cookieService.check('AuthFB')){
      this.cookieValue = this.cookieService.get('AuthFB');
      this.auth.facebookLogin(this.cookieValue);
      this.router.navigate(['catalog']);
    }
    if(this.cookieService.check('password')){
      alert("Your new password is: " + this.cookieService.get('password'));
      this.cookieService.delete('password');
    }
  }

}
