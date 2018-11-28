import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
user;

	// Activate Toggler
	navbarOpen = false;
	toggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}
 show:boolean = false;

  toggleCollapse() {
    this.show = !this.show
  }

  constructor( private userService: UserService,  private authService: AuthService) { }
  ngOnInit(): void {
    this.getUser();

  }
	// Activate Dropdown
	dropDownOpen = false;
	toggleDropwdown() {
		this.dropDownOpen = !this.dropDownOpen;
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

  logout(): void {
    this.authService.logout();
  }




}
