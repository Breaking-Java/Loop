import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm;
  user : any;
  //form: FormGroup;
  constructor(private auth: AuthService, private router: Router) {
    this.user = {};
    this.signupForm = new FormGroup({
    'name': new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(3),
      //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
    'surname': new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(3),
    ]),
    'email': new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(9),
      //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
    'password': new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(8),
      //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
  });
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
