import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user : any;
  constructor(private auth: AuthService, private router: Router) {
    this.user = {};
  }

  ngOnInit() {
  }

  onSubmit(){
    this.addCliente();
  }

  addCliente() {
    this.auth.signUp(this.user).subscribe(data => {
      console.log(data);
      alert('Se ha registrado');
      this.router.navigate(['login']);
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }

}
