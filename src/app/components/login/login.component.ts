import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any;
  constructor(private router: Router, private auth:AuthService) {
    this.model = {};
  }

  onSubmit(){
    this.login();
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
    }, err => {
      // Mostrar mensaje error de conexion
    });
}

  ngOnInit() {
  }

}
