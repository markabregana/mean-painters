"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
// get site json
var site_service_1 = require("../services/site.service");
// set header view
var AppHeader = (function () {
    function AppHeader(headerService) {
        var _this = this;
        this.headerService = headerService;
        this.headerService.getHeader().subscribe(function (sites) {
            _this.sites = sites;
        });
    }
    return AppHeader;
}());
AppHeader = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'header-template',
        templateUrl: '/view/templates/app.header.html',
        providers: [site_service_1.SiteService]
    }),
    __metadata("design:paramtypes", [site_service_1.SiteService])
], AppHeader);
exports.AppHeader = AppHeader;
//# sourceMappingURL=app.header.js.map