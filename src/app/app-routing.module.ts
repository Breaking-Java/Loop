import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PassForgotComponent } from './components/pass-forgot/pass-forgot.component';
import { PassResetComponent } from './components/pass-reset/pass-reset.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CanActivateTeam } from './guards/canactivateteam.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'pass-forgot', component: PassForgotComponent },
  { path: 'pass-reset', component: PassResetComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'catalog', component: CatalogPageComponent, canActivate: [CanActivateTeam]},
  { path: 'detail', component: ItemDetailComponent, canActivate: [CanActivateTeam] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
