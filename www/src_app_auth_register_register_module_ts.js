(self["webpackChunknewsApp"] = self["webpackChunknewsApp"] || []).push([["src_app_auth_register_register_module_ts"],{

/***/ 2638:
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 1351);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 6108:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 2638);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 1351);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 1351:
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 4176);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 4169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toast.service */ 4465);








let RegisterPage = class RegisterPage {
    constructor(authService, router, toastService) {
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
    }
    ngOnInit() {
    }
    // register(form) {
    //   this.authService.register(form.value).subscribe((res) => {
    //     this.router.navigateByUrl('home');
    //   });
    // }
    doRegister() {
        console.log(this.signupForm.value);
        this.authService.register(this.signupForm.value).subscribe((res) => {
            console.log(res);
            this.response = res;
            if (this.response.error == false) {
                this.signupForm.reset();
                this.toastService.presentToast(res.message);
                this.router.navigateByUrl('login');
            }
            else {
                this.toastService.presentToast(res.message);
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 4169:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.signup-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.signup-content .auth-title {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.signup-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.signup-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.signup-content .inputs-list .input-item ion-label {\n  margin-bottom: calc(var(--page-margin) * 0.6);\n}\n\n.signup-content .inputs-list .input-item .ion-input {\n  --background: #FBFBFB;\n  border: 1px solid var(--ion-color-secondary);\n  --padding-start: 3px;\n  border-radius: 4px;\n}\n\n.signup-content .inputs-list .input-item ion-select {\n  --background: #FBFBFB;\n  border: 1px solid var(--ion-color-secondary);\n  --padding-start: 3px;\n  border-radius: 4px;\n  --padding-top: 12px;\n  --padding-end: 10px;\n  --padding-bottom: 12px;\n}\n\n.signup-content .signup-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.signup-content .other-auth-options-row {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.signup-content .other-auth-options-row .login-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.signup-content .other-auth-options-row .login-btn:focus {\n  outline: none;\n}\n\n.signup-content .social-auth-options .options-divider {\n  color: var(--ion-color-medium);\n  margin: var(--page-margin) 0px;\n  text-align: center;\n}\n\n.signup-content .social-auth-options .social-auth-btn {\n  margin: 0px;\n}\n\n.signup-content .social-auth-options .social-auth-btn:not(:first-child) {\n  margin-top: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNDQUFBO0VBQ0EsOENBQUE7QUFBSjs7QUFHRTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFFSTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLCtDQUFBO0VBQ0EscUJBQUE7QUFBTjs7QUFHSTtFQUNFLDZDQUFBO0FBRE47O0FBR007RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFEUjs7QUFFUTtFQUNFLDZDQUFBO0FBQVY7O0FBRVE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUFWOztBQUVRO0VBQ0kscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBWjs7QUFPSTtFQUNFLHdDQUFBO0FBTE47O0FBUUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBTk47O0FBUU07RUFDRSxtQ0FBQTtFQUNBLFdBQUE7QUFOUjs7QUFRUTtFQUNFLGFBQUE7QUFOVjs7QUFZTTtFQUNFLDhCQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtBQVZaOztBQWFNO0VBQ0UsV0FBQTtBQVhSOztBQWFRO0VBQ0UsOEJBQUE7QUFYViIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZ251cC1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIFxyXG4gICAgLmF1dGgtdGl0bGUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAoMy8yKSk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIH0gXHJcbiAgXHJcbiAgICAuaW5wdXRzLWxpc3Qge1xyXG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgXHJcbiAgICAgIC5pbnB1dC1pdGVtIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMC42KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlvbi1pbnB1dHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogM3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2lnbnVwLWJ0biB7XHJcbiAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAub3RoZXItYXV0aC1vcHRpb25zLXJvdyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgIC5sb2dpbi1idG4ge1xyXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gIFxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5zb2NpYWwtYXV0aC1vcHRpb25zIHtcclxuICAgICAgLm9wdGlvbnMtZGl2aWRlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc29jaWFsLWF1dGgtYnRuIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICBcclxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ 4176:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" text=\"\" defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"signup-content\">\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"doRegister()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n\n      <!-- First Name -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"stacked\">First Name</ion-label>\n        <ion-input type=\"text\" class=\"ion-input\" formControlName=\"firstname\" clearInput ></ion-input>\n      </ion-item>\n\n      <!-- Last Name -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"stacked\">Surname</ion-label>\n        <ion-input type=\"text\" class=\"ion-input\" formControlName=\"lastname\" clearInput ></ion-input>\n      </ion-item>\n\n      <!-- Email Address -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"text\" class=\"ion-input\" formControlName=\"email\" clearInput inputmode=\"email\" ></ion-input>\n      </ion-item>\n\n    <!-- Password -->\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">Password</ion-label>          \n            <ion-input type=\"password\" class=\"ion-input\" placeholder=\"Password\" formControlName=\"password\" ></ion-input>         \n        </ion-item>\n\n    </ion-list>\n\n    <ion-button class=\"signup-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!signupForm.valid\">Create Account</ion-button>\n    <ion-row class=\"other-auth-options-row\">\n      <ion-button class=\"login-btn\" fill=\"clear\" [routerLink]=\"['/login']\">\n        Already have an account? <span style=\"color:#000000\"> &nbsp;Log in</span>\n      </ion-button>\n    </ion-row>\n  </form>  \n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_register_register_module_ts.js.map