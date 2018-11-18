import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CatalogComponent } from './components/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemDetailComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
