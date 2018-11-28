import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

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

  constructor(private titleService:Title, private auth:AuthService, private userService:UserService) {
  	this.titleService.setTitle("Loop | User Settings");
  }

  ngOnInit() {
    this.auth.getUserInfo().subscribe(data => {
      console.log(data);
      this.userData = data;
    }, err => {
      alert("Error de respuesta del servidor:" + err);
    });
    //this.
  }

  selfDestroy(){
    this.userService.deleteUser(this.userData.user._id);
    //this.auth.logout();
  }

}
