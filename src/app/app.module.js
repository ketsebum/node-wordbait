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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// import { BaseRequestOptions } from '@angular/http';
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
var app_component_1 = require('./app.component');
var index_1 = require('./header/index');
var index_2 = require('./menu/index');
var index_3 = require('./footer/index');
var app_routing_1 = require('./app.routing');
var index_4 = require('./_guards/index');
var index_5 = require('./_services/index');
var index_6 = require('./login/index');
var index_7 = require('./signup/index');
var index_8 = require('./home/index');
/* Feature Modules */
// import { ProductModule } from './products/product.module';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.loggingIn = function (loggedIn) {
        console.log(loggedIn);
    };
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_6.LoginComponent,
                index_1.HeaderComponent,
                index_2.MenuComponent,
                index_3.FooterComponent,
                index_7.SignUpComponent,
                index_8.WelcomeComponent
            ],
            providers: [
                index_4.AuthGuard,
                index_5.AuthenticationService,
                index_5.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map