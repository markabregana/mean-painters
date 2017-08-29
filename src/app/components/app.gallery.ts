import { Component } from '@angular/core';

// get site json
import { SiteService } from '../services/site.service';

// set header view
@Component({
    moduleId: module.id,
    selector: 'app-main-template',
    templateUrl: '../../assets/templates/app.gallery.html',
    providers: [SiteService]
})
export class AppGalleryComponent {
    sites: Sites[];
    pages: Content[];
    galleryContent: Gallery[];
    constructor(private headerService: SiteService) {
        this.headerService.getHeader().subscribe(sites => {
            this.sites = sites;
        });
        this.headerService.getPage('page-gallery').subscribe( page => {
            this.pages = page;
        });
        this.headerService.getImageGallery().subscribe( gallery => {
            this.galleryContent = gallery;
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
interface Gallery {
    id: number;
    title: string;
    images: Images[];
}
interface Images {
    id: number;
    src: string;
    alt: string;
}
