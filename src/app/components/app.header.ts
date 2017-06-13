import { Component } from '@angular/core';
import {Http} from '@angular/http';

// get site json
import { SiteService } from '../services/site.service';

// set header view
@Component({
    moduleId: module.id,
    selector: 'app-header-template',
    templateUrl: '../../assets/templates/app.header.html',
    providers: [SiteService]
})
export class AppHeaderComponent  {
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
