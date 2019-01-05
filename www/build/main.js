webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAfterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginAfterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginAfterPage = /** @class */ (function () {
    function LoginAfterPage(navCtrl, navParams, sessionS, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sessionS = sessionS;
        this.viewCtrl = viewCtrl;
        this.loginSession = this.sessionS.getObject('login');
    }
    LoginAfterPage.prototype.ionViewDidLoad = function () {
        console.log(this.loginSession);
        console.log('ionViewDidLoad LoginAfterPage');
    };
    LoginAfterPage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    LoginAfterPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
        console.log('asdasd');
    };
    LoginAfterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-after',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/login-after/login-after.html"*/'<!--\n  Generated template for the LoginAfterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <div class="header-logo">\n      <img src="assets/imgs/logo.png" alt="" width="300px">\n  </div>\n  <div class="content-login" *ngIf="loginSession == 0">\n      <input type="text" placeholder="Email">\n      <input type="password" placeholder="Contraseña">\n      <button ion-button class="goLogin" (click)="goHome()" >Ingresar</button>\n      <button ion-button class="goLogin goBack" (click)="goBack()">Regresar</button>\n  </div>\n\n  <div class="content-login-register" *ngIf="loginSession == 1">\n      <input type="text" placeholder="Nombre">\n      <input type="text" placeholder="Apellido">\n      <input type="text" placeholder="Email">\n      <input type="password" placeholder="Contraseña">\n      <input type="password" placeholder="Repetir contraseña">\n      <button ion-button class="goLogin" (click)="goHome()" >Aceptar y Ingresar</button>\n      <button ion-button class="goLogin goBack" (click)="goBack()" >Regresar</button>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/login-after/login-after.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], LoginAfterPage);
    return LoginAfterPage;
}());

//# sourceMappingURL=login-after.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_reading_internal_reading_internal__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReadingPage = /** @class */ (function () {
    function ReadingPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ReadingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReadingPage');
    };
    ReadingPage.prototype.goView = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_reading_internal_reading_internal__["a" /* ReadingInternalPage */]);
        profileModal.present();
        //this.navCtrl.push(ReadingInternalPage)
        console.log('richard');
    };
    ReadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reading',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/reading/reading.html"*/'<!--\n  Generated template for the ReadingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content >\n    <ion-card class="public-state">\n          \n        <ion-item>\n          <ion-avatar item-start>\n              <img src="assets/imgs/user.png" alt="">\n          </ion-avatar>\n          <h2>En Estado Beta</h2>\n          <p class="date-public">04 Jun 2019</p>\n        </ion-item>  \n        <ion-card-content class="card-post">\n          <p>It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .\n            <a href="#" (click)="goView()">Ver Lectura Completa</a>\n          </p>\n        </ion-card-content>\n      \n        <ion-row>\n            <button ion-button color="dark" clear>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <p>Like</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <ion-icon name="text"></ion-icon>\n              <p>Comentar</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <ion-icon name="share-alt"></ion-icon>\n              <p>Compartir</p>\n            </button>\n        </ion-row>\n      \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/reading/reading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ReadingPage);
    return ReadingPage;
}());

//# sourceMappingURL=reading.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingInternalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReadingInternalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReadingInternalPage = /** @class */ (function () {
    function ReadingInternalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ReadingInternalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReadingInternalPage');
    };
    ReadingInternalPage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    ReadingInternalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reading-internal',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/reading-internal/reading-internal.html"*/'<!--\n  Generated template for the ReadingInternalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n    <ion-header style="background-image: url(\'assets/imgs/fondo.jpg\');">\n        <div class="nav">\n            <button ion-button class="forget" color="light" clear (click)="goBack()"><ion-icon name="ios-arrow-back-outline" class="arrow-back"></ion-icon>Back</button>\n            <button ion-button class="forget" color="light" clear><ion-icon ios="ios-share" md="md-share" ></ion-icon></button>\n        </div>\n        \n        \n        <h3>Las lecciones de los gigantes digitales</h3>\n        <div class="after">\n\n        </div>\n        </ion-header>\n        <div class="content-text">\n            <div class="perfil-news">\n                <img src="assets/imgs/user.png" alt="">\n                <div>\n                  <p>Publicado por Luis Felix</p>\n                  <p class="hour">Hace 4 horas</p>\n                </div>\n              </div>\n              <p class="text">It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n        </div>\n        <div class="ion-row">\n            <button ion-button color="dark" clear>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <p>Like</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <ion-icon name="text"></ion-icon>\n              <p>Comentar</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <ion-icon name="share-alt"></ion-icon>\n              <p>Compartir</p>\n            </button>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/reading-internal/reading-internal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ReadingInternalPage);
    return ReadingInternalPage;
}());

//# sourceMappingURL=reading-internal.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_after_login_after__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, sessionS) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sessionS = sessionS;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginPage = function (index) {
        this.sessionS.setObject('login', index);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_after_login_after__["a" /* LoginAfterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <div class="container">\n    <img src="assets/imgs/logo.png" alt="">\n    <p>Lo mejor de la innovación <br>\n        en la palma de tu mano</p>\n        <button ion-button class="linkedinButton"> <ion-icon name="logo-linkedin"></ion-icon>  Ingresar con Linkedin</button>\n        <button ion-button color="dark" class="mailButton"  (click)="loginPage(0)">Ingresar con Email</button>\n        <button ion-button class="forget" color="light" clear>Olvide la contraseña</button>\n        <button ion-button class="register" (click)="loginPage(1)">Registrar</button>\n        <p class="terminos">Al registrarte e ingresar esdtas deacuerdo <br>\n            con nuestros Términos y condiciones</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login-after/login-after.module": [
		276,
		3
	],
	"../pages/login/login.module": [
		277,
		2
	],
	"../pages/reading-internal/reading-internal.module": [
		278,
		1
	],
	"../pages/reading/reading.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reading_reading__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(sessionS, events) {
        var _this = this;
        this.sessionS = sessionS;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__reading_reading__["a" /* ReadingPage */];
        this.menuAppear = 'none';
        this.inscript = '';
        this.sessionS.setObject('paramInscrip', 'none');
        this.inscript = this.sessionS.getObject('paramInscrip');
        events.subscribe('user:login', function () {
            _this.inscribe();
        });
    }
    TabsPage.prototype.menuOpen = function () {
        this.menuAppear = 'block';
        console.log('asdasdasd');
    };
    TabsPage.prototype.menuClose = function () {
        this.menuAppear = 'none';
    };
    TabsPage.prototype.inscribe = function () {
        var _this = this;
        console.log('Timer Start');
        var start = Date.now();
        var timeOutHandler = setTimeout(function () {
            var e = Date.now() - start;
            console.log('Timer End', e);
            _this.sessionS.setObject('paramInscrip', 'none');
            _this.inscript = _this.sessionS.getObject('paramInscrip');
        }, 2000);
        this.inscript = this.sessionS.getObject('paramInscrip');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/tabs/tabs.html"*/'<ion-header>\n  <button ion-button color="dark" clear (click)="menuOpen()">\n    <ion-icon name="ios-menu-outline" style="font-size: 25px;"></ion-icon>\n  </button>\n  <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n  <button ion-button color="dark" clear>\n    <ion-icon name="ios-notifications-outline" style="font-size: 25px;"></ion-icon>\n  </button>\n</ion-header>\n\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Todos" tabIcon="ios-infinite"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Eventos" tabIcon="md-calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Videos" tabIcon="ios-videocam-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Lectura" tabIcon="md-glasses"></ion-tab>\n</ion-tabs>\n\n<div class="menu" [ngStyle]="{\'display\': menuAppear}">\n    <button ion-button color="dark" clear class="closeMenu" (click)="menuClose()"> \n      <ion-icon name="close" style="font-size: 25px;"></ion-icon>\n    </button> \n    <img src="assets/imgs/user.png" alt="">\n    <h3>Francisco Aguaro</h3>\n    <button ion-button color="dark" clear class="logOut">\n        Salir del app\n      </button>\n\n      <div class="container-menu-buttons">\n          <button ion-button clear>\n              Mis datos\n          </button>\n          <button ion-button clear>\n              Mis eventos\n          </button>\n          <button ion-button clear>\n              Contáctanos\n          </button>\n      </div>\n      \n  </div>\n\n  <div class="check" [ngStyle]="{\'display\': inscript}">\n      <div class="icon-text">\n          <ion-icon name="checkmark-circle-outline"></ion-icon>\n          <p>Inscrito</p>\n      </div>\n    </div>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, sessionS, events) {
        this.navCtrl = navCtrl;
        this.sessionS = sessionS;
        this.events = events;
    }
    // inscribe() {
    //   this.sessionS.setObject('paramInscrip','block')
    //   console.log('red')
    // }
    AboutPage.prototype.inscribe = function () {
        this.sessionS.setObject('paramInscrip', 'flex');
        this.events.publish('user:login');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/about/about.html"*/'<ion-content style="padding-top:50px">\n  <ion-card class="public-state">\n          \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/user.png" alt="">\n      </ion-avatar>\n      <h2>En Estado Beta</h2>\n      <p class="date-public">04 Jun 2019</p>\n    </ion-item>  \n    <ion-card-content class="card-post">\n      <img src="assets/imgs/test1.jpg" alt="">\n    <div class="treeItems">\n      <div class="day">\n        <p>Enero</p>\n        <h4>25</h4>\n      </div>\n      <div class="name">\n        <p class="nameInter">Bootcamp Cultura y Talento</p>\n        <p class="lugar">Juan de Aliaga 123, Magdalena</p>\n      </div>\n      <div class="button">\n          <button ion-button class="button-inscribir" (click)="inscribe()">Inscribirme</button>\n      </div>\n    </div>\n  </ion-card-content>\n  \n    <ion-row>\n        <button ion-button color="dark" clear>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <p>Like</p>\n        </button>\n        <button ion-button color="dark" clear>\n          <ion-icon name="text"></ion-icon>\n          <p>Comentar</p>\n        </button>\n        <button ion-button color="dark" clear>\n          <ion-icon name="share-alt"></ion-icon>\n          <p>Compartir</p>\n        </button>\n    </ion-row>\n  \n  </ion-card>\n  <ion-card class="public-state">\n          \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/user.png" alt="">\n        </ion-avatar>\n        <h2>En Estado Beta</h2>\n        <p class="date-public">04 Jun 2019</p>\n      </ion-item>  \n      <ion-card-content class="card-post">\n        <img src="assets/imgs/test1.jpg" alt="">\n      <div class="treeItems">\n        <div class="day">\n          <p>Enero</p>\n          <h4>25</h4>\n        </div>\n        <div class="name">\n          <p class="nameInter">Bootcamp Cultura y Talento</p>\n          <p class="lugar">Juan de Aliaga 123, Magdalena</p>\n        </div>\n        <div class="button">\n            <button ion-button class="button-inscribir">Inscribirme</button>\n        </div>\n      </div>\n    </ion-card-content>\n    \n      <ion-row>\n          <button ion-button color="dark" clear>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <p>Like</p>\n          </button>\n          <button ion-button color="dark" clear>\n            <ion-icon name="text"></ion-icon>\n            <p>Comentar</p>\n          </button>\n          <button ion-button color="dark" clear>\n            <ion-icon name="share-alt"></ion-icon>\n            <p>Compartir</p>\n          </button>\n      </ion-row>\n    \n    </ion-card>\n    <ion-card class="public-state">\n          \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imgs/user.png" alt="">\n          </ion-avatar>\n          <h2>En Estado Beta</h2>\n          <p class="date-public">04 Jun 2019</p>\n        </ion-item>  \n        <ion-card-content class="card-post">\n          <img src="assets/imgs/test1.jpg" alt="">\n        <div class="treeItems">\n          <div class="day">\n            <p>Enero</p>\n            <h4>25</h4>\n          </div>\n          <div class="name">\n            <p class="nameInter">Bootcamp Cultura y Talento</p>\n            <p class="lugar">Juan de Aliaga 123, Magdalena</p>\n          </div>\n          <div class="button">\n              <button ion-button class="button-inscribir">Inscribirme</button>\n          </div>\n        </div>\n      </ion-card-content>\n      \n        <ion-row>\n            <button ion-button color="dark" clear>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <p>Like</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <ion-icon name="text"></ion-icon>\n              <p>Comentar</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <ion-icon name="share-alt"></ion-icon>\n              <p>Compartir</p>\n            </button>\n        </ion-row>\n      \n      </ion-card>\n      \n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/contact/contact.html"*/'\n<ion-content>\n    <ion-card class="public-state">\n          \n        <ion-item>\n          <ion-avatar item-start>\n              <img src="assets/imgs/user.png" alt="">\n          </ion-avatar>\n          <h2>En Estado Beta</h2>\n          <p class="date-public">04 Jun 2019</p>\n        </ion-item>  \n        <ion-card-content class="card-post">\n            <iframe src="https://player.vimeo.com/video/222523035" style="width: 100% !important;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n          <h4>Hackaton la cultura</h4>\n          <p>Beta Talk</p>\n      </ion-card-content>\n      \n        <ion-row>\n            <button ion-button color="dark" clear>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <p>Like</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <ion-icon name="text"></ion-icon>\n              <p>Comentar</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <ion-icon name="share-alt"></ion-icon>\n              <p>Compartir</p>\n            </button>\n        </ion-row>\n      \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/home/home.html"*/'\n<ion-content >\n  <div >\n\n      <div class="slide-general">\n          <ion-slides  pager class="sliderBanner" >\n              <ion-slide>\n                <div>\n          \n                </div>\n              </ion-slide>\n              <ion-slide>\n                <div>\n          \n                </div>\n              </ion-slide>\n              <ion-slide>\n                <div>\n          \n                </div>\n              </ion-slide>\n            </ion-slides>\n          \n            <ion-card class="public-state">\n          \n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="assets/imgs/user.png" alt="">\n                </ion-avatar>\n                <h2>En Estado Beta</h2>\n                <p class="date-public">04 Jun 2019</p>\n              </ion-item>  \n              <ion-card-content class="card-post">\n                <p>It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n              </ion-card-content>\n            \n              <ion-row>\n                  <button ion-button color="dark" clear>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <p>Like</p>\n                  </button>\n                  <button ion-button color="dark" clear>\n                    <ion-icon name="text"></ion-icon>\n                    <p>Comentar</p>\n                  </button>\n                  <button ion-button color="dark" clear>\n                    <ion-icon name="share-alt"></ion-icon>\n                    <p>Compartir</p>\n                  </button>\n              </ion-row>\n            \n            </ion-card>\n            <ion-card class="public-state">\n          \n                <ion-item>\n                  <ion-avatar item-start>\n                    <img src="assets/imgs/user.png" alt="">\n                  </ion-avatar>\n                  <h2>En Estado Beta</h2>\n                  <p class="date-public">04 Jun 2019</p>\n                </ion-item>  \n                <ion-card-content class="card-post">\n                  <p>It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n                </ion-card-content>\n              \n                <ion-row>\n                    <button ion-button color="dark" clear>\n                      <ion-icon name="thumbs-up"></ion-icon>\n                      <p>Like</p>\n                    </button>\n                    <button ion-button color="dark" clear>\n                      <ion-icon name="text"></ion-icon>\n                      <p>Comentar</p>\n                    </button>\n                    <button ion-button color="dark" clear>\n                      <ion-icon name="share-alt"></ion-icon>\n                      <p>Compartir</p>\n                    </button>\n                </ion-row>\n              \n              </ion-card>\n              <ion-card class="public-state">\n          \n                  <ion-item>\n                    <ion-avatar item-start>\n                      <img src="assets/imgs/user.png" alt="">\n                    </ion-avatar>\n                    <h2>En Estado Beta</h2>\n                    <p class="date-public">04 Jun 2019</p>\n                  </ion-item>  \n                  <ion-card-content class="card-post">\n                    <p>It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n                  </ion-card-content>\n                \n                  <ion-row>\n                      <button ion-button color="dark" clear>\n                        <ion-icon name="thumbs-up"></ion-icon>\n                        <p>Like</p>\n                      </button>\n                      <button ion-button color="dark" clear>\n                        <ion-icon name="text"></ion-icon>\n                        <p>Comentar</p>\n                      </button>\n                      <button ion-button color="dark" clear>\n                        <ion-icon name="share-alt"></ion-icon>\n                        <p>Compartir</p>\n                      </button>\n                  </ion-row>\n                \n                </ion-card>\n                <ion-card class="public-state">\n          \n                    <ion-item>\n                      <ion-avatar item-start>\n                        <img src="assets/imgs/user.png" alt="">\n                      </ion-avatar>\n                      <h2>En Estado Beta</h2>\n                      <p class="date-public">04 Jun 2019</p>\n                    </ion-item>  \n                    <ion-card-content class="card-post">\n                      <p>It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n                    </ion-card-content>\n                  \n                    <ion-row>\n                        <button ion-button color="dark" clear>\n                          <ion-icon name="thumbs-up"></ion-icon>\n                          <p>Like</p>\n                        </button>\n                        <button ion-button color="dark" clear>\n                          <ion-icon name="text"></ion-icon>\n                          <p>Comentar</p>\n                        </button>\n                        <button ion-button color="dark" clear>\n                          <ion-icon name="share-alt"></ion-icon>\n                          <p>Compartir</p>\n                        </button>\n                    </ion-row>\n                  \n                  </ion-card>\n                </div>\n    \n    \n      </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reading_reading__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_after_login_after__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_reading_internal_reading_internal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_session_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reading_reading__["a" /* ReadingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_after_login_after__["a" /* LoginAfterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_reading_internal_reading_internal__["a" /* ReadingInternalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login-after/login-after.module#LoginAfterPageModule', name: 'LoginAfterPage', segment: 'login-after', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reading-internal/reading-internal.module#ReadingInternalPageModule', name: 'ReadingInternalPage', segment: 'reading-internal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reading/reading.module#ReadingPageModule', name: 'ReadingPage', segment: 'reading', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reading_reading__["a" /* ReadingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_after_login_after__["a" /* LoginAfterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_reading_internal_reading_internal__["a" /* ReadingInternalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__services_session_service__["a" /* SessionService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    SessionService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    SessionService.prototype.setObject = function (key, object) {
        var value = JSON.stringify(object);
        localStorage.setItem(key, value);
    };
    SessionService.prototype.getObject = function (key) {
        var value = localStorage.getItem(key);
        return JSON.parse(value);
    };
    SessionService.prototype.destroy = function (key) {
        localStorage.removeItem(key);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());

//# sourceMappingURL=session.service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map