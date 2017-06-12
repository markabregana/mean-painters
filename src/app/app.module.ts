import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// import routing
import { routing } from './app.routing';

// import index html
import { AppComponent }  from './app.component';
// import header html
import { AppHeader } from './components/app.header';
// import footer html
import { AppFooter } from './components/app.footer';
// import home html
import { AppHome } from './components/app.home';
// import About Us html
import { AppAboutUs } from './components/app.aboutus';
// import Services html
import { AppServices } from './components/app.services';
// import About Us html
import { AppGallery } from './components/app.gallery';
// import Contact Us html
import { AppContactUs } from './components/app.contactus';


@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, AppHeader, AppFooter, AppHome, AppAboutUs, AppServices, AppGallery, AppContactUs ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
