import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


// get site json from view/data/
@Injectable()
export class SiteService{
    constructor(private http: Http){
        //console.log(this.getHeader().subscribe());
    }

    getHeader(){
        return this.http.get('/assets/data/site.json')
            .map(res => res.json());
    }
    getHome(){
        return this.http.get('/assets/data/home.json')
            .map(res => res.json());
    }
}
