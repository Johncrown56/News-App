(self["webpackChunknewsApp"] = self["webpackChunknewsApp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _resolvers_userdata_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resolvers/userdata.resolver */ 1790);





const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
        resolve: {
            userData: _resolvers_userdata_resolver__WEBPACK_IMPORTED_MODULE_1__.UserDataResolver
        },
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 7008:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ 4465);









let Tab2Page = class Tab2Page {
    constructor(authService, dataService, toastService, router) {
        this.authService = authService;
        this.dataService = dataService;
        this.toastService = toastService;
        this.router = router;
        this.authService.userData$.subscribe((response) => {
            this.user = response;
            console.log(this.user);
        });
        this.ContentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            'desc': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(Math.floor(100000 + Math.random() * 900000)),
        });
    }
    ngOnInit() {
    }
    onFileChange(fileChangeEvent) {
        this.file = fileChangeEvent.target.files[0];
    }
    createPost() {
        console.log(this.ContentForm.value);
        var formData = new FormData();
        formData.append('file', this.file);
        formData.append('filename', this.file.name);
        formData.append('title', this.ContentForm.value.title);
        formData.append('description', this.ContentForm.value.description);
        formData.append('userid', this.user.userid);
        formData.append('desc', this.ContentForm.value.desc);
        formData.forEach((value, key) => {
            console.log(key + ": " + value);
        });
        // var add = {...this.ContentForm.value, userid};
        // console.log(add);
        this.dataService.addNews(formData).subscribe((res) => {
            console.log(res);
            this.response = res;
            if (this.response.error == false) {
                this.ContentForm.reset();
                this.toastService.presentToast(res.message);
                this.router.navigateByUrl('tabs/tab1');
            }
            else {
                this.toastService.presentToast(res.message);
            }
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



/***/ }),

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.create-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.create-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.create-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.create-content .inputs-list .input-item .ion-input {\n  --background: #FBFBFB;\n  border: 1px solid var(--ion-color-secondary);\n  --padding-start: 3px;\n  border-radius: 4px;\n  --placeholder-color: var(--ion-color-medium);\n}\n\n.create-content .inputs-list .input-item .ion-textarea {\n  --background: #FBFBFB;\n  border: 1px solid var(--ion-color-secondary);\n  --padding-start: 3px;\n  border-radius: 4px;\n  --placeholder-color: var(--ion-color-medium);\n}\n\n.create-content .inputs-list .input-item ion-label {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSw4Q0FBQTtBQUNKOztBQUVFO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUNJO0VBQ0ksNkNBQUE7QUFDUjs7QUFDUTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUNWOztBQUFVO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDRCw0Q0FBQTtBQUVYOztBQUNVO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDRCw0Q0FBQTtBQUNYOztBQUdVO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBRGQiLCJmaWxlIjoidGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcclxuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcbiAgfVxyXG5cclxuICAuY3JlYXRlLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgLmlucHV0cy1saXN0IHtcclxuICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgICBcclxuICAgICAgICAuaW5wdXQtaXRlbSB7XHJcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAgIC5pb24taW5wdXQge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpOztcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlvbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title size=\"small\">Create News</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"create-content\">\n  <form [formGroup]=\"ContentForm\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"stacked\">Title</ion-label>\n        <ion-input type=\"text\" class=\"ion-input\" formControlName=\"title\" required autofocus=\"true\" clearInput></ion-input>\n      </ion-item>\n\n      <!-- Last Name -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"stacked\">Image</ion-label>\n        <ion-input type=\"file\" class=\"ion-input\" (change)=\"onFileChange($event)\" id=\"file-input\" accept=\"image/png, image/jpeg\" required></ion-input>\n      </ion-item>\n\n      <ion-label>Description</ion-label>\n      <ion-item class=\"input-item\">\n        <ion-textarea rows=\"6\" cols=\"20\" class=\"ion-textarea\" placeholder=\"What's on your mind?\" formControlName=\"description\" required ></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-button class=\"login-btn\" type=\"submit\" expand=\"block\" color=\"secondary\" [disabled]=\"!ContentForm.valid\" (click)=\"createPost()\">Create</ion-button>    \n    \n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map