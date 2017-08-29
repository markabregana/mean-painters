import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// get site json
import { SiteService } from '../services/site.service';

// set header view
@Component({
    moduleId: module.id,
    selector: 'app-main-template',
    templateUrl: '../../assets/templates/app.single.service.html',
    providers: [SiteService]
})
export class AppSingleServiceComponent {
    sites: Sites[];
    pages: Content[];
    services: Content[];
    url: Service;
    constructor(private headerService: SiteService, private route: ActivatedRoute) {
        this.headerService.getHeader().subscribe(sites => {
            this.sites = sites;
        });
        this.headerService.getPage('page-services').subscribe( page => {
            this.pages = page;
        });
        this.headerService.getServices().subscribe( services => {
            this.services = services;
        });
        this.route.params.subscribe(params => {
            this.url = params['url'];
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
interface Service {
    url: string;
}
