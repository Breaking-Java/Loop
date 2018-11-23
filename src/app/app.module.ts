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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './guards/tokeninterceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemDetailComponent,
    CatalogComponent,
    CatalogPageComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    PassResetComponent,
    PassForgotComponent,
    PagenotfoundComponent,
    PageerrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
