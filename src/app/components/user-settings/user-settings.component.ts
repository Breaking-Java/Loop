import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
user;
// Activate Toggler
	navbarOpen = false;
	toggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}

	// Activate Dropdown
	dropDownOpen = false;
	toggleDropwdown() {
		this.dropDownOpen = !this.dropDownOpen;
	}


  windows = [true, false, false];
  toggleCard(index) {
    this.windows = [false, false, false];
    this.windows[index] = true;
  }

  model = false;
  openModel(){
    this.model = !this.model;
  }

  userData;
  newPass;
  users;
  admin;

  constructor(private titleService:Title, private auth:AuthService, private userService:UserService, private router: Router ) {
  	this.titleService.setTitle("Loop | User Settings");
  }

  ngOnInit() {
    this.auth.getUserInfo().subscribe(data => {
      console.log(data);
      this.userData = data;
    }, err => {
      alert("Error de respuesta del servidor:" + err);
    });
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
      this.admin = true;
    }, _err => {
      this.admin = false;
      //console.log(err);
      //alert('Error de conexion');
      // Error de conexion
    });
  }

  selfDestroy(){
    this.userService.deleteUser(this.userData.user._id).subscribe(data => {
      console.log('Borrado' + data);
      this.auth.logout();
    }, err => {
      this.user = null;
      alert("Error de respuesta del servidor:" + err);
    });
  }
  getUser(): void {
    this.auth.getUserInfo().subscribe(data => {
      this.user = data;
      console.log(this.user);
    }, err => {
      this.user = null;
      alert("Error de respuesta del servidor:" + err);
    });
  }

  updateUser(): void {
  this.userService.updateUser(this.userData.user._id, {name: this.userData.user.name, surname: this.userData.user.surname}).subscribe(data => {
    alert('User correctly updated, please login again');
    this.auth.logout();
    console.log(data);
  }, err => {
    console.log(err);
    alert('Error de conexion');
    // Error de conexion
  });
  }

  updatePassword(){
    this.userService.updatePassword(this.userData.user._id, {password: this.newPass}).subscribe(data => {
      alert('Password correctly updated, please login again');
      this.auth.logout();
      console.log(data);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

}
