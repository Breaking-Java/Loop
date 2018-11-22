import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CanActivateTeam } from './guards/canactivateteam.guard';

const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full'},
  // User
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: CatalogPageComponent, canActivate: [CanActivateTeam]},
  // Catalog and content
  { path: 'detail', component: ItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
