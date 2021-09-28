(self["webpackChunknewsApp"] = self["webpackChunknewsApp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);
/* harmony import */ var _resolvers_userdata_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resolvers/userdata.resolver */ 1790);





const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
        resolve: {
            userData: _resolvers_userdata_resolver__WEBPACK_IMPORTED_MODULE_1__.UserDataResolver
        },
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var ngx_text_overflow_clamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-text-overflow-clamp */ 8260);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            ngx_text_overflow_clamp__WEBPACK_IMPORTED_MODULE_3__.NgxTextOverflowClampModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2501:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/http.service */ 6858);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ 7556);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ 4465);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ 4471);












let Tab1Page = class Tab1Page {
    constructor(httpService, authService, dataService, toastService, router, alertController, loadingController, loadingService) {
        this.httpService = httpService;
        this.authService = authService;
        this.dataService = dataService;
        this.toastService = toastService;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.loadingService = loadingService;
        this.authService.userData$.subscribe((response) => {
            this.user = response;
            console.log(this.user);
            this.getAllPersonalNews();
        });
    }
    // ionViewDidEnter(){
    // }
    ngOnInit() {
        console.log(this.user.userid);
        // this.getAllPersonalNews();
        var date = new Date();
        var newsParam = {
            'q': 'tesla',
            'from': '2021-08-22',
            'sortBy': 'publishedAt',
        };
        var q = 'tesla';
        var from = '2021-08-22';
        var sortBy = 'publishedAt';
        var url = '&q=' + q + '&from=' + from + '&sortBy=' + sortBy;
        this.getAlNews(url);
    }
    getAlNews(url) {
        this.dataService.getAllNews(url).subscribe((res) => {
            console.log(res);
            this.result = res;
        });
    }
    getAllPersonalNews() {
        console.log(this.user.userid);
        // this.loadingService.presentLoading('Loading').then(() =>{
        this.dataService.getPersonalNews(this.user.userid).subscribe((res) => {
            console.log(res);
            this.content = res;
            // this.loadingService.dismissLoading();
            this.imageURL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiBaseURL;
            if (this.content.error == true) {
                // this.loadingService.dismissLoading();
                this.toastService.presentToast(this.content.message);
            }
            else {
                // this.loadingService.dismissLoading();          
            }
        }, (error) => {
            // this.loadingService.dismissLoading();
            console.log(error, 'Error');
            this.toastService.presentToast('Error: something went wrong');
        });
        // });
    }
    navigate(url) {
        console.log(url);
        this.dataService.param = url;
        this.router.navigateByUrl('/article');
    }
    edit(item) {
        console.log(item);
        this.dataService.param = item;
        this.router.navigateByUrl('/edit-news');
    }
    delete(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete News',
                message: 'Are you sure you want to delete this news?',
                mode: 'md',
                cssClass: 'my-alert-class',
                buttons: [{
                        text: 'Yes',
                        handler: () => {
                            this.deleteNews(item);
                        }
                    }, {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                    }]
            });
            yield alert.present();
        });
    }
    deleteNews(item) {
        console.log(item.newsid);
        var newsData = {
            "newsid": item.newsid
        };
        this.loadingService.presentLoading('Loading').then(() => {
            this.dataService.deletePersonalNews(newsData).subscribe((res) => {
                console.log(res);
                this.content = res;
                if (this.content.error == false) {
                    this.loadingService.dismissLoading();
                    this.toastService.presentToast(this.content.message);
                }
                else {
                    this.loadingService.dismissLoading();
                    this.toastService.presentToast(this.content.message);
                }
            }, (error) => {
                this.loadingService.dismissLoading();
                console.log(error, 'Error');
                this.toastService.presentToast('Error: something went wrong');
            });
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".link-item-small {\n  margin: 12px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmstaXRlbS1zbWFsbCB7XHJcbiAgICBtYXJnaW46IDEycHggMDtcclxuICB9Il19 */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\">\n        <ion-icon slot=\"icon-only\" name=\"newspaper-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Hi, {{user.firstname}}\n    </ion-title>\n    <!-- <ion-text class=\"lowerCase\" slot=\"end\">\n      \n    </ion-text> -->\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" class=\"lowerCase\">\n      Hi, {{user.firstname}}\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<super-tabs\n  [activeTabIndex]=\"0\"\n  [config]=\"{ avoidElements: true, maxDragAngle: 30 }\"\n>\n  <super-tabs-toolbar slot=\"top\" color=\"secondary\" scrollable class=\"super-tabs-toolbar-custom\">\n    <super-tab-button>\n      <ion-label color=\"tertiary\">Top News</ion-label>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-label  color=\"tertiary\">Personal</ion-label>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-label  color=\"tertiary\">Politics</ion-label>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-label  color=\"tertiary\">Business</ion-label>\n    </super-tab-button>\n  </super-tabs-toolbar>\n\n  <super-tabs-container>\n    <!-- TAB 0 -->\n    <super-tab>\n      <ion-content>\n        <div class=\"container-view\">\n\n          <ion-card class=\"card-custom\">\n            <ion-list>\n              <ion-list-header class=\"ion-list-header-custom\">\n                <strong>Top News around the world</strong>\n              </ion-list-header>\n              <ion-item class=\"link-item-small\" routerLink=\"/article\" lines=\"none\" *ngFor=\"let i of [0,1,2,3]\">\n                <ion-thumbnail class=\"ion-thumbnail-custom\" slot=\"start\">\n                  <img src=\"{{'assets/image/' + '1' + '.png'}}\" alt=\"\">\n                </ion-thumbnail>\n                <ion-label class=\"ion-text-wrap\">\n                  <div class=\"category-name\">News Topic around the world</div>\n                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card>\n\n          \n        </div>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      \n\n      <ion-content>\n        <div class=\"container-view\">\n\n          <!-- <ion-card class=\"card-custom\"> -->\n            <ion-list>\n              <ion-list-header class=\"ion-list-header-custom\">\n                <strong>Personal News</strong>\n              </ion-list-header>\n              <!-- <ion-card class=\"link-item-small\" (click)=\"navigate(item)\" lines=\"none\" *ngFor=\"let item of content | slice:0:20; let i=index\" >\n                <ion-thumbnail class=\"ion-thumbnail-custom\" slot=\"start\">\n                  <img src=\"{{imageURL+item.img}}\" alt=\"{{item.title}}\">\n                </ion-thumbnail>\n                <ion-label class=\"ion-text-wrap\">\n                  <div class=\"category-name\"><strong>{{item.title}}</strong></div>\n                  <h3>{{item.description}}</h3>\n                </ion-label>\n                <ion-row>\n                  <ion-col class=\"ion-padding\">\n                    2h\n                  </ion-col>\n                  <ion-col size=\"auto\">\n                    <ion-button fill=\"clear\" size=\"small\" color=\"medium\">\n                      <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button fill=\"clear\" size=\"small\" color=\"medium\">\n                      <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n               \n              </ion-card> -->\n\n              <ion-card  lines=\"none\" *ngFor=\"let item of content\">\n                <ion-row (click)=\"navigate(item)\" >\n                  <img src=\"{{imageURL+item.img}}\" alt=\"{{item.title}}\"/>\n                  <ion-card-header>\n                    <ion-card-title>{{item.title}}</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                         {{item.description | slice:0:120}} \n                  <span *ngIf=\"item.description?.length > 100\">...</span>\n                  </ion-card-content>\n                </ion-row>\n                \n\n                <ion-row>\n                  <ion-col class=\"ion-padding\">\n                    {{item.date_created | date:'medium' }}\n                  </ion-col>\n                  <ion-col size=\"auto\">\n                    <ion-button fill=\"clear\" (click)=\"edit(item)\" size=\"small\" color=\"medium\">\n                      <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button fill=\"clear\" (click)=\"delete(item)\" size=\"small\" color=\"danger\">\n                      <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n\n              <ion-item>\n                <p *ngIf=\"content?.length == 0\" class=\"empty-list-message\">\n                  No news found. Please create one.\n                </p>\n              </ion-item>\n              \n            </ion-list>\n          <!-- </ion-card> -->\n\n          \n        </div>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <div class=\"container-view\">\n\n          <ion-card class=\"card-custom\">\n            <ion-list>\n              <ion-list-header class=\"ion-list-header-custom\">\n                <strong>Politics</strong>\n              </ion-list-header>\n              <ion-item class=\"link-item-small\" routerLink=\"/article\" lines=\"none\" *ngFor=\"let i of [0,1,2,3]\">\n                <ion-thumbnail class=\"ion-thumbnail-custom\" slot=\"start\">\n                  <img src=\"{{'assets/image/' + '1' + '.png'}}\" alt=\"\">\n                </ion-thumbnail>\n                <ion-label class=\"ion-text-wrap\">\n                  <div class=\"category-name\">Title of News</div>\n                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card>\n\n          \n        </div>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      \n    </super-tab>\n  </super-tabs-container>\n</super-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map