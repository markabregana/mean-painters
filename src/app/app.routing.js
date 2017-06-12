"use strict";
var router_1 = require("@angular/router");
var app_home_1 = require("./components/app.home");
var app_aboutus_1 = require("./components/app.aboutus");
var app_services_1 = require("./components/app.services");
var app_gallery_1 = require("./components/app.gallery");
var app_contactus_1 = require("./components/app.contactus");
var appRoutes = [
    {
        path: '',
        component: app_home_1.AppHome
    },
    {
        path: 'about-us',
        component: app_aboutus_1.AppAboutUs
    },
    {
        path: 'services',
        component: app_services_1.AppServices
    },
    {
        path: 'gallery',
        component: app_gallery_1.AppGallery
    },
    {
        path: 'contact-us',
        component: app_contactus_1.AppContactUs
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map