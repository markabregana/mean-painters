import { Component } from '@angular/core';

// get site json
import { SiteService } from '../services/site.service';

// set header view
@Component({
    moduleId: module.id,
    selector: 'app-main-template',
    templateUrl: '../../assets/templates/app.aboutus.html',
    providers: [SiteService]
})
export class AppAboutUsComponent {
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
    menus: Menus[];
}
interface Menus {
    id: number;
    url: string;
    title: string;
}
