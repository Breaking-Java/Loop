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
  constructor(private titleService:Title) {
  	this.titleService.setTitle("Loop | User Settings");
  }

  ngOnInit() {
  }

}
