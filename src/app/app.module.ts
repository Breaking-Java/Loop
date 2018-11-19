import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemDetailComponent,
    CatalogComponent,
    CatalogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
