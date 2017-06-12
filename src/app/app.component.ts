import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header-template></header-template>
    <router-outlet></router-outlet>
    <footer-template></footer-template>
  `,
})
export class AppComponent  {

}
