import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';

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
  constructor(private titleService:Title, private  userService: UserService,  private authService: AuthService, private router: Router ) {
  	this.titleService.setTitle("Loop | User Settings");
  }

  ngOnInit() {
  }
  getUser(): void {
    this.authService.getUserInfo().subscribe(data => {
      this.user = data;
      console.log(this.user);
    }, err => {
      this.user = null;
      alert("Error de respuesta del servidor:" + err);
    });
  }

  updateUser(): void {
  this.userService.updateUser(this.user).subscribe(data => {
    alert('User correctly edited');
    this.router.navigate(['user-settings']);
    console.log(data);
  }, err => {
    console.log(err);
    alert('Error de conexion');
    // Error de conexion
  });
}

}
