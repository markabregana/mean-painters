"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
// import routing
var app_routing_1 = require("./app.routing");
// import index html
var app_component_1 = require("./app.component");
// import header html
var app_header_1 = require("./components/app.header");
// import footer html
var app_footer_1 = require("./components/app.footer");
// import home html
var app_home_1 = require("./components/app.home");
// import About Us html
var app_aboutus_1 = require("./components/app.aboutus");
// import Services html
var app_services_1 = require("./components/app.services");
// import About Us html
var app_gallery_1 = require("./components/app.gallery");
// import Contact Us html
var app_contactus_1 = require("./components/app.contactus");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, app_header_1.AppHeader, app_footer_1.AppFooter, app_home_1.AppHome, app_aboutus_1.AppAboutUs, app_services_1.AppServices, app_gallery_1.AppGallery, app_contactus_1.AppContactUs],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map