(self["webpackChunknewsApp"] = self["webpackChunknewsApp"] || []).push([["src_app_edit-news_edit-news_module_ts"],{

/***/ 5699:
/*!*******************************************************!*\
  !*** ./src/app/edit-news/edit-news-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditNewsPageRoutingModule": () => (/* binding */ EditNewsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _edit_news_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-news.page */ 5614);




const routes = [
    {
        path: '',
        component: _edit_news_page__WEBPACK_IMPORTED_MODULE_0__.EditNewsPage
    }
];
let EditNewsPageRoutingModule = class EditNewsPageRoutingModule {
};
EditNewsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditNewsPageRoutingModule);



/***/ }),

/***/ 7011:
/*!***********************************************!*\
  !*** ./src/app/edit-news/edit-news.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditNewsPageModule": () => (/* binding */ EditNewsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _edit_news_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-news-routing.module */ 5699);
/* harmony import */ var _edit_news_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-news.page */ 5614);







let EditNewsPageModule = class EditNewsPageModule {
};
EditNewsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _edit_news_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditNewsPageRoutingModule
        ],
        declarations: [_edit_news_page__WEBPACK_IMPORTED_MODULE_1__.EditNewsPage]
    })
], EditNewsPageModule);



/***/ }),

/***/ 5614:
/*!*********************************************!*\
  !*** ./src/app/edit-news/edit-news.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditNewsPage": () => (/* binding */ EditNewsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_news_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-news.page.html */ 8077);
/* harmony import */ var _edit_news_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-news.page.scss */ 7552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ 4465);











let EditNewsPage = class EditNewsPage {
    constructor(authService, dataService, toastService, loadService, router, loadingService) {
        this.authService = authService;
        this.dataService = dataService;
        this.toastService = toastService;
        this.loadService = loadService;
        this.router = router;
        this.loadingService = loadingService;
        this.authService.userData$.subscribe((response) => {
            this.user = response;
            console.log(this.user);
        });
        this.data = this.dataService.param;
        console.log(this.data);
        this.updatePostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.data.title),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.data.description),
            'newsid': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.data.newsid),
            'desc': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(Math.floor(100000 + Math.random() * 900000)),
        });
    }
    ngOnInit() {
        this.data = this.dataService.param;
        console.log(this.data);
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiBaseURL;
    }
    onFileChange(fileChangeEvent) {
        this.file = fileChangeEvent.target.files[0];
    }
    updatePost() {
        console.log(this.updatePostForm.value);
        if (this.file) {
            var formData = new FormData();
            formData.append('file', this.file);
            formData.append('filename', this.file.name);
            formData.append('newsid', this.data.newsid);
            formData.append('title', this.updatePostForm.value.title);
            formData.append('description', this.updatePostForm.value.description);
            formData.forEach((value, key) => {
                console.log(key + ": " + value);
            });
            this.loadService.presentLoading('Updating').then(() => {
                this.dataService.updatePersonalNews(formData).subscribe((res) => {
                    console.log(res);
                    this.response = res;
                    if (this.response.error == false) {
                        this.loadingService.dismissLoading();
                        this.toastService.presentToast(res.message);
                        this.router.navigateByUrl('tabs/tab1');
                    }
                    else {
                        this.loadingService.dismissLoading();
                        this.toastService.presentToast(res.message);
                    }
                }, (error) => {
                    this.loadingService.dismissLoading();
                    console.log(error, 'Error');
                    this.toastService.presentToast('Error: something went wrong');
                });
            });
        }
        else {
            console.log(this.updatePostForm.value);
            this.loadService.presentLoading('Updating').then(() => {
                this.dataService.updatePersonalNews2(this.updatePostForm.value).subscribe((res) => {
                    console.log(res);
                    this.response = res;
                    if (this.response.error == false) {
                        this.loadingService.dismissLoading();
                        this.toastService.presentToast(res.message);
                        this.router.navigateByUrl('tabs/tab1');
                    }
                    else {
                        this.loadingService.dismissLoading();
                        this.toastService.presentToast(res.message);
                    }
                }, (error) => {
                    this.loadingService.dismissLoading();
                    console.log(error, 'Error');
                    this.toastService.presentToast('Error: something went wrong');
                });
            });
        }
    }
};
EditNewsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService }
];
EditNewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-edit-news',
        template: _raw_loader_edit_news_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_news_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditNewsPage);



/***/ }),

/***/ 7552:
/*!***********************************************!*\
  !*** ./src/app/edit-news/edit-news.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.update-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.update-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.update-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.update-content .inputs-list .input-item .ion-input {\n  --background: #FBFBFB;\n  border: 1px solid var(--ion-color-secondary);\n  --padding-start: 3px;\n  border-radius: 4px;\n  --placeholder-color: var(--ion-color-medium);\n}\n\n.update-content .inputs-list .input-item .ion-textarea {\n  --background: #FBFBFB;\n  border: 1px solid var(--ion-color-secondary);\n  --padding-start: 3px;\n  border-radius: 4px;\n  --placeholder-color: var(--ion-color-medium);\n}\n\n.update-content .inputs-list .input-item ion-label {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLDhDQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FBQ0o7O0FBQ0k7RUFDSSw2Q0FBQTtBQUNSOztBQUNRO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBQ1Y7O0FBQVU7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNELDRDQUFBO0FBRVg7O0FBQ1U7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNELDRDQUFBO0FBQ1g7O0FBR1U7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFEZCIsImZpbGUiOiJlZGl0LW5ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gIH1cclxuXHJcbiAgLnVwZGF0ZS1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAgIC5pbnB1dHMtbGlzdCB7XHJcbiAgICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gICAgXHJcbiAgICAgICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAuaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlvbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogM3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxuICAgIFxyXG5cclxuICB9Il19 */");

/***/ }),

/***/ 8077:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-news/edit-news.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"small\">Edit News</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"update-content\">\n  <form [formGroup]=\"updatePostForm\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-label color=\"secondary\" position=\"stacked\">Title</ion-label>\n        <ion-input type=\"text\" class=\"ion-input\" formControlName=\"title\" color=\"dark\" clearInput autofocus=\"true\" required></ion-input>\n      </ion-item>\n\n      <!-- <ion-input type=\"text\" class=\"ion-input\" formControlName=\"newsid\" color=\"dark\" required></ion-input> -->\n\n      <!-- Last Name -->\n      <ion-item class=\"input-item\">\n        <ion-label color=\"secondary\" position=\"stacked\">Image</ion-label>\n        <ion-input type=\"file\" class=\"ion-input\" (change)=\"onFileChange($event)\" id=\"file-input\" accept=\"image/png, image/jpeg\"></ion-input>\n      </ion-item>\n\n      <ion-label>Description</ion-label>\n      <ion-item class=\"input-item\" >        \n        <ion-textarea rows=\"6\" cols=\"20\" class=\"ion-textarea\" color=\"dark\" formControlName=\"description\" required></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-button class=\"login-btn\" type=\"submit\" expand=\"block\" color=\"secondary\" [disabled]=\"!updatePostForm.valid\" (click)=\"updatePost()\">Update</ion-button>    \n    \n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_edit-news_edit-news_module_ts.js.map