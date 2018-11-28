import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PassResetComponent } from './components/pass-reset/pass-reset.component';
import { PassForgotComponent } from './components/pass-forgot/pass-forgot.component';
import { AuthService } from './services/auth.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PageerrorComponent } from './components/pageerror/pageerror.component';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { PlaymediaComponent } from './components/playmedia/playmedia.component';
import { SerieDetailComponent } from './components/serie-detail/serie-detail.component';
import { CatalogSeriesComponent } from './components/catalog-series/catalog-series.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemDetailComponent,
    CatalogComponent,
    CatalogSeriesComponent,
    CatalogPageComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    PassResetComponent,
    PassForgotComponent,
    PagenotfoundComponent,
    PageerrorComponent,
    PlaymediaComponent,
    SerieDetailComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
