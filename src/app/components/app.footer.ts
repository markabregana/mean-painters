import { Component } from '@angular/core';
import {Http} from '@angular/http';

// get site json
import { SiteService } from '../services/site.service';

// set header view
@Component({
    moduleId: module.id,
    selector: 'app-footer-template',
    templateUrl: '../../assets/templates/app.footer.html',
    providers: [SiteService]
})
export class AppFooterComponent  {
    sites: Sites[];
    constructor(private headerService: SiteService) {
        this.headerService.getHeader().subscribe(sites => {
            this.sites = sites;
        });
    }
}

interface Sites {
    name: string;
    email: string;
    phone: string;
    address: Address[];
    menus: Menus[];
    socialMedia: SocialMedia[];
}
interface Address {
    street: string;
    city: string;
    suburb: string;
    postcode: string;
    state: string;
}
interface Menus {
    id: number;
    url: string;
    title: string;
}
interface SocialMedia {
    facebook: string;
    twitter: string;
    googleplus: string;
}
