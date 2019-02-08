webpackJsonp([7],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reading_reading__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_services__ = __webpack_require__(43);
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
    function TabsPage(sessionS, events, services) {
        var _this = this;
        this.sessionS = sessionS;
        this.events = events;
        this.services = services;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__reading_reading__["a" /* ReadingPage */];
        this.menuAppear = 'none';
        this.inscript = '';
        var body = { 'device': this.sessionS.getObject('device') };
        var header = { 'headers': { 'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token } };
        this.services.updateIdDevice(body, header).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            //alert('Usuario o contraseña incorrecto');
        });
        this.sessionS.setObject('paramInscrip', 'none');
        this.user = this.sessionS.getObject('user').data;
        this.nameUser = this.user.name.split(" ")[0] + " " + this.user.lastname.split(" ")[0];
        console.log(this.nameUser);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/tabs/tabs.html"*/'<ion-header>\n  <button ion-button color="dark" clear (click)="menuOpen()">\n    <ion-icon name="ios-menu-outline" style="font-size: 25px;"></ion-icon>\n  </button>\n  <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n  <button ion-button color="dark" clear>\n    <ion-icon name="ios-notifications-outline" style="font-size: 25px;"></ion-icon>\n  </button>\n</ion-header>\n<div class="tapsBackground">\n\n</div>\n<ion-tabs>\n  <!-- <ion-tab [root]="tab1Root" tabTitle="Todos" tabIcon="ios-infinite"></ion-tab> -->\n  <ion-tab [root]="tab2Root" tabTitle="Eventos" tabIcon="md-calendar"></ion-tab>\n  <!-- <ion-tab [root]="tab3Root" tabTitle="Videos" tabIcon="ios-videocam-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Lectura" tabIcon="md-glasses"></ion-tab> -->\n</ion-tabs>\n\n<div class="menu" [ngStyle]="{\'display\': menuAppear}">\n    <button ion-button color="dark" clear class="closeMenu" (click)="menuClose()"> \n      <ion-icon name="close" style="font-size: 25px;"></ion-icon>\n    </button> \n    <img src="assets/imgs/user.png" alt="">\n    <h3 style="text-transform:capitalize;">{{nameUser}}</h3>\n    <button ion-button color="dark" clear class="logOut">\n        Salir del app\n      </button>\n\n      <div class="container-menu-buttons">\n          <button ion-button clear>\n              Mis datos\n          </button>\n          <button ion-button clear>\n              Mis eventos\n          </button>\n          <button ion-button clear>\n              Contáctanos\n          </button>\n      </div>\n      \n  </div>\n\n  <div class="check" [ngStyle]="{\'display\': inscript}">\n      <div class="icon-text">\n          <ion-icon name="checkmark-circle-outline"></ion-icon>\n          <p>Inscrito</p>\n      </div>\n    </div>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_7__providers_services_services__["a" /* ServicesAuth */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__(36);
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(loadingCtrl, platform, services, sessionS, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.services = services;
        this.sessionS = sessionS;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = this.loadingCtrl.create({
            content: ''
        });
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        this.notification = this.sessionS.getObject('notification');
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.noIr = function () {
        var _this = this;
        this.loading.present();
        var header = { 'headers': {
                'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token
            }
        };
        this.services.denegadoNotification(header, this.notification.additionalData.event).subscribe(function (response) {
            console.log(response, 'no');
            _this.loading.dismiss();
            _this.platform.exitApp();
        }, function (error) {
            //alert('Usuario o contraseña incorrecto');
        });
        console.log('dasd222ad');
    };
    NotificationPage.prototype.ir = function () {
        var _this = this;
        this.loading.present();
        var header = { 'headers': {
                'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token
            }
        };
        this.services.aceptNotification(header, this.notification.additionalData.event).subscribe(function (response) {
            console.log(response, 'si');
            _this.loading.dismiss();
            _this.platform.exitApp();
        }, function (error) {
            //alert('Usuario o contraseña incorrecto');
        });
        console.log('dasdad');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <div class="container">\n    <div style="text-align:center">\n      <i class="far fa-calendar-alt" style="font-size: 85px;color: #8e1789;"></i>\n      <h1 style="color: #8e1789;">Tienes un evento hoy dia</h1>\n      <p>Porfavor confirma tu asistencia</p>\n      <button ion-button color="dark" (click)="ir()" style="background: rgb(141, 31 ,136) !important;width: 100%;border-radius: 30px;height: 55px; margin-bottom: 10px;margin-top: 10px;">Si asistiré</button>\n      <button ion-button color="dark" (click)="noIr()" clear style="width: 100%;border-radius: 30px;height: 55px;">No asistiré</button>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesAuth */], __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 144:
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
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/coment/coment.module": [
		445,
		6
	],
	"../pages/login-after/login-after.module": [
		446,
		5
	],
	"../pages/login/login.module": [
		447,
		4
	],
	"../pages/notification/notification.module": [
		448,
		3
	],
	"../pages/qr/qr.module": [
		451,
		2
	],
	"../pages/reading-internal/reading-internal.module": [
		449,
		1
	],
	"../pages/reading/reading.module": [
		450,
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
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_coment_coment__ = __webpack_require__(251);
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
    function AboutPage(modalCtrl, socialSharing, loadingCtrl, alertCtrl, navCtrl, sessionS, events, services) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.sessionS = sessionS;
        this.events = events;
        this.services = services;
        this.segmentos = "events";
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        this.services.listEventsHistory({ 'headers': { 'Authorization': "Bearer" + " " + this.sessionS.getObject('answertoken').access_token } }).subscribe(function (response) {
            // this.sessionS.setObject('ListEvents',response.data)
            _this.listEvents = response.data.data;
            loading.dismiss();
            console.log(_this.listEvents);
        }, function (error) {
            //alert('Usuario o contraseña incorrecto');
        });
    }
    // inscribe() {
    //   this.sessionS.setObject('paramInscrip','block')
    //   console.log('red')
    // }
    AboutPage.prototype.changeTileType = function () {
        var _this = this;
        if (this.segmentos == "history") {
            var loading_1 = this.loadingCtrl.create({
                content: ''
            });
            loading_1.present();
            this.services.listEvents({ 'headers': { 'Authorization': "Bearer" + " " + this.sessionS.getObject('answertoken').access_token } }).subscribe(function (response) {
                // this.sessionS.setObject('ListEvents',response.data)
                _this.listEvents = response.data.data;
                loading_1.dismiss();
                console.log(_this.listEvents);
            }, function (error) {
                //alert('Usuario o contraseña incorrecto');
            });
        }
        else {
            var loading_2 = this.loadingCtrl.create({
                content: ''
            });
            loading_2.present();
            this.services.listEventsHistory({ 'headers': { 'Authorization': "Bearer" + " " + this.sessionS.getObject('answertoken').access_token } }).subscribe(function (response) {
                // this.sessionS.setObject('ListEvents',response.data)
                _this.listEvents = response.data.data;
                loading_2.dismiss();
                console.log(_this.listEvents);
            }, function (error) {
                //alert('Usuario o contraseña incorrecto');
            });
        }
    };
    AboutPage.prototype.share = function (events) {
        this.socialSharing.share(events.name + ',  ' + 'en' + ' ' + events.address, '', events.image, 'http://betaapp.atypax.com').then(function () {
            // Success!
        }).catch(function () {
            // Error!
        });
    };
    AboutPage.prototype.like = function (events) {
        var body = {};
        if (events.liked == 1) {
            body = { 'event': events.id, 'status': 0 };
            events.liked = 0;
        }
        else {
            body = { 'event': events.id, 'status': 1 };
            events.liked = 1;
        }
        var header = { 'headers': { 'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token } };
        this.services.like(body, header).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            //alert('Usuario o contraseña incorrecto');
        });
        console.log();
    };
    AboutPage.prototype.coment = function (events) {
        this.sessionS.setObject('event', events);
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_coment_coment__["a" /* ComentPage */]);
        profileModal.present();
    };
    AboutPage.prototype.inscribeDelete = function (events) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Esta seguro que no podras asistir?',
            message: 'No podras inscribirte de nuevo a este programa',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Acepto',
                    handler: function () {
                        var body = { 'event': events.id, 'type': 'DELETE' };
                        var header = { 'headers': { 'Authorization': _this.sessionS.getObject('answertoken').token_type + " " + _this.sessionS.getObject('answertoken').access_token } };
                        console.log(events);
                        _this.services.inscribedEvent(body, header).subscribe(function (response) {
                            events.enrolled = response.data.status;
                            //console.log()
                        }, function (error) {
                            //alert('Usuario o contraseña incorrecto');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AboutPage.prototype.inscribe = function (events) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        var body = { 'event': events.id };
        var header = { 'headers': { 'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token } };
        console.log(events);
        // events.enrolled = 1;
        this.sessionS.setObject('paramInscrip', 'flex');
        this.services.inscribedEvent(body, header).subscribe(function (response) {
            loading.dismiss();
            if (response.data.status == 1) {
                _this.events.publish('user:login');
            }
            events.enrolled = response.data.status;
        }, function (error) {
            //alert('Usuario o contraseña incorrecto');
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/about/about.html"*/'<ion-content style="padding-top:50px">\n\n    <ion-toolbar style="width: 90%;margin: auto;">\n        <ion-segment [(ngModel)]="segmentos" (ionChange)="changeTileType()">\n          <ion-segment-button value="events">\n            Eventos disponibles\n          </ion-segment-button>\n          <ion-segment-button value="history">\n            Historial de eventos\n          </ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>\n  <ion-card class="public-state" *ngFor="let events of listEvents">\n          \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/user.png" alt="">\n      </ion-avatar>\n      <h2>En Estado Beta</h2>\n      <p class="date-public">{{events.created_at | date : \'dd MMM yyyy\'}}</p>\n    </ion-item>  \n    <ion-card-content class="card-post">\n      <img src="{{events.image}}" alt="">\n    <div class="treeItems">\n      <div class="day">\n        <p>{{events.date_start | date : \'MMM\'}}</p>\n        <h4>{{events.date_start | date : \'dd\'}}</h4>\n      </div>\n      <div class="name">\n        <p class="nameInter">{{events.name}}</p>\n        <p class="lugar">{{events.address}}</p>\n      </div>\n      <div class="button">\n          <button ion-button class="button-inscribir" (click)="inscribe(events)" *ngIf="events.enrolled == null">Inscribirme</button>\n          <button ion-button class="button-inscribir" (click)="inscribe2(events)" *ngIf="events.enrolled == 0" style="background:#f7412d !important;">Cancelado</button>\n          <button ion-button class="button-inscribir" (click)="inscribeDelete(events)" *ngIf="events.enrolled == 1" style="background:black !important;"> <i class="fas fa-check" style="margin-right: 5px;"></i>Inscrito</button>\n          <button ion-button class="button-inscribir" (click)="inscribe(events)" *ngIf="events.enrolled == 2" style="background:#fba852 !important;"> <i class="far fa-clock" style="margin-right: 5px;"></i>En espera</button>\n      </div>\n    </div>\n  </ion-card-content>\n  \n    <ion-row  [ngClass]=" {\'border\' :  events.last_comment != null}">\n        <button ion-button color="dark" clear style="margin-bottom: 8px;" [ngClass]=" {\'active\' :  events.liked == 1}" (click)="like(events)">\n          <i class="far fa-thumbs-up"></i>\n          <p>Like</p>\n        </button>\n        <button ion-button (click)="coment(events)" color="dark" clear style="border-right: 1px solid #efefef !important;margin-bottom: 8px;border-left: 1px solid #efefef !important;">\n          <i class="far fa-comment"></i>\n          <p>Comentar</p>\n        </button>\n        <button ion-button color="dark" clear style="margin-bottom: 8px;" (click)="share(events)">\n          <i class="far fa-share-square"></i>\n          <p>Compartir</p>\n        </button>\n    </ion-row>\n    <div *ngIf="events.last_comment != null">\n      <ion-item>\n        <ion-avatar item-start style="margin: 8px 2px 8px 0;min-width:33px !important;display: flex;align-items: center;">\n          <img src="{{events.last_comment.user.avatar}}" alt="" style="width: 30px;height: auto;">\n        </ion-avatar>\n        <h2 style="font-size: 12px;">{{events.last_comment.user.name}}</h2>\n        <p style="font-size: 10px;" class="date-public">{{events.last_comment.created_at | date : \'dd MMM yyyy\'}}</p>\n      </ion-item>\n      <p style="padding: 0px 17px 10px 17px; color:rgb(134, 134, 134); font-size: 11px;">{{events.last_comment.text}}</p> \n    </div>\n  </ion-card>\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesAuth */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__(36);
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
 * Generated class for the ComentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComentPage = /** @class */ (function () {
    function ComentPage(loadingCtrl, sessionS, services, modalCtrl, navCtrl, navParams, viewCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.sessionS = sessionS;
        this.services = services;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.comentText = "";
        this.idEvent = this.sessionS.getObject('event').id;
    }
    ComentPage.prototype.ionViewDidLoad = function () {
        this.getComents();
        console.log('ionViewDidLoad ComentPage');
    };
    ComentPage.prototype.getComents = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        var header = { 'headers': {
                'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token
            }
        };
        this.services.listComent(header, this.idEvent).subscribe(function (response) {
            _this.listComent = response.data.comments.reverse();
            console.log(_this.listComent);
            loading.dismiss();
        }, function (error) {
        });
    };
    ComentPage.prototype.dismissPages = function () {
        this.viewCtrl.dismiss();
    };
    ComentPage.prototype.sendComent = function () {
        var _this = this;
        var body = {
            'text': this.comentText,
            'event': this.idEvent
        };
        var header = { 'headers': {
                'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token
            }
        };
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        console.log(this.comentText);
        this.services.sendComent(body, header).subscribe(function (response) {
            // this.sessionS.setObject('ListEvents',response.data)
            console.log(response);
            loading.dismiss();
            _this.getComents();
            _this.comentText = '';
        }, function (error) {
            //alert('Usuario o contraseña incorrecto');
        });
        console.log('richard');
    };
    ComentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coment',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/coment/coment.html"*/'<!--\n  Generated template for the ComentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content >\n\n  <ion-header>\n      <button (click)="dismissPages()" ion-button color="dark" clear><i class="fas fa-angle-left"></i></button>\n      <h3>Comenetarios</h3>\n      <span></span>\n  </ion-header>\n\n\n  <ion-card class="cardComent" *ngFor="let coments of listComent">\n        <div style="border-radius: 16px;margin-bottom: 10px;">\n            <ion-item style="background:none !important;">\n                <ion-avatar item-start style="margin: 8px 2px 8px 0;min-width:33px !important;display: flex;align-items: center;">\n                  <img src="{{coments.user.avatar}}" alt="" style="width: 30px;height: auto;">\n                </ion-avatar>\n                <h2 style="font-size: 13px;">{{coments.user.name}}</h2>\n                <p style="font-size: 11px;" class="date-public">{{coments .created_at | date : \'dd MMM yyyy\'}}</p>\n              </ion-item>\n              <p style="padding: 0px 17px 10px 17px;color:rgb(134, 134, 134);font-size: 13px;margin-top: -2px;">{{coments.text}}</p> \n            </div>\n          </ion-card>\n        \n</ion-content>\n\n<div class="coment-Input">\n    <ion-input type="text" value="" placeholder="Escribe tu comentario" [(ngModel)]="comentText"></ion-input>\n    <button ion-button color="dark" clear (click)="sendComent()"><ion-icon name="md-send"></ion-icon></button>  \n</div>'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/coment/coment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ComentPage);
    return ComentPage;
}());

//# sourceMappingURL=coment.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-contact',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/contact/contact.html"*/'\n<ion-content>\n    <ion-card class="public-state">\n          \n        <ion-item>\n          <ion-avatar item-start>\n              <img src="assets/imgs/user.png" alt="">\n          </ion-avatar>\n          <h2>En Estado Beta</h2>\n          <p class="date-public">04 Jun 2019</p>\n        </ion-item>  \n        <ion-card-content class="card-post">\n            <iframe src="https://player.vimeo.com/video/222523035" style="width: 100% !important;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n          <h4>Hackaton la cultura</h4>\n          <p>Beta Talk</p>\n      </ion-card-content>\n      \n        <ion-row>\n            <button ion-button color="dark" clear>\n              <i class="far fa-thumbs-up"></i>\n              <p>Like</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <i class="far fa-comment"></i>\n              <p>Comentar</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <i class="far fa-share-square"></i>\n              <p>Compartir</p>\n            </button>\n        </ion-row>\n      \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/home/home.html"*/'\n<ion-content >\n  <div >\n      <div class="slide-general">\n          <ion-slides  pager class="sliderBanner" >\n              <ion-slide>\n                <div>\n          \n                </div>\n              </ion-slide>\n              <ion-slide>\n                <div>\n          \n                </div>\n              </ion-slide>\n              <ion-slide>\n                <div>\n          \n                </div>\n              </ion-slide>\n            </ion-slides>\n          \n            <ion-card class="public-state">\n          \n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="assets/imgs/user.png" alt="">\n                </ion-avatar>\n                <h2>En Estado Beta</h2>\n                <p class="date-public">04 Jun 2019</p>\n              </ion-item>  \n              <ion-card-content class="card-post">\n                <p>It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n              </ion-card-content>\n            \n              <ion-row>\n                  <button ion-button color="dark" clear>\n                    <i class="far fa-thumbs-up"></i>\n                    <p>Like</p>\n                  </button>\n                  <button ion-button color="dark" clear>\n                    <i class="far fa-comment"></i>\n                    <p>Comentar</p>\n                  </button>\n                  <button ion-button color="dark" clear>\n                    <i class="far fa-share-square"></i>\n                    <p>Compartir</p>\n                  </button>\n              </ion-row>\n            \n            </ion-card>\n            <ion-card class="public-state">\n          \n                <ion-item>\n                  <ion-avatar item-start>\n                    <img src="assets/imgs/user.png" alt="">\n                  </ion-avatar>\n                  <h2>En Estado Beta</h2>\n                  <p class="date-public">04 Jun 2019</p>\n                </ion-item>  \n                <ion-card-content class="card-post">\n                  <p>It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n                </ion-card-content>\n              \n                <ion-row>\n                    <button ion-button color="dark" clear>\n                      <i class="far fa-thumbs-up"></i>\n                      <p>Like</p>\n                    </button>\n                    <button ion-button color="dark" clear>\n                      <i class="far fa-comment"></i>\n                      <p>Comentar</p>\n                    </button>\n                    <button ion-button color="dark" clear>\n                      <i class="far fa-share-square"></i>\n                      <p>Compartir</p>\n                    </button>\n                </ion-row>\n              \n              </ion-card>\n              <ion-card class="public-state">\n          \n                  <ion-item>\n                    <ion-avatar item-start>\n                      <img src="assets/imgs/user.png" alt="">\n                    </ion-avatar>\n                    <h2>En Estado Beta</h2>\n                    <p class="date-public">04 Jun 2019</p>\n                  </ion-item>  \n                  <ion-card-content class="card-post">\n                    <p>It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n                  </ion-card-content>\n                \n                  <ion-row>\n                      <button ion-button color="dark" clear>\n                        <i class="far fa-thumbs-up"></i>\n                        <p>Like</p>\n                      </button>\n                      <button ion-button color="dark" clear>\n                        <i class="far fa-comment"></i>\n                        <p>Comentar</p>\n                      </button>\n                      <button ion-button color="dark" clear>\n                        <i class="far fa-share-square"></i>\n                        <p>Compartir</p>\n                      </button>\n                  </ion-row>\n                \n                </ion-card>\n                <ion-card class="public-state">\n          \n                    <ion-item>\n                      <ion-avatar item-start>\n                        <img src="assets/imgs/user.png" alt="">\n                      </ion-avatar>\n                      <h2>En Estado Beta</h2>\n                      <p class="date-public">04 Jun 2019</p>\n                    </ion-item>  \n                    <ion-card-content class="card-post">\n                      <p>It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n                    </ion-card-content>\n                  \n                    <ion-row>\n                        <button ion-button color="dark" clear>\n                          <ion-icon name=i class="far fa-thumbs-up"></ion-icon>\n                          <p>Like</p>\n                        </button>\n                        <button ion-button color="dark" clear>\n                          <ion-icon name=i class="far fa-comment"></ion-icon>\n                          <p>Comentar</p>\n                        </button>\n                        <button ion-button color="dark" clear>\n                          <i class="far fa-share-square"></i>\n                          <p>Compartir</p>\n                        </button>\n                    </ion-row>\n                  \n                  </ion-card>\n                </div>\n    \n    \n      </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_reading_internal_reading_internal__ = __webpack_require__(255);
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
            selector: 'page-reading',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/reading/reading.html"*/'<!--\n  Generated template for the ReadingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content >\n    <ion-card class="public-state">\n          \n        <ion-item>\n          <ion-avatar item-start>\n              <img src="assets/imgs/user.png" alt="">\n          </ion-avatar>\n          <h2>En Estado Beta</h2>\n          <p class="date-public">04 Jun 2019</p>\n        </ion-item>  \n        <ion-card-content class="card-post">\n          <p>It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .\n            <a href="#" (click)="goView()">Ver Lectura Completa</a>\n          </p>\n        </ion-card-content>\n      \n        <ion-row>\n            <button ion-button color="dark" clear>\n              <i class="far fa-thumbs-up"></i>\n              <p>Like</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <i class="far fa-comment"></i>\n              <p>Comentar</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <i class="far fa-share-square"></i>\n              <p>Compartir</p>\n            </button>\n        </ion-row>\n      \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/reading/reading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ReadingPage);
    return ReadingPage;
}());

//# sourceMappingURL=reading.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingInternalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-reading-internal',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/reading-internal/reading-internal.html"*/'<!--\n  Generated template for the ReadingInternalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n    <ion-header style="background-image: url(\'assets/imgs/fondo.jpg\');">\n        <div class="nav">\n            <button ion-button class="forget" color="light" clear (click)="goBack()"><ion-icon name="ios-arrow-back-outline" class="arrow-back"></ion-icon>Back</button>\n            <button ion-button class="forget" color="light" clear><ion-icon ios="ios-share" md="md-share" ></ion-icon></button>\n        </div>\n        \n        \n        <h3>Las lecciones de los gigantes digitales</h3>\n        <div class="after">\n\n        </div>\n        </ion-header>\n        <div class="content-text">\n            <div class="perfil-news">\n                <img src="assets/imgs/user.png" alt="">\n                <div>\n                  <p>Publicado por Luis Felix</p>\n                  <p class="hour">Hace 4 horas</p>\n                </div>\n              </div>\n              <p class="text">It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n        </div>\n        <div class="ion-row">\n            <button ion-button color="dark" clear>\n              <i class="far fa-thumbs-up"></i>\n              <p>Like</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <i class="far fa-comment"></i>\n              <p>Comentar</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <i class="far fa-share-square"></i>\n              <p>Compartir</p>\n            </button>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/reading-internal/reading-internal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ReadingInternalPage);
    return ReadingInternalPage;
}());

//# sourceMappingURL=reading-internal.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_after_login_after__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_linkedin__ = __webpack_require__(258);
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
    function LoginPage(alertCtrl, linkedin, navCtrl, navParams, sessionS) {
        this.alertCtrl = alertCtrl;
        this.linkedin = linkedin;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sessionS = sessionS;
        this.selfData = { id: "", firstName: "", lastName: "", email: "" };
        this.isLoggedIn = true;
        this.hola = '1';
        this.kk = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        //   this.linkedin.hasActiveSession().then((active) => {
        //     this.isLoggedIn = active;
        //     if(this.isLoggedIn === true) {
        //         this.getSelfData();
        //     }
        // });
        this.hola = this.sessionS.getObject('device');
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginLinkedin = function () {
        var _this = this;
        var scopes = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
        this.linkedin.login(scopes, true).then(function (res) {
            _this.hola = '2';
            _this.getSelfData();
            _this.isLoggedIn = true;
            _this.hola = '3';
            console.log(res);
        }, function (err) {
            console.log(err);
            _this.hola = err;
        });
    };
    LoginPage.prototype.get = function () {
        this.kk = true;
        this.notification = this.sessionS.getObject('dataNotification');
        this.notification2 = this.sessionS.getObject('dataNotification1');
    };
    LoginPage.prototype.getSelfData = function () {
        var _this = this;
        this.linkedin.getRequest('people/~')
            .then(function (res) {
            _this.selfData = res;
        })
            .catch(function (e) { return console.log(e); });
    };
    LoginPage.prototype.loginPage = function (index) {
        this.sessionS.setObject('login', index);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_after_login_after__["a" /* LoginAfterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <div class="container" style="height: 100vh;display: flex;flex-direction: column;justify-content: space-between;">\n    <div>\n      <img src="assets/imgs/logo.png" alt="">\n      <p>Lo mejor de la innovación <br>\n          en la palma de tu mano</p>\n    </div>\n    <div>\n      <button ion-button class="linkedinButton" (click)="loginLinkedin()"> <ion-icon name="logo-linkedin"></ion-icon>  Ingresar con Linkedin</button>\n        <button ion-button color="dark" class="mailButton"  (click)="loginPage(0)">Ingresar con Email</button>\n        <button ion-button class="forget" color="light" clear>Olvide la contraseña</button>\n    </div>\n    <div>\n      <button ion-button class="register" (click)="loginPage(1)">Registrar</button>\n        <p class="terminos">Al registrarte e ingresar estás de acuerdo <br>\n            con nuestros Términos y condiciones</p>\n    </div>\n  </div>\n  <button ion-button round outline (click)="get()">kk</button>\n\n  <div *ngIf="kk == true">{{notification | json}}</div>\n  <div *ngIf="kk == true">{{notification1 | json}}</div>\n  <h3 *ngIf="isLoggedIn==true">\n    <ul>\n      <input type="text" [(ngModel)]="hola">\n      <li>{{hola}}</li>\n        <li>ID: {{selfData.id}}</li>\n        <li>First Name: {{selfData.firstName}}</li>\n        <li>Last Name: {{selfData.lastName}}</li>\n    </ul>\n    <br>\n    <button ion-button round outline (click)="logout()">Logout from&nbsp;<ion-icon name="logo-linkedin"></ion-icon></button>\n</h3>\n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_linkedin__["a" /* LinkedIn */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAfterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_services__ = __webpack_require__(43);
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
    function LoginAfterPage(navCtrl, navParams, sessionS, viewCtrl, loginservice, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sessionS = sessionS;
        this.viewCtrl = viewCtrl;
        this.loginservice = loginservice;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.userparameters = {
            'username': '',
            'password': '',
            'grant_type': 'password',
            'client_id': 2,
            'client_secret': 'MQsvB02KsbukQZUWIFFqlDarEOvKAMm4C5tJuaEc',
        };
        this.usernewparameters = {
            'name': '',
            'lastname': '',
            'email': '',
            'password': '',
            'device': '65465123',
            'password_confirmation': '',
            'method': 'put',
        };
        this.loginSession = this.sessionS.getObject('login');
        this.loading = this.loadingCtrl.create({
            content: ''
        });
    }
    LoginAfterPage.prototype.ionViewDidLoad = function () {
        console.log(this.loginSession);
        console.log('ionViewDidLoad LoginAfterPage');
    };
    LoginAfterPage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    LoginAfterPage.prototype.login = function () {
        var _this = this;
        var emailvalidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.userparameters.username || !this.userparameters.password) {
            alert('Falta llenar usuario o contraseña');
            return;
        }
        this.loading.present();
        if (emailvalidate.test(String(this.userparameters.username).toLowerCase())) {
            this.loginservice.login(this.userparameters)
                .subscribe(function (response) {
                console.log(response);
                _this.sessionS.setObject('answertoken', response);
                var header = { 'headers': { 'Authorization': response.token_type + " " + response.access_token } };
                _this.loginservice.user(header).subscribe(function (response) {
                    console.log(response);
                    var idUser = response.data.id;
                    console.log(idUser);
                    _this.loading.dismiss();
                    if (response.data.email_verified_at == null) {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Confirmar Correo',
                            message: 'Todavía no validas tu correo',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Reenviar Correo',
                                    handler: function () {
                                        _this.loginservice.userResend(idUser).subscribe(function (response) {
                                        });
                                    }
                                }
                            ]
                        });
                        alert_1.present();
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
                        _this.sessionS.setObject('user', response);
                    }
                    console.log(response);
                });
                //
            }, function (error) {
                _this.loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    message: 'Usuario o contraseña incorrecto',
                    buttons: [
                        {
                            text: 'Ok',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Reenviar Correo',
                            handler: function () {
                                // this.loginservice.userResend(idUser).subscribe(response => {
                                // })
                            }
                        }
                    ]
                });
                alert.present();
                //alert('Usuario o contraseña incorrecto');
            });
        }
        else {
            console.log('asdasd');
            this.loading.dismiss();
            // alert('Correo no válido');
        }
    };
    LoginAfterPage.prototype.createuser = function () {
        var _this = this;
        var emailvalidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.usernewparameters.name || !this.usernewparameters.lastname || !this.usernewparameters.email || !this.usernewparameters.password || !this.usernewparameters.password_confirmation) {
            alert('Verificar campos');
            return;
        }
        if (emailvalidate.test(String(this.usernewparameters.email).toLowerCase())) {
            if (this.usernewparameters.password === this.usernewparameters.password_confirmation) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Confirma por Correo',
                    subTitle: 'Te mandamos un correo para que valides tu cuenta',
                    buttons: ['Ok']
                });
                this.loading.present();
                this.loginSession = 0;
                alert_2.present();
                this.loginservice.createuser(this.usernewparameters)
                    .subscribe(function (response) {
                    _this.loading.dismiss();
                    console.log('se creo el usuario y esta es la data que devuelve el gorfo', response);
                    _this.userparameters.username = response.data.email;
                    _this.userparameters.password = _this.usernewparameters.password;
                    //this.login()
                }, function (error) {
                    //alert('Usuario o contraseña incorrecto');
                });
            }
            else {
                alert('Verificar Contraseña');
            }
        }
        else {
            console.log('hola');
            alert('Correo no válido');
        }
    };
    LoginAfterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-after',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/login-after/login-after.html"*/'<!--\n  Generated template for the LoginAfterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <div class="header-logo">\n      <img src="assets/imgs/logo.png" alt="" width="300px">\n  </div>\n  <div class="content-login" *ngIf="loginSession == 0">\n      <input [(ngModel)]=\'userparameters.username\' type="text" placeholder="Email">\n      <input [(ngModel)]=\'userparameters.password\' type="password" placeholder="Contraseña">\n      <button ion-button class="goLogin" (click)="login()" >Ingresar</button>\n      <button ion-button class="goLogin goBack" (click)="goBack()">Regresar</button>\n  </div>\n\n  <div class="content-login-register" *ngIf="loginSession == 1">\n      <input [(ngModel)]=\'usernewparameters.name\' type="text" placeholder="Nombre">\n      <input [(ngModel)]=\'usernewparameters.lastname\'type="text" placeholder="Apellido">\n      <input type="text" [(ngModel)]=\'usernewparameters.email\' placeholder="Email">\n      <input type="password" [(ngModel)]=\'usernewparameters.password\' placeholder="Contraseña">\n      <input type="password" [(ngModel)]=\'usernewparameters.password_confirmation\' placeholder="Repetir contraseña">\n      <button ion-button class="goLogin" (click)="createuser()" >Aceptar y Ingresar</button>\n      <button ion-button class="goLogin goBack" (click)="goBack()" >Regresar</button>\n  </div>\n  \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/login-after/login-after.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_services__["a" /* ServicesAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginAfterPage);
    return LoginAfterPage;
}());

//# sourceMappingURL=login-after.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(274);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reading_reading__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_after_login_after__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_reading_internal_reading_internal__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_qr_qr__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_coment_coment__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_qrcode2__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_services_services__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_social_sharing__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_linkedin__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_push__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_fcm__ = __webpack_require__(260);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_qr_qr__["a" /* QrPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_coment_coment__["a" /* ComentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification__["a" /* NotificationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/coment/coment.module#ComentPageModule', name: 'ComentPage', segment: 'coment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-after/login-after.module#LoginAfterPageModule', name: 'LoginAfterPage', segment: 'login-after', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reading-internal/reading-internal.module#ReadingInternalPageModule', name: 'ReadingInternalPage', segment: 'reading-internal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reading/reading.module#ReadingPageModule', name: 'ReadingPage', segment: 'reading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr/qr.module#QrPageModule', name: 'QrPage', segment: 'qr', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reading_reading__["a" /* ReadingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_after_login_after__["a" /* LoginAfterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_reading_internal_reading_internal__["a" /* ReadingInternalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_qr_qr__["a" /* QrPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_coment_coment__["a" /* ComentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification__["a" /* NotificationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__services_session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_services_services__["a" /* ServicesAuth */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_linkedin__["a" /* LinkedIn */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_fcm__["a" /* FCM */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 36:
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

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    // public static NODE = 'http://localhost:4056/';
    AppSettings.BASE = 'http://betaapp.atypax.com/';
    //public static NODE = 'http://192.168.1.11:4056/';
    //public static NODE = 'http://dev.atypax.com:4058/';
    AppSettings.USERS = 'users';
    AppSettings.TEAMS = 'teams';
    AppSettings.QUESTIONS = 'questions';
    AppSettings.LOGIN = 'api/oauth/token';
    AppSettings.EVENTS = 'api/event';
    AppSettings.EVENTSHISTORY = 'api/event/get/available';
    AppSettings.CREATE_USER = 'api/user';
    AppSettings.INSCRIBED = 'api/event/register/member';
    AppSettings.USER = 'api/user/';
    AppSettings.LIKE = 'api/event/like/event';
    AppSettings.SENDCOMENT = 'api/event/comment/event';
    AppSettings.LISTCOMENT = 'api/event/';
    AppSettings.IDDEVICE = 'api/user/update/device/';
    AppSettings.NOTIFICATION1 = 'api/event/confirm/';
    AppSettings.NOTIFICATION2 = 'api/event/reject/';
    AppSettings.ROLES = { 'Admin': 0, 'Manager': 1, 'Player': 2, };
    return AppSettings;
}());

//# sourceMappingURL=app.setting.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_environment__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_services_services__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_session_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// (<any>Window).approve = function (data: any) {
//   console.log('1')
// };
// (<any>Window).reject = function (data: any) {
//   console.log('2')
// };
var MyApp = /** @class */ (function () {
    function MyApp(loadingCtrl, modalCtrl, services, fcm, alertCtrl, push, platform, statusBar, splashScreen, sessionS) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.services = services;
        this.fcm = fcm;
        this.alertCtrl = alertCtrl;
        this.push = push;
        this.platform = platform;
        this.sessionS = sessionS;
        this.loading = this.loadingCtrl.create({
            content: ''
        });
        platform.ready().then(function () {
            if (_this.sessionS.getObject('user')) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.fcm.onNotification().subscribe(function (data) {
                console.log('data notificación => ', data);
            });
            _this.notification();
        });
    }
    MyApp.prototype.notification = function () {
        var _this = this;
        var options = __WEBPACK_IMPORTED_MODULE_8__config_environment__["a" /* ENV */].pushFB.PushOptions;
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            _this.notificacion = notification;
            console.log(_this.notificacion);
            _this.sessionS.setObject('notification', notification);
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__["a" /* NotificationPage */]);
            profileModal.present();
            console.log('Received a notification', notification);
        });
        pushObject.on('approve').subscribe(function (notification) {
            _this.loading.present();
            _this.notificacion = notification;
            var header = { 'headers': {
                    'Authorization': _this.sessionS.getObject('answertoken').token_type + " " + _this.sessionS.getObject('answertoken').access_token
                }
            };
            _this.services.aceptNotification(header, notification.additionalData.event).subscribe(function (response) {
                console.log(response, 'servicio1');
                _this.loading.dismiss();
                _this.platform.exitApp();
            }, function (error) {
                //alert('Usuario o contraseña incorrecto');
            });
            console.log(_this.notificacion);
            console.log('1 approve');
        });
        pushObject.on('reject').subscribe(function (notification) {
            _this.loading.present();
            _this.notificacion = notification;
            var header = { 'headers': {
                    'Authorization': _this.sessionS.getObject('answertoken').token_type + " " + _this.sessionS.getObject('answertoken').access_token
                }
            };
            _this.services.denegadoNotification(header, notification.additionalData.event).subscribe(function (response) {
                console.log(response, 'servicio2');
                _this.loading.dismiss();
                _this.platform.exitApp();
            }, function (error) {
                //alert('Usuario o contraseña incorrecto');
            });
            console.log(_this.notificacion);
            console.log('2 reject');
        });
        pushObject.on('registration').subscribe(function (registration) {
            _this.sessionS.setObject('device', registration.registrationId);
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__providers_services_services__["a" /* ServicesAuth */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__services_session_service__["a" /* SessionService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    ga: {
        ua_id: 'UA-128688823-1'
    },
    'pushFB': {
        'TokenServer': 'AAAABlV0178:APA91bGkJOlAbPf6JXLnVGaW5_Q9kghoVVd7oWeDDrBhryXGJOcR-Hv4ieUy88p_D2hu99_dovyf38RD6cLElxt4r8XVuFLPjwTN40CG78CCZ7JNEQJft5rhk84ca6hFAZFdEAD_viIM',
        'PushOptions': {
            android: {
                senderID: "27203524543"
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {},
        }
    },
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(261);
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
 * Generated class for the QrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrPage = /** @class */ (function () {
    function QrPage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
    }
    QrPage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    QrPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
        });
    };
    QrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QrPage');
    };
    QrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qr',template:/*ion-inline-start:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/qr/qr.html"*/'<!--\n  Generated template for the QrPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>qr</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-input type="text" placeholder="my qr" [(ngModel)]="qrData"></ion-input>\n  <button (click)="createCode()">Create code</button>\n  <button (click)="scanCode()">scan code</button>\n\n  <ion-card *ngIf="createdCode">\n    <ngx-qrcode [qrc-value]="createdCode" ></ngx-qrcode>\n    <ion-card-content> \n      <p>value: {{createdCode}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="scannedCode">\n      <ion-card-content> \n        <p>result scan: {{scannedCode}}</p>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/RSL/Desktop/MONEY/beta_app/src/pages/qr/qr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], QrPage);
    return QrPage;
}());

//# sourceMappingURL=qr.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_setting__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicesAuth = /** @class */ (function () {
    function ServicesAuth(http) {
        this.http = http;
        console.log('Hello ServicesProvider Provider');
    }
    ServicesAuth.prototype.login = function (params) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].LOGIN, params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ;
    ServicesAuth.prototype.createuser = function (params) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].CREATE_USER, params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.listEvents = function (params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].EVENTS, params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.listEventsHistory = function (params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].EVENTSHISTORY, params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.inscribedEvent = function (header, params) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].INSCRIBED, header, params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.user = function (header) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].USER + 0, header)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.userResend = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].USER + id + '/resend')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.like = function (header, params) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].LIKE, header, params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.sendComent = function (header, params) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].SENDCOMENT, header, params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.listComent = function (header, id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].LISTCOMENT + id, header)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.updateIdDevice = function (header, params) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].IDDEVICE, header, params)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.aceptNotification = function (header, id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].NOTIFICATION1 + id, header)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth.prototype.denegadoNotification = function (header, id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].BASE + __WEBPACK_IMPORTED_MODULE_3__app_app_setting__["a" /* AppSettings */].NOTIFICATION2 + id, header)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.json(); }));
    };
    ServicesAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ServicesAuth);
    return ServicesAuth;
}());

//# sourceMappingURL=services.js.map

/***/ })

},[266]);
//# sourceMappingURL=main.js.map