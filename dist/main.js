(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#middle-container {\r\n  height: 600px;\r\n  background-color: #E69797;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <navbar></navbar>\n</div>\n<div id=\"middle-container\">\n    <router-outlet></router-outlet>\n</div>\n<div>\n    <footer-bar></footer-bar>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _like_like_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./like/like.component */ "./src/app/like/like.component.ts");
/* harmony import */ var _like_like_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./like/like.service */ "./src/app/like/like.service.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _order_tables_order_tables_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-tables/order-tables.component */ "./src/app/order-tables/order-tables.component.ts");
/* harmony import */ var _orderbutton_orderbutton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orderbutton/orderbutton.component */ "./src/app/orderbutton/orderbutton.component.ts");
/* harmony import */ var _navigationBar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigationBar/navbar.component */ "./src/app/navigationBar/navbar.component.ts");
/* harmony import */ var _buy_order_buy_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buy-order/buy-order.component */ "./src/app/buy-order/buy-order.component.ts");
/* harmony import */ var _tradepage_tradepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tradepage/tradepage.component */ "./src/app/tradepage/tradepage.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _like_like_component__WEBPACK_IMPORTED_MODULE_6__["LikeComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"],
                _order_tables_order_tables_component__WEBPACK_IMPORTED_MODULE_9__["OrderTablesComponent"],
                _orderbutton_orderbutton_component__WEBPACK_IMPORTED_MODULE_10__["OrderbuttonComponent"],
                _navigationBar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _buy_order_buy_order_component__WEBPACK_IMPORTED_MODULE_12__["BuyOrderComponent"],
                _tradepage_tradepage_component__WEBPACK_IMPORTED_MODULE_13__["TradePageComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_14__["ContactFormComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'home', component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
                    { path: 'contact', component: _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_14__["ContactFormComponent"] },
                    { path: 'order', component: _buy_order_buy_order_component__WEBPACK_IMPORTED_MODULE_12__["BuyOrderComponent"] },
                    { path: 'trade', component: _tradepage_tradepage_component__WEBPACK_IMPORTED_MODULE_13__["TradePageComponent"] },
                    { path: '**', component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
                ])
            ],
            providers: [_like_like_service__WEBPACK_IMPORTED_MODULE_7__["LikeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buy-order/buy-order.component.css":
/*!***************************************************!*\
  !*** ./src/app/buy-order/buy-order.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*    --------------------------------------------------\r\n\t:: Login Section\r\n\t-------------------------------------------------- */\r\n    #login {\r\n        padding-top: 50px\r\n    }\r\n    #login .form-wrap {\r\n        width: 30%;\r\n        margin: 0 auto;\r\n    }\r\n    #login h1 {\r\n        color: #1fa67b;\r\n        font-size: 18px;\r\n        text-align: center;\r\n        font-weight: bold;\r\n        padding-bottom: 20px;\r\n    }\r\n    #login .form-group {\r\n        margin-bottom: 25px;\r\n    }\r\n    #login .checkbox {\r\n        margin-bottom: 20px;\r\n        position: relative;\r\n        -webkit-user-select: none;\r\n        -moz-user-select: none;\r\n        -ms-user-select: none;\r\n        -o-user-select: none;\r\n        user-select: none;\r\n    }\r\n    #login .checkbox.show:before {\r\n        content: '\\e013';\r\n        color: #1fa67b;\r\n        font-size: 17px;\r\n        margin: 1px 0 0 3px;\r\n        position: absolute;\r\n        pointer-events: none;\r\n        font-family: 'Glyphicons Halflings';\r\n    }\r\n    #login .checkbox .character-checkbox {\r\n        width: 25px;\r\n        height: 25px;\r\n        cursor: pointer;\r\n        border-radius: 3px;\r\n        border: 1px solid #ccc;\r\n        vertical-align: middle;\r\n        display: inline-block;\r\n    }\r\n    #login .checkbox .label {\r\n        color: #6d6d6d;\r\n        font-size: 13px;\r\n        font-weight: normal;\r\n    }\r\n    #login .btn.btn-custom {\r\n        font-size: 14px;\r\n        margin-bottom: 20px;\r\n    }\r\n    #login .forget {\r\n        font-size: 13px;\r\n        text-align: center;\r\n        display: block;\r\n    }\r\n    /*    --------------------------------------------------\r\n        :: Inputs & Buttons\r\n        -------------------------------------------------- */\r\n    .form-control {\r\n        color: #212121;\r\n    }\r\n    .btn-custom {\r\n        color: #fff;\r\n        background-color: #1fa67b;\r\n    }\r\n    .btn-custom:hover,\r\n    .btn-custom:focus {\r\n        color: #fff;\r\n    }\r\n    /*    --------------------------------------------------\r\n        :: Footer\r\n        -------------------------------------------------- */\r\n    #footer {\r\n        color: #6d6d6d;\r\n        font-size: 12px;\r\n        text-align: center;\r\n    }\r\n    #footer p {\r\n        margin-bottom: 0;\r\n    }\r\n    #footer a {\r\n        color: inherit;\r\n    }"

/***/ }),

/***/ "./src/app/buy-order/buy-order.component.html":
/*!****************************************************!*\
  !*** ./src/app/buy-order/buy-order.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"login\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"form-wrap\">\n              <h1>Buy Order</h1>\n                  <form role=\"form\" action=\"\" method=\"post\" id=\"login-form\" autocomplete=\"off\">\n                      <div class=\"form-group\">\n                          <label for=\"quantity\" class=\"sr-only\">Quantity</label>\n                          <input type=\"text\" name=\"quantity\" id=\"email\" class=\"form-control\" placeholder=\"Quantity\">\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"price\" class=\"sr-only\">Price</label>\n                          <input type=\"text\" name=\"price\" id=\"key\" class=\"form-control\" placeholder=\"Price\">\n                      </div>\n                      \n                      <input type=\"submit\" id=\"btn-login\" class=\"btn btn-custom btn-lg btn-block\" value=\"Submit Order\">\n                  </form>\n                <hr>\n            </div>\n      </div> <!-- /.col-xs-12 -->\n    </div> <!-- /.row -->\n  </div> <!-- /.container -->\n</section>"

/***/ }),

/***/ "./src/app/buy-order/buy-order.component.ts":
/*!**************************************************!*\
  !*** ./src/app/buy-order/buy-order.component.ts ***!
  \**************************************************/
/*! exports provided: BuyOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyOrderComponent", function() { return BuyOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuyOrderComponent = /** @class */ (function () {
    function BuyOrderComponent() {
    }
    BuyOrderComponent.prototype.ngOnInit = function () {
    };
    BuyOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'buy-order-form',
            template: __webpack_require__(/*! ./buy-order.component.html */ "./src/app/buy-order/buy-order.component.html"),
            styles: [__webpack_require__(/*! ./buy-order.component.css */ "./src/app/buy-order/buy-order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuyOrderComponent);
    return BuyOrderComponent;
}());



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#box{\r\n    border: 1px solid rgb(200, 200, 200);\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px 2px;\r\n    background: rgba(200, 200, 200, 0.1);\r\n    border-radius: 4px;\r\n    top:50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid form\">\n  <div class=\"row-fluid\">\n\n    <div class=\"col-md-offset-4 col-md-4\" id=\"box\">\n      <h2>Contact Us!</h2>\n      <hr>\n      <form class=\"form-horizontal\" action=\" \" method=\"\" id=\"contact_form\">\n        <fieldset>\n          <!-- Form Name -->\n\n          <!-- Text input-->\n\n          <div class=\"form-group\">\n\n            <div class=\"col-md-12\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                <input name=\"first_name\" placeholder=\"Name\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n          </div>\n\n\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n\n            <div class=\"col-md-12\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n                <input name=\"email\" placeholder=\"E-Mail Address\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n          </div>\n\n\n          <!-- Text input-->\n\n          <div class=\"form-group\">\n\n            <div class=\"col-md-12\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n                <input name=\"phone\" placeholder=\"(005)501-120101\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n          </div>\n\n          <!-- Text input-->\n\n          <div class=\"form-group\">\n\n            <div class=\"col-md-12 inputGroupContainer\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></span>\n                <textarea class=\"form-control\" name=\"comment\" placeholder=\"Message\"></textarea>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n\n            <div class=\"col-md-12\">\n              <button type=\"submit\" class=\"btn btn-warning pull-right\">Send <span class=\"glyphicon glyphicon-send\"></span></button>\n            </div>\n          </div>\n\n        </fieldset>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.css */ "./src/app/contact-form/contact-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    background: #222222 none repeat scroll 0 0;\r\n    border-top: 4px solid #fcab0e;\r\n    margin: 10px 0;\r\n    padding: 5px 0;\r\n    \r\n}\r\n.footer_dv {\r\n    width: 100%;\r\n}\r\n.footer_dv h4 {\r\n    color: #fcab0e;\r\n    font-family: roboto;\r\n    font-weight: bold;\r\n    margin-bottom: 30px;\r\n    text-transform: uppercase;\r\n}\r\n.footer_dv ul {\r\n    list-style: outside none none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.footer_dv ul li:first-child {\r\n    border-top: medium none;\r\n    box-shadow: none;\r\n}\r\n.footer_dv ul li {\r\n    border-top: 1px solid #000;\r\n    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2);\r\n    color: #f1f2f2;\r\n    padding: 5px 0;\r\n}\r\n.footer_dv p {\r\n    color: #fff;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    margin: 0 0 15px;\r\n    text-align: justify;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-4  col-md-4 col-sm-4\">\n            <div class=\"footer_dv\">\n                <h4>Services</h4>\n                <ul>\n                    <li class=\"line_rv\"><a href=\"canon-printer-support.php\">Canon Printer Support</a></li>\n             \n                      <li><a href=\"hp-printer-support.php\">Hp printer Support</a></li>\n                      <li><a href=\"dell-printer-support.php\">Dell Printer Support</a></li>\n                      <li><a href=\"epson-printer-support.php\">Epson printer Support</a></li>\n                      <li><a href=\"samsung-printer-support.php\">Samsung Printer Support</a></li>\n                      <li><a href=\"lexmark-printer-support.php\">Lexmark Printer Support</a></li>\n                  </ul>\n              </div>\n          </div>\n          <div class=\"col-lg-4  col-md-4 col-sm-4\">\n            <div class=\"footer_dv\">\n                <h4>Services</h4>\n                <ul>\n                    <li><a href=\"tosiba-printer-support.php\">Toshiba Printer Support</a></li>\n                      <li><a href=\"panasonic-printer-support.php\">Panasonic Printer Support</a></li>\n                      <li><a href=\"xerox-printer-support.php\">Xerox Printer Support</a></li>\n                      <li><a href=\"brother-printer-support.php\">Brother printer support</a></li>\n                      <li><a href=\"zebra-printer-support.php\">Zebra printer support</a></li>\n                      <li><a href=\"lenovo-printer-support.php\">Lenovo printer Support</a></li>\n                     \n                      \n                  </ul>\n              </div>\n          </div>\n          <div class=\"col-lg-4  col-md-4 col-sm-4\">\n            <div class=\"footer_dv\">\n                <h4>Contact us</h4>\n                <p>Printer customer Support</p>\n          <p>USA (TOLL FREE) 8322372800<br>\n\n      \n              </p></div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer-bar',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-content {\r\n    margin-top: 80px;\r\n    background-color: gray\r\n}\r\n\r\n.login-content {\r\n    width: 500px;\r\n    background-color: brown\r\n\r\n}\r\n\r\n.chart-content {\r\n    width: 200px;\r\n    background-color: #F38989;\r\n   \r\n}"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Full Width Image Header \n<header class=\"header-image\">\n  <div class=\"headline\">\n      <div class=\"container\">\n          <h2>The leading global Bitcoin exchange</h2>\n      </div>\n  </div>\n</header> -->\n\n<!-- Page Content -->\n<div class=\"home-content w3-cell-row\" style=\"background-color: gray\">\n       <div class=\" w3-cell w3-container\">chart</div>\n        <div class=\"login-content w3-cell w3-container\">\n            <login-form></login-form>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-container',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/like/like.component.css":
/*!*****************************************!*\
  !*** ./src/app/like/like.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".like { \r\n    color: red \r\n}"

/***/ }),

/***/ "./src/app/like/like.component.html":
/*!******************************************!*\
  !*** ./src/app/like/like.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span (click)=\"liked()\" class=\"glyphicon glyphicon-thumbs-up\"></span>"

/***/ }),

/***/ "./src/app/like/like.component.ts":
/*!****************************************!*\
  !*** ./src/app/like/like.component.ts ***!
  \****************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LikeComponent.prototype.liked = function () {
        this.isLiked = !this.isLiked;
        this.change.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('liked'),
        __metadata("design:type", Boolean)
    ], LikeComponent.prototype, "isLiked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "change", void 0);
    LikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'like',
            template: __webpack_require__(/*! ./like.component.html */ "./src/app/like/like.component.html"),
            styles: [__webpack_require__(/*! ./like.component.css */ "./src/app/like/like.component.css")]
        })
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/like/like.service.ts":
/*!**************************************!*\
  !*** ./src/app/like/like.service.ts ***!
  \**************************************/
/*! exports provided: LikeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeService", function() { return LikeService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LikeService = /** @class */ (function () {
    function LikeService(http) {
        var _this = this;
        http.get("https://jsonplaceholder.typicode.com/users")
            .subscribe(function (response) {
            _this.users = response.json();
        });
    }
    LikeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], LikeService);
    return LikeService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \t\t<div class=\"panel panel-default\">\n\t\t\t  \t<div class=\"panel-heading\">\n\t\t\t    \t<h3 class=\"panel-title\">Please sign in</h3>\n\t\t\t \t</div>\n\t\t\t  \t<div class=\"panel-body\">\n\t\t\t    \t<form accept-charset=\"UTF-8\" role=\"form\">\n                    <fieldset>\n\t\t\t    \t  \t<div class=\"form-group\">\n\t\t\t    \t\t    <input class=\"form-control\" placeholder=\"E-mail\" name=\"email\" type=\"text\">\n\t\t\t    \t\t</div>\n\t\t\t    \t\t<div class=\"form-group\">\n\t\t\t    \t\t\t<input class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" value=\"\">\n\t\t\t    \t\t</div>\n\t\t\t    \t\t<div class=\"checkbox\">\n\t\t\t    \t    \t<label>\n\t\t\t    \t    \t\t<input name=\"remember\" type=\"checkbox\" value=\"Remember Me\"> Remember Me\n\t\t\t    \t    \t</label>\n\t\t\t    \t    </div>\n\t\t\t    \t\t<input class=\"btn btn-lg btn-success btn-block\" type=\"submit\" value=\"Login\">\n\t\t\t    \t</fieldset>\n\t\t\t      \t</form>\n\t\t\t    </div>\n\t\t\t</div>\n\t"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-form',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigationBar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/navigationBar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav1 {\r\n    float: left;\r\n    margin-top: 13px;\r\n}\r\n.line {\r\n    \r\n    margin-top: 13px;\r\n    float: left;\r\n    width: 1px;\r\n    height: 25px;\r\n    background: rgba(255, 255, 255, 0.1);\r\n}\r\n.btn-info {\r\n    background-color: #0096DF !important;\r\n\r\n}"

/***/ }),

/***/ "./src/app/navigationBar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/navigationBar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"nav1 white navbar-left\" id=\"#bannerMarketView\">\n      <a class=\"white\" routerLink=\"order\">Market Overview</a>\n    </div>\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse navbar-right\">\n      <ul class=\"nav navbar-nav\">\n\n        <li>\n          <a routerLink=\"home\">Home</a>\n        </li>\n        <li>\n          <a routerLink=\"trade\">Trade</a>\n        </li>\n        <li>\n          <a routerLink=\"\">FAQ</a>\n        </li>\n        <li>\n          <a routerLink=\"contact\">Contact</a>\n        </li>\n        <div class=\"line\"></div>\n        <li>\n          <button type=\"button\" class=\"btn btn-link navbar-btn login\">\n                    <a routerLink=\"\" class=\"white\" >Log In</a>\n                  </button>\n          <button type=\"button\" class=\"btn btn-info navbar-btn signUp\">\n                    <a routerLink=\"\" class=\"white\">Sign Up</a>\n                  </button>\n        </li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container -->\n</nav>"

/***/ }),

/***/ "./src/app/navigationBar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/navigationBar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navigationBar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navigationBar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order-tables/order-tables.component.css":
/*!*********************************************************!*\
  !*** ./src/app/order-tables/order-tables.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n    display: flex;\r\n    width: 900px;\r\n    height: 550px;\r\n    \r\n}\r\n\r\n.flex-item {\r\n    \r\n    width: 450px;\r\n    height: 100px;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/order-tables/order-tables.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order-tables/order-tables.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n    <div class=\"flex-item\">\n      <h2 class=\"sub-header\">Buy Orders</h2>\n       <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th class=\"col-md-1\">#</th>\n              <th class=\"col-md-2\">Volume</th>\n              <th class=\"col-md-3\">Price</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"col-md-1\">1</td>\n              <td class=\"col-md-2\">100</td>\n              <td class=\"col-md-3\">3</td>\n            </tr>\n            <tr>\n              <td class=\"col-md-1\">10</td>\n              <td class=\"col-md-2\">2000</td>\n              <td class=\"col-md-3\">4</td>\n            </tr>\n            <tr>\n              <td class=\"col-md-1\">100</td>\n              <td class=\"col-md-2\">5000</td>\n              <td class=\"col-md-3\">7</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    <div class=\"flex-item\">\n      <h2 class=\"sub-header\">Sell Orders</h2>\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th class=\"col-md-1\">#</th>\n              <th class=\"col-md-2\">Volume</th>\n              <th class=\"col-md-3\">Price</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"col-md-1\">1,001</td>\n              <td class=\"col-md-2\">1,001</td>\n              <td class=\"col-md-3\">1,001</td>\n            </tr>\n            <tr>\n              <td class=\"col-md-1\">1,001</td>\n              <td class=\"col-md-2\">1,001</td>\n              <td class=\"col-md-3\">1,001</td>\n            </tr>\n            <tr>\n              <td class=\"col-md-1\">1,001</td>\n              <td class=\"col-md-2\">1,001</td>\n              <td class=\"col-md-3\">1,001</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/order-tables/order-tables.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order-tables/order-tables.component.ts ***!
  \********************************************************/
/*! exports provided: OrderTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTablesComponent", function() { return OrderTablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderTablesComponent = /** @class */ (function () {
    function OrderTablesComponent() {
    }
    OrderTablesComponent.prototype.ngOnInit = function () {
    };
    OrderTablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'orderTables',
            template: __webpack_require__(/*! ./order-tables.component.html */ "./src/app/order-tables/order-tables.component.html"),
            styles: [__webpack_require__(/*! ./order-tables.component.css */ "./src/app/order-tables/order-tables.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderTablesComponent);
    return OrderTablesComponent;
}());



/***/ }),

/***/ "./src/app/orderbutton/orderbutton.component.css":
/*!*******************************************************!*\
  !*** ./src/app/orderbutton/orderbutton.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.flex-container {\r\n    display: flex;\r\n    height: 55px;\r\n    background-color: goldenrod\r\n}\r\n\r\n.flex-item {\r\n    \r\n    background-color: cornflowerblue;\r\n    width: 455px;\r\n    height: 50px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.btn-round{\r\n    border-radius: 17px;\r\n    }"

/***/ }),

/***/ "./src/app/orderbutton/orderbutton.component.html":
/*!********************************************************!*\
  !*** ./src/app/orderbutton/orderbutton.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"flex-item\">\n     <a routerLink=\"order\" class=\"btn btn-success btn-lg\">Buy</a>\n  </div>\n  <div class=\"flex-item\">\n      <a routerLink=\"order\" class=\"btn btn-danger btn-lg\">Sell</a>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/orderbutton/orderbutton.component.ts":
/*!******************************************************!*\
  !*** ./src/app/orderbutton/orderbutton.component.ts ***!
  \******************************************************/
/*! exports provided: OrderbuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbuttonComponent", function() { return OrderbuttonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderbuttonComponent = /** @class */ (function () {
    function OrderbuttonComponent() {
    }
    OrderbuttonComponent.prototype.ngOnInit = function () {
        this.isSelected = false;
        this.likeCounter = 10;
    };
    OrderbuttonComponent.prototype.likeCount = function () {
        this.isSelected = !this.isSelected;
        this.likeCounter++;
        console.log("event emitted");
    };
    OrderbuttonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'orderbutton',
            template: __webpack_require__(/*! ./orderbutton.component.html */ "./src/app/orderbutton/orderbutton.component.html"),
            styles: [__webpack_require__(/*! ./orderbutton.component.css */ "./src/app/orderbutton/orderbutton.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderbuttonComponent);
    return OrderbuttonComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group { \r\n    width: 76%;\r\n    margin-left: 10px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.form-control { \r\n    width: 76%;\r\n    margin-left: 10px;\r\n}\r\n\r\n.floatedTable {\r\n    margin-left: 10px;\r\n    width: 20%;\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<input (keyup.enter)=\"createPost(title)\" #title type=\"text\" class=\"form-control\">\n<table class=\"table floatedTable\" >\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Volume</th>\n      <th>Price ($)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let post of posts\">\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n    </tr>\n  </tbody>  \n</table>\n<table class=\"table floatedTable\">\n  <thead>\n    <tr >\n      <th>#</th>\n      <th>Volume</th>\n      <th>Price ($)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let post of posts\">\n      <th scope=\"row\">1</th>\n      <td>{{post.username}}</td>\n      <td>Otto</td>\n    </tr>\n  </tbody>  \n</table>\n\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of posts\" \n      class=\"list-group-item\">\n      <button class=\"btn btn-primary btn-sm\">Delete</button>\n      {{ post.value }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = /** @class */ (function () {
    function PostComponent(http) {
        var _this = this;
        this.http = http;
        this.url = "https://jsonplaceholder.typicode.com/users";
        http.get(this.url)
            .subscribe(function (response) {
            _this.posts = response.json();
        });
    }
    PostComponent.prototype.createPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        input.value = '';
        this.http.post(this.url, JSON.stringify(post))
            .subscribe(function (response) {
            post['id'] = response.json().id;
            _this.posts.splice(0, 0, post);
        });
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/tradepage/tradePage.component.css":
/*!***************************************************!*\
  !*** ./src/app/tradepage/tradePage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tradepage/tradePage.component.html":
/*!****************************************************!*\
  !*** ./src/app/tradepage/tradePage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n     <orderbutton></orderbutton>\n</div>\n<div>\n    <orderTables></orderTables>\n</div>\n"

/***/ }),

/***/ "./src/app/tradepage/tradepage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tradepage/tradepage.component.ts ***!
  \**************************************************/
/*! exports provided: TradePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradePageComponent", function() { return TradePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TradePageComponent = /** @class */ (function () {
    function TradePageComponent() {
    }
    TradePageComponent.prototype.ngOnInit = function () {
    };
    TradePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trade-page',
            template: __webpack_require__(/*! ./tradePage.component.html */ "./src/app/tradepage/tradePage.component.html"),
            styles: [__webpack_require__(/*! ./tradePage.component.css */ "./src/app/tradepage/tradePage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TradePageComponent);
    return TradePageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\hdd\Java\projects\gitPublic\node_angular_flickr\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map