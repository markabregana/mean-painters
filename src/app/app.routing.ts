import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppHomeComponent } from './components/app.home';
import { AppAboutUsComponent } from './components/app.aboutus';
import { AppServicesComponent } from './components/app.services';
import { AppSingleServiceComponent } from './components/app.single.service';
import { AppGalleryComponent } from './components/app.gallery';
import { AppContactUsComponent } from './components/app.contactus';

const appRoutes: Routes = [
    {
        path: '',
        component: AppHomeComponent
    },
    {
        path: 'about-us',
        component: AppAboutUsComponent
    },
    {
        path: 'services',
        component: AppServicesComponent
    },
    { path: 'services/:url', component: AppSingleServiceComponent },
    {
        path: 'gallery',
        component: AppGalleryComponent
    },
    {
        path: 'contact-us',
        component: AppContactUsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
