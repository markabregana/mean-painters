import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { FilterPipe } from './filter.pipe';

// import routing
import { routing } from './app.routing';

// import index html
import { AppComponent } from './app.component';
// import header html
import { AppHeaderComponent } from './components/app.header';
// import footer html
import { AppFooterComponent } from './components/app.footer';
// import home html
import { AppHomeComponent } from './components/app.home';
// import About Us html
import { AppAboutUsComponent } from './components/app.aboutus';
// import Services html
import { AppServicesComponent } from './components/app.services';
// import About Us html
import { AppGalleryComponent } from './components/app.gallery';
// import Contact Us html
import { AppContactUsComponent } from './components/app.contactus';


@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  // tslint:disable-next-line:max-line-length
  declarations: [ AppComponent, AppHeaderComponent, AppFooterComponent, AppHomeComponent, AppAboutUsComponent, AppServicesComponent, AppGalleryComponent, AppContactUsComponent, FilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
