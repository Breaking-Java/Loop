import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

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

  constructor(private titleService:Title) {
  	this.titleService.setTitle("Loop | User Settings");
  }

  ngOnInit() {
  }

}
