import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-header-template></app-header-template>
    <router-outlet></router-outlet>
    <app-footer-template></app-footer-template>
  `,
})
export class AppComponent  { }
