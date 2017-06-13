import { Component } from '@angular/core';
import {Http} from '@angular/http';

// get site json
import { SiteService } from '../services/site.service';

// set header view
@Component({
    moduleId: module.id,
    selector: 'app-main-template',
    templateUrl: '../../assets/templates/app.home.html',
    providers: [SiteService]
})
export class AppHomeComponent  {
    sites: Sites[];
    homeContents: HomeContents[];
    constructor(private siteService: SiteService) {
        this.siteService.getHeader().subscribe(sites => {
            this.sites = sites;
        });
        this.siteService.getHome().subscribe(home => {
            this.homeContents = home;
        });
    }
}

interface Sites {
    slogan1: string;
    slogan2: string;
}
interface HomeContents {
    content1: Content[];
}
interface Content {
    id: number;
    title: string;
    content: string;
    url: string;
    class: string;
}
