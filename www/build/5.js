webpackJsonp([5],{

/***/ 278:
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
            selector: 'page-reading-internal',template:/*ion-inline-start:"/home/manuel/Escritorio/beta_app/src/pages/reading-internal/reading-internal.html"*/'<!--\n  Generated template for the ReadingInternalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n    <ion-header style="background-image: url(\'assets/imgs/fondo.jpg\');">\n        <div class="nav">\n            <button ion-button class="forget" color="light" clear (click)="goBack()"><ion-icon name="ios-arrow-back-outline" class="arrow-back"></ion-icon>Back</button>\n            <button ion-button class="forget" color="light" clear><ion-icon ios="ios-share" md="md-share" ></ion-icon></button>\n        </div>\n        \n        \n        <h3>Las lecciones de los gigantes digitales</h3>\n        <div class="after">\n\n        </div>\n        </ion-header>\n        <div class="content-text">\n            <div class="perfil-news">\n                <img src="assets/imgs/user.png" alt="">\n                <div>\n                  <p>Publicado por Luis Felix</p>\n                  <p class="hour">Hace 4 horas</p>\n                </div>\n              </div>\n              <p class="text">It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .It won’t be a bigger problem to find one game lover in yor neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological neighbor. Since the introduction of Virtual Game, it has achieving great heights so far as its popularity and technological .</p>\n        </div>\n        <div class="ion-row">\n            <button ion-button color="dark" clear>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <p>Like</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <ion-icon name="text"></ion-icon>\n              <p>Comentar</p>\n            </button>\n            <button ion-button color="dark" clear>\n              <ion-icon name="share-alt"></ion-icon>\n              <p>Compartir</p>\n            </button>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/home/manuel/Escritorio/beta_app/src/pages/reading-internal/reading-internal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ReadingInternalPage);
    return ReadingInternalPage;
}());

//# sourceMappingURL=reading-internal.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingInternalPageModule", function() { return ReadingInternalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reading_internal__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReadingInternalPageModule = /** @class */ (function () {
    function ReadingInternalPageModule() {
    }
    ReadingInternalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reading_internal__["a" /* ReadingInternalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reading_internal__["a" /* ReadingInternalPage */]),
            ],
        })
    ], ReadingInternalPageModule);
    return ReadingInternalPageModule;
}());

//# sourceMappingURL=reading-internal.module.js.map

/***/ })

});
//# sourceMappingURL=5.js.map