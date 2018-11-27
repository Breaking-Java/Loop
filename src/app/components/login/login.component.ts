import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any;
  constructor(private router: Router, private auth:AuthService, private titleService:Title) {
    this.titleService.setTitle("Loop | Login");

    this.model = {};
  }

  onSubmit(){
    this.login();
  }

  facebook(){
    
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
  }

}
