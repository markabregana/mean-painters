import { Component } from '@angular/core';

// get site json
import { SiteService } from '../services/site.service';

// set header view
@Component({
    moduleId: module.id,
    selector: 'app-main-template',
    templateUrl: '../../assets/templates/app.contactus.html',
    providers: [SiteService]
})
export class AppContactUsComponent {
    sites: Sites[];
    pages: Content[];
    constructor(private headerService: SiteService) {
        this.headerService.getHeader().subscribe(sites => {
            this.sites = sites;
        });
        this.headerService.getPage('page-contact-us').subscribe( page => {
            this.pages = page;
        });
    }
}

interface Sites {
    name: string;
    email: string;
    phone: string;
    menus: Menus[];
}
interface Menus {
    id: number;
    url: string;
    title: string;
}
interface Content {
    id: number;
    title: string;
    content: string;
    parent: string;
    url: string;
    class: string;
    featuredImage: string;
    excerpt: string;
}
