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
var router_1 = require('@angular/router');
var index_1 = require('../_services/index');
var SignUpComponent = (function () {
    function SignUpComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.user = {};
        this.loggingIn = new core_1.EventEmitter();
        this.loading = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        // reset login status
        this.user = { name: "", email: "", password: "" };
    };
    SignUpComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.signup(this.user.name, this.user.email, this.user.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.loggingIn.emit(true);
                _this.router.navigate(['/']);
            }
            else {
                // this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SignUpComponent.prototype, "loggingIn", void 0);
    SignUpComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/signup/signup.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.AuthenticationService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map