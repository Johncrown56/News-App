(self["webpackChunknewsApp"] = self["webpackChunknewsApp"] || []).push([["src_app_auth_login_login_module_ts"],{

/***/ 4272:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 1506);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 8990:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 4272);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 1506);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 1506:
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 8182);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toast.service */ 4465);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ 2340);












let LoginPage = class LoginPage {
    constructor(authService, router, httpService, storageService, toastService, nav) {
        this.authService = authService;
        this.router = router;
        this.httpService = httpService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.nav = nav;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
        });
    }
    ngOnInit() {
    }
    // login user to home page
    doLogin() {
        console.log(this.loginForm.value);
        this.authService.login(this.loginForm.value).subscribe((res) => {
            console.log(res);
            this.response = res;
            if (this.response.error == false) {
                // Store the User data and generate an encrypted token.
                this.loginForm.reset();
                this.storageService.store(_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.authKey, this.response).then(result => {
                    console.log(result);
                    this.toastService.presentToast(res.message);
                    this.nav.navigateRoot('/app/categories');
                    console.log('Go to home page');
                    this.router.navigate(['tabs/tab1']);
                });
            }
            else {
                this.toastService.presentToast(res.message);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1894:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\nion-title {\n  font-size: 0.9375rem;\n  text-align: center;\n}\n\nion-list {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\nion-label {\n  color: var(--ion-color-secondary);\n  font-size: 0.75rem;\n}\n\nion-input {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.login-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.login-content .auth-title {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.login-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.login-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.login-content .inputs-list .input-item .ion-input {\n  --background: #FBFBFB;\n  border: 1px solid var(--ion-color-secondary);\n  --padding-start: 3px;\n  border-radius: 4px;\n  --placeholder-color: var(--ion-color-medium);\n}\n\n.login-content .inputs-list .input-item ion-label {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n\n.login-content .login-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.login-content .forgot-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n  text-transform: capitalize !important;\n  font-size: 0.75rem;\n  text-align: center;\n}\n\n.login-content .forgot-btn:focus {\n  outline: none;\n}\n\n.login-content .signup-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.login-content .signup-btn:focus {\n  outline: none;\n}\n\n.login-content .other-auth-options-row {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.login-content .other-auth-options-row .forgot-btn {\n  --color: var(--ion-color-medium);\n  margin: 0px;\n  text-transform: capitalize;\n}\n\n.login-content .other-auth-options-row .forgot-btn:focus {\n  outline: none;\n}\n\n.login-content .other-auth-options-row .signup-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n  text-transform: capitalize;\n}\n\n.login-content .other-auth-options-row .signup-btn:focus {\n  outline: none;\n}\n\ninput {\n  background: #FBFBFB;\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNDQUFBO0VBQ0EsOENBQUE7QUFBSjs7QUFHRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLDJDQUFBO0FBQUo7O0FBR0U7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDRix3QkFBQTtBQUNGOztBQUNFO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQUVKOztBQUFJO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSxxQkFBQTtBQUVOOztBQUNJO0VBQ0UsNkNBQUE7QUFDTjs7QUFDTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUNSOztBQUFRO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDRCw0Q0FBQTtBQUVUOztBQUNRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ1o7O0FBTUk7RUFDRSx3Q0FBQTtBQUpOOztBQVNNO0VBQ0UsbUNBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUFI7O0FBU1E7RUFDRSxhQUFBO0FBUFY7O0FBV007RUFDRSxtQ0FBQTtFQUNBLFdBQUE7QUFUUjs7QUFXUTtFQUNFLGFBQUE7QUFUVjs7QUFhSTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFYTjs7QUFhTTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBWFI7O0FBYVE7RUFDRSxhQUFBO0FBWFY7O0FBZU07RUFDRSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQWJSOztBQWVRO0VBQ0UsYUFBQTtBQWJWOztBQW9CRTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQWpCSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1saXN0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVse1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIH1cclxuICBpb24taW5wdXQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIFxyXG4gICAgLmF1dGgtdGl0bGUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAoMy8yKSk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pbnB1dHMtbGlzdCB7XHJcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICBcclxuICAgICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLmlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTs7XHJcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAubG9naW4tYnRuIHtcclxuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgIH1cclxuICBcclxuICAgXHJcbiAgXHJcbiAgICAgIC5mb3Jnb3QtYnRuIHtcclxuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgLm90aGVyLWF1dGgtb3B0aW9ucy1yb3cge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgIC5mb3Jnb3QtYnRuIHtcclxuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5zaWdudXAtYnRuIHtcclxuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTs7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ 8182:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title size=\"small\">Log in to your account </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"login-content\">\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-label>Email</ion-label>\n      <ion-item class=\"input-item\" lines=\"none\">\n        <ion-input class=\"ion-input\" type=\"email\" placeholder=\"email\" formControlName=\"email\" clearInput autofocus=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-label>Password</ion-label>\n      <ion-item class=\"input-item\" lines=\"none\">\n          <ion-input type=\"password\" class=\"ion-input\" placeholder=\"Password\" formControlName=\"password\" clearInput></ion-input>   \n      </ion-item>\n    </ion-list>\n\n    <ion-button class=\"login-btn\" type=\"submit\" expand=\"block\" color=\"secondary\" [disabled]=\"!loginForm.valid\">Log In</ion-button>    \n\n      <ion-row class=\"other-auth-options-row\">\n        <ion-button class=\"forgot-btn\" color=\"danger\" fill=\"clear\" [routerLink]=\"['/forgot-password']\">\n          Can't remember Password?\n        </ion-button>\n        <ion-button class=\"signup-btn\" color=\"secondary\" fill=\"clear\" [routerLink]=\"['/register']\">\n          Register\n        </ion-button>\n      </ion-row>\n    \n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts.js.map