(self["webpackChunknewsApp"] = self["webpackChunknewsApp"] || []).push([["src_app_article_article_module_ts"],{

/***/ 1218:
/*!***************************************************!*\
  !*** ./src/app/article/article-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlePageRoutingModule": () => (/* binding */ ArticlePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _article_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article.page */ 4283);
/* harmony import */ var _resolvers_userdata_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resolvers/userdata.resolver */ 1790);





const routes = [
    {
        path: '',
        component: _article_page__WEBPACK_IMPORTED_MODULE_0__.ArticlePage,
        resolve: {
            userData: _resolvers_userdata_resolver__WEBPACK_IMPORTED_MODULE_1__.UserDataResolver
        },
    }
];
let ArticlePageRoutingModule = class ArticlePageRoutingModule {
};
ArticlePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ArticlePageRoutingModule);



/***/ }),

/***/ 5745:
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlePageModule": () => (/* binding */ ArticlePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _article_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-routing.module */ 1218);
/* harmony import */ var _article_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.page */ 4283);







let ArticlePageModule = class ArticlePageModule {
};
ArticlePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _article_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticlePageRoutingModule
        ],
        declarations: [_article_page__WEBPACK_IMPORTED_MODULE_1__.ArticlePage]
    })
], ArticlePageModule);



/***/ }),

/***/ 4283:
/*!*****************************************!*\
  !*** ./src/app/article/article.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlePage": () => (/* binding */ ArticlePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_article_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./article.page.html */ 373);
/* harmony import */ var _article_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.page.scss */ 8175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 2468);








let ArticlePage = class ArticlePage {
    constructor(dataService, authService, router) {
        this.dataService = dataService;
        this.authService = authService;
        this.router = router;
        this.authService.userData$.subscribe((response) => {
            this.user = response;
            //console.log(this.user);
        });
    }
    ngOnInit() {
        this.data = this.dataService.param;
        console.log(this.data);
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiBaseURL;
    }
    goToHome() {
        this.router.navigateByUrl('/tabs/tab1');
    }
};
ArticlePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ArticlePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-article',
        template: _raw_loader_article_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_article_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ArticlePage);



/***/ }),

/***/ 8175:
/*!*******************************************!*\
  !*** ./src/app/article/article.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container-view .card-thumbnail {\n  position: relative;\n  height: 250px;\n  background-color: var(--ion-color-medium);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n}\n.container-view .article-header .article-title {\n  font-size: 22px;\n  margin-bottom: 8px;\n}\n.container-view .article-header .article-author {\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.container-view .article-header .article-timestamp {\n  color: var(--ion-color-medium);\n}\n.container-view .article-header .header-divider {\n  height: 2px;\n  width: 50px;\n  background-color: var(--ion-color-medium);\n  margin-top: 16px;\n}\n.container-view .article-body {\n  line-height: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFERjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRk47QUFLSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUhOO0FBTUk7RUFDRSw4QkFBQTtBQUpOO0FBT0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQVNFO0VBQ0Usa0JBQUE7QUFQSiIsImZpbGUiOiJhcnRpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItdmlld3tcclxuXHJcbi5jYXJkLXRodW1ibmFpbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxufVxyXG4uYXJ0aWNsZS1oZWFkZXIge1xyXG4gICAgLmFydGljbGUtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICBcclxuICAgIC5hcnRpY2xlLWF1dGhvciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFydGljbGUtdGltZXN0YW1wIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmhlYWRlci1kaXZpZGVyIHtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmFydGljbGUtYm9keSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgfVxyXG4gIFxyXG59Il19 */");

/***/ }),

/***/ 373:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button fill=\"clear\">\n        <ion-icon slot=\"icon-only\" name=\"radio-outline\"></ion-icon>\n      </ion-button> -->\n      <ion-button fill=\"clear\" (click)=\"goToHome()\">\n        <ion-icon slot=\"icon-only\" name=\"home-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"container-view\">\n    <div class=\"card-thumbnail\" [style.backgroundImage]=\"'url('+(imageUrl+data.img)+')'\"></div>\n\n    <div class=\"article-header ion-padding\">\n      <div class=\"article-title\">\n        {{data.title}}\n      </div>\n      <div class=\"article-author\">\n        By {{user.firstname}} {{user.lastname}}\n      </div>\n      <div class=\"article-timestamp\">\n       Posted on {{data.date_created | date:'medium'}} \n       <!-- Updated at 5:38 AM on Saturday, June 6 -->\n      </div>\n      <div class=\"header-divider\"></div>\n    </div>\n\n    <div class=\"article-body ion-padding\">\n      <p>{{data.description}}</p>\n    </div>\n\n    <!-- <div class=\"recommendation\">\n      <div class=\"ion-padding-start ion-padding-end\">\n        <ion-text color=\"medium\">PAID CONTENT</ion-text>\n      </div>\n\n      <ion-card *ngFor=\"let i of [0,1,2]\">\n        <div class=\"card-thumbnail\" [style.backgroundImage]=\"'url(assets/img/img_' + (i%4+1) + '.png)'\"></div>\n\n        <ion-card-content>\n          Germany and US leading the way in crucial period for women's football\n        </ion-card-content>\n      </ion-card>\n    </div> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_article_article_module_ts.js.map