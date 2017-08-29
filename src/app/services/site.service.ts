import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


// get site json from view/data/
@Injectable()
export class SiteService {
    constructor(private http: Http) {
        // console.log(this.getHeader().subscribe());
    }

    getHeader() {
        return this.http.get('/assets/data/site.json')
            .map(res => res.json());
    }
    getHome() {
        return this.http.get('/assets/data/home.json')
            .map(res => res.json());
    }
    getServices() {
        return this.http.get('/assets/data/services.json')
            .map(res => res.json());
    }
    getPage(page) {
        return this.http.get('/assets/data/' + page + '.json')
        .map(res => res.json());
    }
    getImageGallery() {
        return this.http.get('/assets/data/image-gallery.json')
            .map(res => res.json());
    }
}
