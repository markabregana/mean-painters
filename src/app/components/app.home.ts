import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from '../filter.pipe';


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
    servicesContent: ServicesContent[];
    constructor(private siteService: SiteService) {
        this.siteService.getHeader().subscribe(sites => {
            this.sites = sites;
        });
        this.siteService.getHome().subscribe(home => {
            this.homeContents = home;
        });
        this.siteService.getServices().subscribe(services => {
            this.servicesContent = services;
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
interface ServicesContent {
    content1: Content[];
}
interface Content {
    id: number;
    title: string;
    content: string;
    url: string;
    class: string;
    featuredImage: string;
}
