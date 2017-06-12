import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppHome } from './components/app.home';
import { AppAboutUs } from './components/app.aboutus';
import { AppServices } from './components/app.services';
import { AppGallery } from './components/app.gallery';
import { AppContactUs } from './components/app.contactus';

const appRoutes: Routes = [
    {
        path: '',
        component: AppHome
    },
    {
        path: 'about-us',
        component: AppAboutUs
    },
    {
        path: 'services',
        component: AppServices
    },
    {
        path: 'gallery',
        component: AppGallery
    },
    {
        path: 'contact-us',
        component: AppContactUs
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
