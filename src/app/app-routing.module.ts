import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PassForgotComponent } from './components/pass-forgot/pass-forgot.component';
import { PassResetComponent } from './components/pass-reset/pass-reset.component';
import { SignupComponent } from './components/signup/signup.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  // User
  { path: 'login', component: LoginComponent },
  { path: 'pass-forgot', component: PassForgotComponent },
  { path: 'pass-reset', component: PassResetComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'catalog', component: CatalogPageComponent, canActivate: [AuthGuard]},
  // Catalog and content
  { path: 'detail', component: ItemDetailComponent },
  // pagenotfound
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
