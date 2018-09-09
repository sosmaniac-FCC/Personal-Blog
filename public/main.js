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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <app-nav-bar></app-nav-bar>\n</header>\n<main>\n    <router-outlet></router-outlet>\n</main>\n"

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
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/logger.service */ "./src/app/services/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loggerService) {
        this.loggerService = loggerService;
    }
    AppComponent.prototype.handleClick = function (message) {
        this.loggerService.add(message);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.js":
/*!*******************************!*\
  !*** ./src/app/app.config.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// development
// export default { serverURL: 'https://localhost:8443' };

// production
/* harmony default export */ __webpack_exports__["default"] = ({ serverURL: `${window.location.protocol}//${window.location.host}` });

// do not try this again
// export default fetch('/server-environment')
//   .then(response => response.json())
//   .then(url => Promise.resolve({ serverURL: url }))
//   .catch(error => Promise.reject(`ERROR => ${error}`));


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
/* harmony import */ var _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app-routing/app-routing.module */ "./src/app/modules/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-md */ "./node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/blockui */ "./node_modules/primeng/blockui.js");
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_blockui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/galleria */ "./node_modules/primeng/galleria.js");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_galleria__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_home_intro_intro_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/intro/intro.component */ "./src/app/components/home/intro/intro.component.ts");
/* harmony import */ var _components_home_sub_intro_sub_intro_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/sub-intro/sub-intro.component */ "./src/app/components/home/sub-intro/sub-intro.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_blog_tab_view_tab_view_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/blog/tab-view/tab-view.component */ "./src/app/components/blog/tab-view/tab-view.component.ts");
/* harmony import */ var _components_portfolio_galleria_galleria_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/portfolio/galleria/galleria.component */ "./src/app/components/portfolio/galleria/galleria.component.ts");
/* harmony import */ var _components_portfolio_side_info_side_info_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/portfolio/side-info/side-info.component */ "./src/app/components/portfolio/side-info/side-info.component.ts");
/* harmony import */ var _components_resume_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/resume/data-list/data-list.component */ "./src/app/components/resume/data-list/data-list.component.ts");
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/home/contact/contact.component */ "./src/app/components/home/contact/contact.component.ts");
/* harmony import */ var _components_blog_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/blog/tab-content/tab-content.component */ "./src/app/components/blog/tab-content/tab-content.component.ts");
/* harmony import */ var _components_blog_article_article_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/blog/article/article.component */ "./src/app/components/blog/article/article.component.ts");
/* harmony import */ var _components_portfolio_sub_info_sub_info_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/portfolio/sub-info/sub-info.component */ "./src/app/components/portfolio/sub-info/sub-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Prime Components













// Native components
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_20__["NavBarComponent"],
                _components_home_intro_intro_component__WEBPACK_IMPORTED_MODULE_21__["IntroComponent"],
                _components_home_sub_intro_sub_intro_component__WEBPACK_IMPORTED_MODULE_22__["SubIntroComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_24__["BlogComponent"],
                _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_25__["PortfolioComponent"],
                _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_26__["ResumeComponent"],
                _components_blog_tab_view_tab_view_component__WEBPACK_IMPORTED_MODULE_27__["TabViewComponent"],
                _components_portfolio_galleria_galleria_component__WEBPACK_IMPORTED_MODULE_28__["GalleriaComponent"],
                _components_portfolio_side_info_side_info_component__WEBPACK_IMPORTED_MODULE_29__["SideInfoComponent"],
                _components_resume_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_30__["DataListComponent"],
                _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_31__["ContactComponent"],
                _components_blog_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_32__["TabContentComponent"],
                _components_blog_article_article_component__WEBPACK_IMPORTED_MODULE_33__["ArticleComponent"],
                _components_portfolio_sub_info_sub_info_component__WEBPACK_IMPORTED_MODULE_34__["SubInfoComponent"]
            ],
            imports: [
                _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                primeng_blockui__WEBPACK_IMPORTED_MODULE_6__["BlockUIModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"],
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_11__["FieldsetModule"],
                primeng_galleria__WEBPACK_IMPORTED_MODULE_12__["GalleriaModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_13__["GrowlModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__["InputTextareaModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__["InputTextModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_16__["MenubarModule"],
                ngx_md__WEBPACK_IMPORTED_MODULE_5__["NgxMdModule"].forRoot(),
                primeng_panel__WEBPACK_IMPORTED_MODULE_17__["PanelModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_18__["TabViewModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog/article/article.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/blog/article/article.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p-button {\n    display: flex;\n    justify-content: center;\n}\n\np-button:nth-of-type(1) {\n    margin-top: 20px;\n}\n\np-button:nth-of-type(2) {\n    margin-bottom: 20px;\n}\n\np-card {\n    display: flex;\n    margin: 20px 0 10px 0;\n    justify-content: center;\n}\n\np-card article {\n    font-size: 20px;\n}\n\nsection {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\nform .ui-inputgroup {\n    display: flex;\n    justify-content: center;\n}\n\nform p-button {\n    display: block;\n    width: 100%;\n}\n\nform textarea {\n    margin-top: 3px;\n    width: 95%;\n    resize: none;\n}\n\nform p-button {\n    margin-top: 0;\n}\n\n.comment-block {\n    box-sizing: border-box;\n    border: 1px solid lightgrey;\n    padding: 3px 0 5px 0;\n    text-align: center;\n    background-color: white;\n    margin-bottom: 5px;\n    width: 60%;\n}\n\n#article-md {\n  line-height: 30px;\n}\n\n#comment-section .comment-block {\n    padding-top: 0;\n}\n\n#comment-section .comment-block h3 {\n    margin: 5px 10px;\n}\n\n#comment-section .comment-title {\n    display: flex;\n    justify-content: space-between;\n    background-color: whitesmoke;\n    margin: 0;\n    padding: 0;\n}\n\n#comment-section .comment-block pre {\n    text-align: left;\n    margin: 10px;\n}\n\nsection #comment-section {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\nsection #comment-form {\n    border-radius: 0 0 5px 5px;\n    margin: 5px 0 20px 0;\n}\n\n@media only screen and (max-width: 992px) {\n    .comment-block {\n        width: 70%;\n    }\n}\n\n@media only screen and (max-width: 760px) {\n    .comment-block {\n        width: 85%;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    .comment-block {\n        width: 100%;\n    }\n}\n"

/***/ }),

/***/ "./src/app/components/blog/article/article.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/blog/article/article.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"5000\" [sticky]=\"false\"></p-growl>\n\n<p-button (click)=\"goBack()\" label=\"Go Back\" icon=\"fa fa-backward\" styleClass=\"ui-button-info\"></p-button>\n\n<p-card id=\"article-card\">\n    <article Markdown id=\"article-md\">\n        {{article.content}}\n    </article>\n</p-card>\n\n<section>\n    <div *ngIf=\"comments\" id=\"comment-section\">\n        <div *ngFor=\"let comment of comments\" class=\"comment-block\">\n            <div class=\"comment-title\">\n                <h3>{{comment.from}}</h3>\n                <h3>{{comment.createdAt | date:'short'}}</h3>\n            </div>\n            <pre>{{comment.comment}}</pre>\n        </div>\n    </div>\n    <div class=\"comment-block\" id=\"comment-form\">\n        <form (submit)=\"handleSubmit($event)\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-float-label\">\n                    <input id=\"float-input\" type=\"text\" size=\"25\" id=\"blog-form-name\" pInputText> \n                    <label for=\"float-input\">Name</label>\n                </span>   \n                <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\n            </div>\n            <textarea [rows]=\"5\" pInputTextarea autoResize=\"autoResize\" id=\"blog-form-comment\" placeholder=\"Your feedback goes here!\"></textarea>\n            <p-button type=\"submit\" label=\"Post Comment\" icon=\"fa fa-pencil-square\"></p-button>\n        </form>\n    </div>\n</section>\n\n<p-button (click)=\"goBack()\" label=\"Go Back\" icon=\"fa fa-backward\" styleClass=\"ui-button-info\"></p-button>"

/***/ }),

/***/ "./src/app/components/blog/article/article.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/blog/article/article.component.ts ***!
  \**************************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/cache.service */ "./src/app/services/cache.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/web-socket.service */ "./src/app/services/web-socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(route, cacheService, http, location, webSocket) {
        this.route = route;
        this.cacheService = cacheService;
        this.http = http;
        this.location = location;
        this.webSocket = webSocket;
        this.msgs = [];
    }
    ArticleComponent.prototype.goBack = function () {
        this.location.back();
    };
    ArticleComponent.prototype.handleGrowl = function (message) {
        this.msgs.push({ severity: 'error', summary: 'Failure...', detail: message });
    };
    ArticleComponent.prototype.handlePurr = function (message) {
        this.msgs.push({ severity: 'info', summary: 'Success!', detail: message });
    };
    ArticleComponent.prototype.handleSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var name = event.target.querySelector('#blog-form-name').value;
        var comment = event.target.querySelector('#blog-form-comment').value;
        if (!name && !comment) {
            this.handleGrowl('Nothing has been entered!');
        }
        else if (!name) {
            this.handleGrowl('You forgot to enter your name!');
        }
        else if (!comment) {
            this.handleGrowl('You missed typing out a comment!');
        }
        else {
            this.http.postCommentToArticle(name, comment, this.article.id)
                .subscribe(function (comment) {
                if (comment) {
                    event.target.querySelector('#blog-form-name').value = '';
                    event.target.querySelector('#blog-form-comment').value = '';
                    _this.handlePurr('Thanks for the feedback!');
                    _this.sendComment(comment);
                }
                else {
                    _this.handleGrowl('Submission failed. Please try again later!');
                }
            });
        }
    };
    ArticleComponent.prototype.sendComment = function (comment) {
        this.webSocket.getSubject().next(comment);
    };
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.article = this.cacheService.getArticle(this.route.snapshot.paramMap.get('id'));
        this.webSocket.getSubject()
            .subscribe(function (comment) { return _this.comments = _this.comments ? _this.comments.concat([comment]) : [comment]; });
        this.article && this.http.getCommentsForArticle(this.article.id)
            .subscribe(function (comments) { return comments ? _this.comments = comments.slice() : null; });
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/components/blog/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/components/blog/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_web_socket_service__WEBPACK_IMPORTED_MODULE_5__["WebSocketService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header h3 {\n    font-style: italic;\n    text-align: center;\n    font-family: Times;\n}\n\nfooter h3 {\n    text-align: center;\n    font-family: Times;\n}\n\nmain {\n    margin: 0 0px 20px 0px;\n    border-radius: 5px;\n    border: 1px solid lightgrey;\n}\n\n@media only screen and (max-width: 600px) {\n    main {\n        margin: 0 5px;\n    }\n}"

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <h3>Everything I care about, I write about weekly!</h3>\n</header>\n<main>\n    <app-tab-view></app-tab-view>\n</main>\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
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

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    // hacky but necessary
    BlogComponent.prototype.ngDoCheck = function () {
        window.dispatchEvent(new Event('resize'));
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/tab-content/tab-content.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/blog/tab-content/tab-content.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-grid {\n    cursor: pointer;\n}\n\nh3, h5 {\n    text-align: center;\n}\n\nimg {\n    height: 100%;\n    min-height: 200px;\n    max-height: 350px;\n    width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/blog/tab-content/tab-content.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/blog/tab-content/tab-content.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-carousel *ngIf=\"!noContent\" [value]=\"articles\" breakpoint=\"600\" responsive=\"true\" headerText=\"Articles on {{this.header}}\">\n    <ng-template let-article pTemplate=\"item\">\n        <div class=\"ui-grid ui-grid-responsive highlight-card\" routerLink=\"/blog/{{article.id}}\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-6\"><h3>{{article.title}}</h3></div>\n                <div class=\"ui-grid-col-6\"><h5>Written: {{article.date}}</h5></div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\"><img [src]=\"article.image\" width=\"60\"></div>\n            </div>\n        </div>\n    </ng-template>\n</p-carousel>\n<h3 *ngIf=\"noContent\">No articles available for this topic.</h3>\n"

/***/ }),

/***/ "./src/app/components/blog/tab-content/tab-content.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/blog/tab-content/tab-content.component.ts ***!
  \**********************************************************************/
/*! exports provided: TabContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContentComponent", function() { return TabContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cache.service */ "./src/app/services/cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabContentComponent = /** @class */ (function () {
    function TabContentComponent(cacheService) {
        this.cacheService = cacheService;
        this.articles = [];
    }
    TabContentComponent.prototype.ngOnInit = function () {
        this.articles = this.cacheService.getArticles(this.header);
        this.noContent = this.articles.length === 0 ? true : false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabContentComponent.prototype, "header", void 0);
    TabContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-content',
            template: __webpack_require__(/*! ./tab-content.component.html */ "./src/app/components/blog/tab-content/tab-content.component.html"),
            styles: [__webpack_require__(/*! ./tab-content.component.css */ "./src/app/components/blog/tab-content/tab-content.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cache_service__WEBPACK_IMPORTED_MODULE_1__["CacheService"]])
    ], TabContentComponent);
    return TabContentComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/tab-view/tab-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/blog/tab-view/tab-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/blog/tab-view/tab-view.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/blog/tab-view/tab-view.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-tabView>\n    <p-tabPanel *ngFor=\"let header of headers; let i = index\" [header]=\"header\" [selected]=\"i == 0\">\n        <app-tab-content [header]=\"header\"></app-tab-content>\n    </p-tabPanel>\n</p-tabView>\n"

/***/ }),

/***/ "./src/app/components/blog/tab-view/tab-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/blog/tab-view/tab-view.component.ts ***!
  \****************************************************************/
/*! exports provided: TabViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabViewComponent", function() { return TabViewComponent; });
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

var TabViewComponent = /** @class */ (function () {
    function TabViewComponent() {
        this.headers = ['Technology & Education', 'Life & Wellness'];
    }
    TabViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-view',
            template: __webpack_require__(/*! ./tab-view.component.html */ "./src/app/components/blog/tab-view/tab-view.component.html"),
            styles: [__webpack_require__(/*! ./tab-view.component.css */ "./src/app/components/blog/tab-view/tab-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabViewComponent);
    return TabViewComponent;
}());



/***/ }),

/***/ "./src/app/components/home/contact/contact.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p-card {\n    display: flex;\n    justify-content: center;\n}\n\np-card h3 {\n    margin-top: 0;\n    border-radius: 3px 3px 0 0;\n    padding: 10px;\n    display: block;\n    font-style: Verdana;\n    text-align: center;\n    background-color: lightgrey;\n}\n\np-card section {\n    display: flex;\n    justify-content: space-evenly;\n    flex-direction: row;\n}\n\nsection ul {\n    padding-left: 25px;\n}\n\nsection p {\n    padding: 0 10px;\n}\n\nsection #thumbs-up {\n    display: block;\n    text-align: center;\n    font-size: 30px;\n}\n\nsection form {\n    margin-right: 10px;\n}\n\nform textarea {\n    resize: none;\n    width: 260px;\n}\n\nform p-button {\n    display: block;\n    text-align: center;\n}\n\nul li span {\n    font-weight: bold;\n}\n\n@media only screen and (max-width: 650px) {\n    form {\n        margin-right: 0 !important;\n    }\n    \n    p-card section {\n        display: block;\n    }\n    \n    p-card section > div {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    p-card section > div:nth-child(2) {\n        padding-top: 20px;\n    }\n}"

/***/ }),

/***/ "./src/app/components/home/contact/contact.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card id=\"contact-card\">\n    <h3>If anything here interests you, please let me know about it!</h3>\n    <section>\n        <div>\n            <ul>\n                <li><span>Email: </span> <span [style.fontSize]=\"'15px'\" [style.fontWeight]=\"'normal'\">jgsimmons42@students.tntech.edu</span></li>\n                <li><span>Phone 1: </span>(615) 524-2797</li>\n                <li><span>Phone 2: </span>(615) 592-5818</li>\n            </ul>\n            <p>Quick comments are always appreciated.</p>\n            <i class=\"fa fa-thumbs-o-up\" id=\"thumbs-up\"></i>\n        </div>\n        <div>\n            <form (submit)=\"handleSubmit($event)\">\n                <div class=\"ui-inputgroup\">\n                    <span class=\"ui-float-label\">\n                        <input id=\"float-input\" type=\"text\" size=\"25\" id=\"home-form-name\" pInputText> \n                        <label for=\"float-input\">Name</label>\n                    </span>   \n                    <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\n                </div>\n                <textarea [rows]=\"5\" pInputTextarea autoResize=\"autoResize\" id=\"home-form-message\" placeholder=\"Your message...\"></textarea>\n                <p-button type=\"submit\" label=\"Submit\"></p-button>\n            </form>\n        </div>\n    </section>\n</p-card>\n"

/***/ }),

/***/ "./src/app/components/home/contact/contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
        this.growl = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.purr = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ContactComponent.prototype.handleSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var name = event.target.querySelector('#home-form-name').value;
        var message = event.target.querySelector('#home-form-message').value;
        if (!name && !message) {
            this.growl.emit('Nothing has been entered!');
        }
        else if (!name) {
            this.growl.emit('You forgot to enter your name!');
        }
        else if (!message) {
            this.growl.emit('You missed typing out a message!');
        }
        else {
            this.http.postMessage(name, message)
                .subscribe(function (success) {
                if (success) {
                    event.target.querySelector('#home-form-name').value = '';
                    event.target.querySelector('#home-form-message').value = '';
                    _this.purr.emit('Message submitted. Thank you!');
                }
                else {
                    _this.growl.emit('Submission failed. Please try again later!');
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "growl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "purr", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/home/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/home/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"5000\" [sticky]=\"false\"></p-growl>\n\n<app-intro></app-intro>\n<app-sub-intro></app-sub-intro>\n<app-contact (growl)=\"handleGrowl($event)\" (purr)=\"handlePurr($event)\"></app-contact>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.msgs = [];
    }
    HomeComponent.prototype.handleGrowl = function (message) {
        this.msgs.push({ severity: 'error', summary: 'Failure...', detail: message });
    };
    HomeComponent.prototype.handlePurr = function (message) {
        this.msgs.push({ severity: 'info', summary: 'Success!', detail: message });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/intro/intro.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/home/intro/intro.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    padding: 15px 0;\n}\n\np-fieldset {\n    width: 50%;\n    margin-right: 25px;\n}\n\np-fieldset p {\n    font-family: Verdana;\n}\n\nsection {\n    display: block;\n}\n\nsection div:nth-of-type(1) {\n    font-family: Comic Sans MS;\n    font-size: 25px;\n    float: left;\n}\n\nsection div:nth-of-type(2) {\n    float: right;\n}\n\nsection i {\n    font-size: 30px;\n}\n\nsection a {\n    cursor: pointer;\n    margin: 0 5px;\n    padding: 15px 5px 5px 5px;\n    border-radius: 3px;\n}\n\nsection a:hover {\n    color: white;\n    background-color: darkgrey;\n}\n\nimg {\n    display: inline-block;\n    border-radius: 3px;\n    border: 1px solid lightgrey;\n    box-sizing: border-box;\n    margin: 18px 0 0 0;\n    width: 15%;\n    height: 175px;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n}\n\n@media only screen and (max-width: 992px) {\n    section div:nth-of-type(1) {\n        display: none;\n    }\n    \n    p-fieldset {\n        width: 70%;\n    }\n    \n    img {\n        width: 25%;\n        height: 225px;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    :host {\n        flex-direction: column;\n    }\n    \n    p-fieldset {\n        width: 90%;\n        margin-right: 0;\n    }\n    \n    img {\n        width: 50%;\n        margin-top: 15px;\n    }\n}"

/***/ }),

/***/ "./src/app/components/home/intro/intro.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/home/intro/intro.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-fieldset legend=\"Welcome, welcome!\" styleClass=\"fieldset-style\">\n    <p>Thank you for visiting my corner of the web. I do my best to keep it interesting. I post everything worth\n    showing and telling here. As a hobby web developer, I enjoy building up humble websites such as this. \n    Please enjoy your stay and feel free to provide feedback!</p>\n    <section>\n        <div>Cheers!</div>\n        <div>\n            <a href=\"https://www.linkedin.com/in/john-simmons-3633a113b\" target=\"_blank\"><i class=\"fa fa-linkedin-square\"></i></a>\n            <a href=\"https://stackoverflow.com/users/9249856/john\" target=\"_blank\"><i class=\"fa fa-stack-overflow\"></i></a>\n            <a href=\"https://github.com/sosmaniac-FCC\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\n            <a href=\"https://www.freecodecamp.org/sosmaniac-fcc\" target=\"_blank\"><i class=\"fa fa-free-code-camp\"></i></a>\n        </div>\n    </section>\n</p-fieldset>\n<img src=\"../assets/headshot.jpeg\">"

/***/ }),

/***/ "./src/app/components/home/intro/intro.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/home/intro/intro.component.ts ***!
  \**********************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
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

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/components/home/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/components/home/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/components/home/sub-intro/sub-intro.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/home/sub-intro/sub-intro.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: -ms-grid;\n    display: grid;\n    margin: 0 20px;\n    -ms-grid-columns: (1fr)[3];\n        grid-template-columns: repeat(3, 1fr);\n    grid-gap: 10px;\n}\n\np-panel p {\n    text-align: center;\n}\n\np-panel i {\n    display: block;\n    text-align: center;\n}\n\n.column-a {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-column: 1 / 2;\n}\n\n.column-b {\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 1;\n    grid-column: 2 / 3;\n}\n\n.column-c {\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 1;\n    grid-column: 3 / 4;\n}\n\n@media only screen and (max-width: 600px) {\n    .column-a {\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 3;\n        grid-column: 1 / 4;\n    }\n    \n    .column-b {\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 3;\n        grid-column: 1 / 4;\n    }\n    \n    .column-c {\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 3;\n        grid-column: 1 / 4;\n    }\n}"

/***/ }),

/***/ "./src/app/components/home/sub-intro/sub-intro.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/home/sub-intro/sub-intro.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"column-a\">\n    <p-panel header=\"Blog\">\n        <p>This section features what is on my mind. I believe writing is a powerful form\n        of expression worth leveraging on this website. I post articles weekly.</p>\n        <i class=\"fa fa-pencil-square-o\"></i>\n    </p-panel>\n</section>\n<section class=\"column-b\">\n    <p-panel header=\"Portfolio\">\n        <p>Besides this website, I have worked on many other projects. I learn best by \n        doing after all. New projects release every two weeks to one month.</p>\n        <i class=\"fa fa-folder-open-o\"></i>\n    </p-panel>\n</section>\n<section class=\"column-c\">\n    <p-panel header=\"Documents\">\n        <p>Plenty of relevant stationary. Not very exciting to most people. Documents\n        are previewable and downloadable. New documents occur as they come.</p>\n        <i class=\"fa fa-file-text-o\"></i>\n    </p-panel>\n</section>"

/***/ }),

/***/ "./src/app/components/home/sub-intro/sub-intro.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/home/sub-intro/sub-intro.component.ts ***!
  \******************************************************************/
/*! exports provided: SubIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubIntroComponent", function() { return SubIntroComponent; });
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

var SubIntroComponent = /** @class */ (function () {
    function SubIntroComponent() {
    }
    SubIntroComponent.prototype.ngOnInit = function () {
    };
    SubIntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-intro',
            template: __webpack_require__(/*! ./sub-intro.component.html */ "./src/app/components/home/sub-intro/sub-intro.component.html"),
            styles: [__webpack_require__(/*! ./sub-intro.component.css */ "./src/app/components/home/sub-intro/sub-intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubIntroComponent);
    return SubIntroComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    font-family: Verdana;\n    margin: 4px 0 0 0;\n    padding: 0;\n}\n\n@media only screen and (max-width: 600px) {\n    p {\n        display: none;\n    }\n}"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-menubar [model]=\"items\">\n    <p>John G Simmons <span class=\"fa fa-free-code-camp\"></span></p>\n</p-menubar>"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.handleSelect = function (e) {
        console.log(e);
    };
    NavBarComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: '',
                icon: 'fa-home',
                routerLink: '/home'
            },
            {
                label: 'Blog',
                icon: 'fa-pencil',
                routerLink: '/blog'
            },
            {
                label: 'Portfolio',
                icon: 'fa-folder-open',
                routerLink: '/portfolio'
            },
            {
                label: 'Documents',
                icon: 'fa-file-text',
                routerLink: '/resume'
            }
        ];
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/galleria/galleria.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/portfolio/galleria/galleria.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/portfolio/galleria/galleria.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/portfolio/galleria/galleria.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-galleria [images]=\"images\" [showCaption]=\"false\" (onImageClicked)=\"handleClick($event)\" (onImageChange)=\"handleSwap($event)\"></p-galleria>"

/***/ }),

/***/ "./src/app/components/portfolio/galleria/galleria.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/portfolio/galleria/galleria.component.ts ***!
  \*********************************************************************/
/*! exports provided: GalleriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaComponent", function() { return GalleriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cache.service */ "./src/app/services/cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleriaComponent = /** @class */ (function () {
    function GalleriaComponent(cacheService) {
        this.cacheService = cacheService;
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.images = [];
    }
    GalleriaComponent.prototype.handleSwap = function (event) {
        // swap is index-based off of the insertions of ngOnInit, meaning they will always mirror
        this.indexChange.emit(Array.from(this.cacheService.getProjects())[event.index][0]);
    };
    GalleriaComponent.prototype.handleClick = function (event) {
        var anchor = document.createElement('a');
        anchor.setAttribute('href', this.cacheService.getProjects().get(event.image.title.replace(/ /g, '_').toUpperCase()).url);
        anchor.setAttribute('target', '_blank');
        anchor.click();
    };
    GalleriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        Array.from(this.cacheService.getProjects(), function (entry) { return _this.images.push({ source: entry[1].asset, alt: "PUBLIC_" + entry[0], title: entry[1].title }); });
        this.handleSwap({ index: 0 });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GalleriaComponent.prototype, "indexChange", void 0);
    GalleriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-galleria',
            template: __webpack_require__(/*! ./galleria.component.html */ "./src/app/components/portfolio/galleria/galleria.component.html"),
            styles: [__webpack_require__(/*! ./galleria.component.css */ "./src/app/components/portfolio/galleria/galleria.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cache_service__WEBPACK_IMPORTED_MODULE_1__["CacheService"]])
    ], GalleriaComponent);
    return GalleriaComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > div {\n    display: flex;\n    flex-direction: row;\n}\n\nheader h3 {\n    font-style: italic;\n    text-align: center;\n    font-family: Times;\n}\n\nmain {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 50%;\n}\n\naside {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 50%;\n    height: 450px;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n}\n\nfooter app-sub-info {\n    width: 100%;\n}\n\n@media only screen and (max-width: 700px) {\n    :host > div {\n        display: block;\n    }\n    \n    main {\n        width: 100%;\n    }\n    \n    aside {\n        width: 100%;\n        height: auto;\n        margin-bottom: 5px;\n    }\n    \n    footer {\n        margin-bottom: 20px;\n    }\n}\n\n/*@media only screen and (max-width: 500px) {*/\n\n/*    main {*/\n\n/*        height: 300px;*/\n\n/*    }*/\n\n/*}*/"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <h3>Things I have built in the past!</h3>\n</header>\n<div>\n    <main>\n        <app-galleria (indexChange)=\"index=$event\"></app-galleria>\n    </main>\n    <aside>\n        <app-side-info [contentIndex]=\"index\"></app-side-info>\n    </aside>\n</div>\n<footer>\n    <app-sub-info></app-sub-info>\n</footer>"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
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

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () { };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/components/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/side-info/side-info.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/portfolio/side-info/side-info.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    height: 50px;\n    width: 50px;\n    padding: 5px;\n}"

/***/ }),

/***/ "./src/app/components/portfolio/side-info/side-info.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/portfolio/side-info/side-info.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card [title]=\"activeTitle\" id=\"side-info-card\">\n    <p>{{activeDesc}}</p>\n    <p-footer>\n        <h3>Technologies Used:</h3>\n        <img *ngFor=\"let image of activeImages\" [src]=\"image\">\n        <h3>Click the screen to see it up close!</h3>\n    </p-footer>\n</p-card>"

/***/ }),

/***/ "./src/app/components/portfolio/side-info/side-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/portfolio/side-info/side-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: SideInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideInfoComponent", function() { return SideInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cache.service */ "./src/app/services/cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideInfoComponent = /** @class */ (function () {
    function SideInfoComponent(cacheService) {
        this.cacheService = cacheService;
    }
    SideInfoComponent.prototype.handleContent = function () {
        var current = this.cacheService.getProjects().get(this.index);
        this.activeTitle = current.title;
        this.activeDesc = current.desc;
        this.activeImages = current.icons;
    };
    SideInfoComponent.prototype.ngOnInit = function () {
        this.handleContent();
    };
    SideInfoComponent.prototype.ngOnChanges = function () {
        this.handleContent();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('contentIndex'),
        __metadata("design:type", String)
    ], SideInfoComponent.prototype, "index", void 0);
    SideInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-info',
            template: __webpack_require__(/*! ./side-info.component.html */ "./src/app/components/portfolio/side-info/side-info.component.html"),
            styles: [__webpack_require__(/*! ./side-info.component.css */ "./src/app/components/portfolio/side-info/side-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cache_service__WEBPACK_IMPORTED_MODULE_1__["CacheService"]])
    ], SideInfoComponent);
    return SideInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/sub-info/sub-info.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/portfolio/sub-info/sub-info.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p-panel > div:nth-of-type(1) {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-column: 1 / 2;\n}\n\np-panel main {\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 1;\n    grid-column: 2 / 3;\n    text-align: center;\n}\n\np-panel > div:nth-of-type(2) {\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 1;\n    grid-column: 3 / 4;\n}\n\np-panel div img {\n    display: block;\n    margin: 0 auto;\n    padding: 5px;\n}\n\np {\n    text-align: center;\n    font-size: 10px;\n}\n\nmain p {\n    font-size: 15px;\n}"

/***/ }),

/***/ "./src/app/components/portfolio/sub-info/sub-info.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/portfolio/sub-info/sub-info.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Active Interests and Pursuits\" id=\"portfolio-footer-panel\">\n    <div>\n        <img src=\"../../assets/pngs/Logo_GitHub.png\">\n        <img src=\"../../assets/pngs/Logo_Angular.png\">\n    </div>\n    <main>\n        <p *ngFor=\"let interest of interests\">{{interest}}</p>\n    </main>\n    <div>\n        <img src=\"../../assets/pngs/Logo_GraphQL.png\">\n        <img src=\"../../assets/pngs/Logo_React.png\" height=\"64\">\n    </div>\n</p-panel>\n<p>GraphQL logo by Facebook [<a href=\"http://opensource.org/licenses/bsd-license.php\">BSD</a>], <a href=\"https://commons.wikimedia.org/wiki/File:GraphQL_Logo.svg\">via Wikimedia Commons</a></p>\n<p>React logo by Facebook [Public domain or <a href=\"https://creativecommons.org/licenses/by-sa/1.0\">CC BY-SA 1.0</a>], <a href=\"https://commons.wikimedia.org/wiki/File:React-icon.svg\">via Wikimedia Commons</a></p>\n<p>Angular logo by Google (https://angular.io/presskit.html) [<a href=\"https://creativecommons.org/licenses/by/4.0\">CC BY 4.0</a>], <a href=\"https://commons.wikimedia.org/wiki/File:Angular_full_color_logo.svg\">via Wikimedia Commons</a></p>"

/***/ }),

/***/ "./src/app/components/portfolio/sub-info/sub-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/portfolio/sub-info/sub-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: SubInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubInfoComponent", function() { return SubInfoComponent; });
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

var SubInfoComponent = /** @class */ (function () {
    function SubInfoComponent() {
        this.interests = ['Open Source', 'GraphQL', 'Angular', 'React'];
    }
    SubInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-info',
            template: __webpack_require__(/*! ./sub-info.component.html */ "./src/app/components/portfolio/sub-info/sub-info.component.html"),
            styles: [__webpack_require__(/*! ./sub-info.component.css */ "./src/app/components/portfolio/sub-info/sub-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubInfoComponent);
    return SubInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/data-list/data-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/resume/data-list/data-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline-template-row {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n}\n\n.inline-template-row span {\n    font-size: 20px;\n}\n\n.inline-template-row div {\n    display: flex;\n}\n\n.block-template-row {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n}\n\n.blockUI-container {\n    z-index: 1005; \n    width: 50%;\n    position: absolute;\n    margin: 0 auto;\n    top: 50px;\n    left: 0;\n    right: 0;\n}\n\n.blockUI-container header {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    background-color: lightgrey;\n    border-radius: 3px 3px 0 0;\n    padding: 0 10px;\n}\n\n.blockUI-container img {\n    width: 100%;\n    height: 100%;\n}\n\nimg {\n    height: 50px;\n    width: 50px;\n}\n\np-card p-button:nth-of-type(1) {\n    margin-left: 5px;\n}\n\np-card p-button {\n    margin-top: 10px;\n}\n\np {\n    text-align: center;\n}\n\np-blockUI {\n    position: absolute;\n    pointer-events: none;\n    height: 100%;\n    width: 100%;\n}\n\n@media only screen and (max-width: 992px) {\n    .blockUI-container {\n        width: 70%;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    .blockUI-container {\n        width: 90%;\n    }\n}"

/***/ }),

/***/ "./src/app/components/resume/data-list/data-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/resume/data-list/data-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-blockUI [blocked]=\"blocked\"></p-blockUI>\n\n<p-card *ngIf=\"blocked\" class=\"blockUI-container\">\n    <header>\n        <p>{{activeTitle}}</p>\n        <p-button icon=\"fa fa-times\" (click)=\"handleExit()\" styleClass=\"ui-button-danger\"></p-button>\n    </header>\n    <img [src]=\"activeFile\">\n</p-card>\n\n<p-dataView [value]=\"docs\">\n    <p-header>\n        <span>Resume, Certifications, Transcript ...</span>\n        <p-dataViewLayoutOptions></p-dataViewLayoutOptions>\n    </p-header>\n    <ng-template let-doc pTemplate=\"listItem\">\n        <p-card class=\"ui-g-12\">\n            <div class=\"inline-template-row\">\n                <span>{{doc.title}}</span>\n                <div>\n                    <img [src]=\"doc.format\">\n                    <p-button icon=\"fa fa-search\" (click)=\"handleZoom(doc)\"></p-button>\n                    <p-button label=\"Download\" (click)=\"handleDownload(doc.file)\"></p-button>\n                </div>\n            </div>\n        </p-card>\n    </ng-template>\n    <ng-template let-doc pTemplate=\"gridItem\">\n        <p-card [style.textAlign]=\"'center'\" class=\"ui-g-12 ui-md-4\">\n            <div>{{doc.title}}</div><hr/>\n            <div class=\"block-template-row\">\n                <img [src]=\"doc.format\">\n                <p-button icon=\"fa fa-search\" (click)=\"handleZoom(doc)\"></p-button>\n                <p-button label=\"Download\" (click)=\"handleDownload(doc.file)\"></p-button>\n            </div>\n        </p-card>\n    </ng-template>\n</p-dataView>\n<p>.PDF logo by Leoncastro [<a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\">CC BY-SA 4.0</a>], <a href=\"https://commons.wikimedia.org/wiki/File:Icon-pdf.svg\" target=\"_blank\">from Wikimedia Commons</a></p>"

/***/ }),

/***/ "./src/app/components/resume/data-list/data-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/resume/data-list/data-list.component.ts ***!
  \********************************************************************/
/*! exports provided: DataListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataListComponent", function() { return DataListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cache.service */ "./src/app/services/cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataListComponent = /** @class */ (function () {
    function DataListComponent(cacheService) {
        this.cacheService = cacheService;
        this.docs = [];
        this.blocked = false;
    }
    DataListComponent.prototype.handleExit = function () {
        this.blocked = false;
    };
    DataListComponent.prototype.handleZoom = function (doc) {
        this.blocked = true;
        this.activeTitle = doc.title;
        this.activeFile = doc.file.replace(/\.pdf$/m, '.png');
    };
    DataListComponent.prototype.handleDownload = function (file) {
        var anchor = document.createElement('a');
        anchor.setAttribute('href', file);
        anchor.setAttribute('download', '');
        anchor.click();
    };
    DataListComponent.prototype.ngOnInit = function () {
        this.docs = Array.from(this.cacheService.getDocuments().values());
    };
    DataListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-list',
            template: __webpack_require__(/*! ./data-list.component.html */ "./src/app/components/resume/data-list/data-list.component.html"),
            styles: [__webpack_require__(/*! ./data-list.component.css */ "./src/app/components/resume/data-list/data-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cache_service__WEBPACK_IMPORTED_MODULE_1__["CacheService"]])
    ], DataListComponent);
    return DataListComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/resume.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/resume/resume.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header h3 {\n    font-style: italic;\n    text-align: center;\n    font-family: Times;\n}"

/***/ }),

/***/ "./src/app/components/resume/resume.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <h3>An assortment of downloadable documents!</h3>\n</header>\n<main>\n    <app-data-list></app-data-list>\n</main>\n"

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
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

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/components/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/modules/app-routing/app-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/app-routing/app-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_blog_article_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/blog/article/article.component */ "./src/app/components/blog/article/article.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'blog',
        component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]
    },
    {
        path: 'blog/:id',
        component: _components_blog_article_article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"]
    },
    {
        path: 'portfolio',
        component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"]
    },
    {
        path: 'resume',
        component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/cache.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/cache.service.ts ***!
  \*******************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_articles_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/articles/index.js */ "./src/assets/articles/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CacheService = /** @class */ (function () {
    function CacheService() {
        this.projects = new Map([
            ['WF_DATA_DISPLAY', { title: 'WF Data Display', asset: '../../assets/projects/project_31.png', url: 'https://codepen.io/sosmaniac/full/jGvOeG/', desc: 'Fast-performing, dynamically-loaded scatterplot based off user login. This project was created for Wells Fargo during their Data Analytics MindSumo challenge. The data display in this project was randomly generated and provided by them.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_D3.svg'] }],
            ['PINTEREST_CLONE', { title: 'Pinterest Clone', asset: '../../assets/projects/project_30.png', url: 'https://afternoon-tor-77260.herokuapp.com/', desc: 'Server-rendered application. Masonry layout enhances the look and feel of the display user pins. Redux used to manage client-side state. Yay for React. Database connected with MongoDB. CSS3 for stylishness regardless of viewport.', icons: ['../../assets/svgs/Logo_Node.svg', '../../assets/svgs/Logo_MongoDB.svg', '../../assets/svgs/Logo_JQuery.svg', '../../assets/svgs/Logo_React.svg', '../../assets/svgs/Logo_Webpack.svg', '../../assets/svgs/Logo_Redux.svg', '../../assets/svgs/Logo_RRouter.svg'] }],
            ['BOOK_TRADING_CLUB', { title: 'Book Trading Club', asset: '../../assets/projects/project_29.png', url: 'https://shielded-waters-21520.herokuapp.com/', desc: 'Single page application. The responsiveness and overall styling of the App is inspired from Materialize. The App provides book trading functionality across all registered users. Account credentials can be changed from the user settings. Books supplied from Google\'s Book API.', icons: ['../../assets/svgs/Logo_Node.svg', '../../assets/svgs/Logo_MongoDB.svg', '../../assets/svgs/Logo_Materialize.svg', '../../assets/svgs/Logo_JQuery.svg', '../../assets/svgs/Logo_React.svg', '../../assets/svgs/Logo_Redux.svg', '../../assets/svgs/Logo_RRouter.svg'] }],
            ['CHART_THE_STOCK_MARKET', { title: 'Chart the Stock Market', asset: '../../assets/projects/project_28.png', url: 'https://stock-market-app-sosmaniac.herokuapp.com/', desc: 'Line graph application that leverages web sockets. The application\'s back end ensures any updates from any one user persist to all users without the need to refresh the page. Just about any stock on the market can be searched, added, and removed.', icons: ['../../assets/svgs/Logo_Node.svg', '../../assets/svgs/Logo_MongoDB.svg', '../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_D3.svg'] }],
            ['NIGHTLIFE_COORDINATOR', { title: 'Nightlife Coordinator', asset: '../../assets/projects/project_27.png', url: 'https://nl-coordinator-sosmaniac.herokuapp.com/', desc: 'Search-based project providing users a framework for viewing local pubs. Users can login via Twitter and indicate where they are setting out for the night. Search results contain all necessary information including a picture, customer review, and link for more information on the joint.', icons: ['../../assets/svgs/Logo_Node.svg', '../../assets/svgs/Logo_MongoDB.svg', '../../assets/svgs/Logo_Materialize.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_React.svg', '../../assets/svgs/Logo_Webpack.svg', '../../assets/svgs/Logo_Git.svg'] }],
            ['VOTING_APP', { title: 'Voting App', asset: '../../assets/projects/project_26.png', url: 'https://vote-app-sosmaniac.herokuapp.com/', desc: 'Featureful application for generating and voting on polls. Anyone can register and take advantage of all this project has to offer. Account settings can be changed from the profile screen. Users can login with Twitter if preferred. Fun fact: this is my first full stack project.', icons: ['../../assets/svgs/Logo_Node.svg', '../../assets/svgs/Logo_MongoDB.svg', '../../assets/svgs/Logo_Bootstrap.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_React.svg', '../../assets/svgs/Logo_Webpack.svg', '../../assets/svgs/Logo_Git.svg'] }],
            ['FILE_METADATA_MICROSERVICE', { title: 'File Metadata Microservice', asset: '../../assets/projects/project_25.png', url: 'https://file-metadata-ser.glitch.me/', desc: 'With this project, any computer file can be uploaded and stored on a publicly viewable collection. The home website displays a file’s size in bytes upon upload. The collection for viewing uploaded files is linked on the website.', icons: ['../../assets/svgs/Logo_Node.svg', '../../assets/svgs/Logo_MongoDB.svg'] }],
            ['IMAGE_SEARCH_ABSTRACTION_LAYER', { title: 'Image Search Abstraction Layer', asset: '../../assets/projects/project_24.png', url: 'https://img-search-abs-second-attempt.glitch.me/imagesearch/banana?offset=1', desc: 'Displays JSON image results from the above search parameter which defaults to ‘puppies’. The search parameter determines the search results. The offset value to the right of the ‘=’ paginates through the search results by its numerical value. The path ‘/latest/imagesearch’ returns the top ten most recent searches associated with the ‘/imagesearch/[search entry]?offset=[#]’ path linked above. Made possible with the Custom Search API from Google.', icons: ['../../assets/svgs/Logo_Node.svg', '../../assets/svgs/Logo_MongoDB.svg'] }],
            ['URL_SHORTENER_MICROSERVICE', { title: 'Url Shortener Microservice', asset: '../../assets/projects/project_23.png', url: 'https://url-microservice-3.glitch.me/', desc: 'Takes a given URL and ‘shortens’ it into another URL that redirects to the original URL. Both original and the shortened URLs are displayed in JSON format. Invalid input returns an error instead. Project homepage includes further instructions.', icons: ['../../assets/svgs/Logo_Node.svg', '../../assets/svgs/Logo_MongoDB.svg'] }],
            ['DATA_ACROSS_THE_GLOBE', { title: 'Data Across the Globe', asset: '../../assets/projects/project_22.png', url: 'https://codepen.io/sosmaniac/full/PENPyV/', desc: 'Maps meteorite landings across the globe. Meteorites are aligned to their approximate strike zone on Earth projection. The map is viewable with a mouse’s scroll wheel and navigable by clicking and dragging on the map. Hovering the mouse over a strike zone reveals information unique to that meteorite.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_D3.svg'] }],
            ['FORCE_DIRECTED_GRAPH', { title: 'Force Directed Graph', asset: '../../assets/projects/project_21.png', url: 'https://codepen.io/sosmaniac/full/mpPJOr/', desc: 'Force directed graph of interconnected, click-and-drag national flags. Their connections represent shared borders. Each flag moves in relation to each other, tightly bounded by the borders of the containing box.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_D3.svg'] }],
            ['ROGUELIKE_DUNGEON_CRAWLER', { title: 'Roguelike Dungeon Crawler', asset: '../../assets/projects/project_20.png', url: 'https://codepen.io/sosmaniac/full/goPrBv/', desc: 'Four dungeon layers with a variety of upgrades to collect and still-standing enemies to slay. All of these interactive elements are color-coded. Red means enemy, gold means weapon scrap, green means food ration, dark red means enemy boss, and purple means stairs to the next level. The player (represented by a blue dot) moves up, down, left, or right using the arrow keys. The player can also fight and gain experience up until the fourth floor of the dungeon where the boss lies.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_React.svg', '../../assets/svgs/Logo_Babel.svg', '../../assets/svgs/Logo_SASS.svg'] }],
            ['GAME_OF_LIFE', { title: 'Game of Life', asset: '../../assets/projects/project_19.png', url: 'https://codepen.io/sosmaniac/full/EbWLYb/', desc: 'Cell life as described by John Conway\'s simple algorithm. The grid\'s size and tick speed are modifiable. The simulation can be paused, resumed, and cleared. The longer each individual cell lives, the darker its color gets. Clicking any cell toggles the cell\'s life on/off.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_React.svg', '../../assets/svgs/Logo_Babel.svg'] }],
            ['HEAT_MAP', { title: 'Heat Map', asset: '../../assets/projects/project_18.png', url: 'https://codepen.io/sosmaniac/full/KXJQyo/', desc: 'Project visualizes data in a colorful, rectangular format. Every box comprising the graph is distinctly colored depending on the underlying temperature data. The graph has a key for determining what each color means.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_D3.svg'] }],
            ['SCATTERPLOT_GRAPH', { title: 'Scatterplot Graph', asset: '../../assets/projects/project_17.png', url: 'https://codepen.io/sosmaniac/full/WZOyav/', desc: 'Visualization of competitive biking data displayed as a scatter-plot graph. Mousing over each dot reveals a tool-tip with details. The dots are colored red or blue based on whether the biker was an alleged drug abuser or not.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_D3.svg'] }],
            ['BAR_CHART', { title: 'Bar Chart', asset: '../../assets/projects/project_16.png', url: 'https://codepen.io/sosmaniac/full/BwRQBE/', desc: 'Bar chart pulls JSON data from a text document and visualizes it. Hovering over each individual bar displays specific information for that section of time. It is possible toggle in-between ‘detailed’ and ‘general’ in viewing the data.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_D3.svg'] }],
            ['RECIPE_BOX', { title: 'Recipe Box', asset: '../../assets/projects/project_15.png', url: 'https://codepen.io/sosmaniac/full/xLBGqL/', desc: 'The recipe box takes and stores recipes in the browser\'s local storage. A number of menu options are provided that allow the user to add, delete or edit each recipe. Clicking on a recipe title reveals all of these features. Animated transitions provide satisfying feedback.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_React.svg', '../../assets/svgs/Logo_Babel.svg'] }],
            ['CAMPER_LEADERBOARD', { title: 'Camper Leaderboard', asset: '../../assets/projects/project_14.png', url: 'https://codepen.io/sosmaniac/full/eEzxGy/', desc: 'Portrays a leaderboard themed after www.freecodecamp.com. The board contains the top 100 users in regards to each user\'s cumulative score points. The listing is initially sorted for the last month, but it can be switched to all-time scores by clicking the ‘ALL-TIME’ table heading.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_React.svg', '../../assets/svgs/Logo_Babel.svg'] }],
            ['MARKDOWN_PREVIEWER', { title: 'Markdown Previewer', asset: '../../assets/projects/project_13.png', url: 'https://codepen.io/sosmaniac/full/dzGbaO/', desc: 'On one side is an input box where the user can enter generic text. On the other side is the output where text entered from the left is parsed into markdown.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_React.svg', '../../assets/svgs/Logo_Babel.svg'] }],
            ['REQUEST_HEADER_MICROSERVICE', { title: 'Request Header Microservice', asset: '../../assets/projects/project_12.png', url: 'https://fcc-project-12.glitch.me/', desc: 'Following the home page\'s instructions, the user can route to a page displaying their computer\'s basic information (IP address, configured language, and operating system).', icons: ['../../assets/svgs/Logo_Node.svg'] }],
            ['TIMESTAMP_MICROSERVICE', { title: 'Timestamp Microservice', asset: '../../assets/projects/project_11.png', url: 'https://fcc-project-11.glitch.me/', desc: 'The user can convert unix or natural time into natural and uni, respectively. Read and follow the home page\'s instructions carefully for proper output. The user will be routed to a screen of null outputs upon invalid input.', icons: ['../../assets/svgs/Logo_Node.svg'] }],
            ['SIMON_GAME', { title: 'Simon Game', asset: '../../assets/projects/project_10.png', url: 'https://codepen.io/sosmaniac/full/RgZPyX/', desc: 'Simon Says! Classic game. Plenty of buttons and audio feedback to keep the user in control and engaged. The game gradually speeds up with each level. The user wins the game by beating level 20. ‘Strict’ mode is activatable at any time for added difficulty.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg'] }],
            ['TIC_TAC_TOE', { title: 'Tic Tac Toe', asset: '../../assets/projects/project_9.png', url: 'https://codepen.io/sosmaniac/full/BZWzWO/', desc: 'Tic Tac Toe playable against a computer AI. The user may choose between X\'s and O\'s. The game score is tracked and may be reset. Timed animations provide easy-to-see feedback to the user as he interacts with the gameboard.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_JQuery.svg'] }],
            ['POMODORO_CLOCK', { title: 'Pomodoro Clock', asset: '../../assets/projects/project_8.png', url: 'https://codepen.io/sosmaniac/full/ZypVVV/', desc: 'Pomodoro timer ticks down time in customizable intervals split between ‘work’ (green) and ‘break’ (red). The timer can be paused. The clock\'s background color intensity varies with the countdown. Time alternates automatically between ‘work’ and ‘break’.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_JQuery.svg'] }],
            ['JAVASCRIPT_CALCULATOR', { title: 'JavaScript Calculator', asset: '../../assets/projects/project_7.png', url: 'https://codepen.io/sosmaniac/full/rwLwaz/', desc: '4-function calculator powered with JavaScript. Calculator can tolerate invalid button presses. There is a secret way to break the display, but that remains for the user to find!', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg'] }],
            ['TWITCHTV_API', { title: 'Twitch.tv API', asset: '../../assets/projects/project_6.png', url: 'https://codepen.io/sosmaniac/full/jwOBeL/', desc: 'Displays a preset list of twitch.tv live streamers and whether they are offline, online, or suspended for whatever reason. Menu options in the project\'s header allow the user to customize whether offline, online, or all streamers are listed.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_JQuery.svg'] }],
            ['WIKIPEDIA_VIEWER', { title: 'Wikipedia Viewer', asset: '../../assets/projects/project_5.png', url: 'https://codepen.io/sosmaniac/full/BZBmOB/', desc: 'A front end search engine backed by Wikipedia’s API and data. Includes a \'I am feeling lucky\' button and some intermediate, toggleable animations. Every search result links to its native location on www.wikipedia.org.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg', '../../assets/svgs/Logo_JQuery.svg'] }],
            ['LOCAL_WEATHER_REPORT', { title: 'Local Weather Report', asset: '../../assets/projects/project_4.png', url: 'https://codepen.io/sosmaniac/full/LyKOBa/', desc: 'Calculates the user\'s geographical position and displays local weather. Depending on the weather, a list of complimentary activities is shown to the right. Project powered by the Dark Sky weather API and Google’s geolocation API.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg'] }],
            ['RANDOM_QUOTE_GENERATOR', { title: 'Random Quote Generator', asset: '../../assets/projects/project_3.png', url: 'https://codepen.io/sosmaniac/full/ddjOew/', desc: 'A basic randomizer for famous quotes. Tweeting quotes to Twitter is enabled. CSS transitions leveraged for smoother color transitions.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg'] }],
            ['MOCK_PORTFOLIO', { title: 'Mock Portfolio', asset: '../../assets/projects/project_2.png', url: 'https://codepen.io/sosmaniac/full/QvBQBL/', desc: 'A mock cat-folio with basic click events for page navigation. Buttons link to various social media and cat pictures.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg', '../../assets/svgs/Logo_JS.svg'] }],
            ['TRIBUTE_PAGE', { title: 'Tribute Page', asset: '../../assets/projects/project_1.png', url: 'https://codepen.io/sosmaniac/full/MmWqaM/', desc: 'Static web page coded from scratch. Contains a basic biography of Dr. Norman Burlaug.', icons: ['../../assets/svgs/Logo_HTML5.svg', '../../assets/svgs/Logo_CSS3.svg'] }]
        ]);
        this.documents = new Map([
            ['BACK_END_CERTIFICATION', { title: 'Free Code Camp Back End Development Program', file: '../../assets/documents/back-end-certification.pdf', format: '../../assets/documents/Logo_PDF.svg' }],
            ['DATA_VISUALIZATION_CERTIFICATION', { title: 'Free Code Camp Data Visualization Program', file: '../../assets/documents/data-visualization-certification.pdf', format: '../../assets/documents/Logo_PDF.svg' }],
            ['FRONT_END_CERTIFICATION', { title: 'Free Code Camp Front End Development Program', file: '../../assets/documents/front-end-certification.pdf', format: '../../assets/documents/Logo_PDF.svg' }],
            ['COVER_LETTER', { title: 'Cover Letter', file: '../../assets/documents/cover-letter-05202018.pdf', format: '../../assets/documents/Logo_PDF.svg' }],
            ['RESUME', { title: 'Resume', file: '../../assets/documents/resume-05202018.pdf', format: '../../assets/documents/Logo_PDF.svg' }],
            ['TRANSCRIPT', { title: 'University Transcript', file: '../../assets/documents/transcript-05202018.pdf', format: '../../assets/documents/Logo_PDF.svg' }],
            ['SERVER_SIDE_DEVELOPMENT_CERTIFICATION', { title: 'Server-side Development with NodeJS, Express and MongoDB', file: '../../assets/documents/server-side-certification.pdf', format: '../../assets/documents/Logo_PDF.svg' }]
        ]);
        this.allArticles = Object.values(_assets_articles_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
    CacheService.prototype.getProjects = function () {
        return this.projects;
    };
    CacheService.prototype.getDocuments = function () {
        return this.documents;
    };
    CacheService.prototype.getArticles = function (topic) {
        this.selectArticles = [];
        for (var i = 0; i < this.allArticles.length; i++) {
            if (this.allArticles[i].topic === topic) {
                this.selectArticles.push(this.allArticles[i]);
            }
        }
        return this.selectArticles;
    };
    CacheService.prototype.getArticle = function (id) {
        this.selectArticle = null;
        for (var i = 0; i < this.allArticles.length; i++) {
            if (this.allArticles[i].id === id) {
                this.selectArticle = this.allArticles[i];
                break;
            }
        }
        return this.selectArticle;
    };
    CacheService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CacheService);
    return CacheService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config.js */ "./src/app/app.config.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logger.service */ "./src/app/services/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpService = /** @class */ (function () {
    function HttpService(logger, http) {
        this.logger = logger;
        this.http = http;
        this.serverURL = _app_config_js__WEBPACK_IMPORTED_MODULE_4__["default"].serverURL;
    }
    HttpService.prototype.log = function (message) {
        this.logger.add(message);
    };
    HttpService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.log(operation + " failed: " + error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HttpService.prototype.getCommentsForArticle = function (articleId) {
        var _this = this;
        return this.http.get(this.serverURL + "/allComments?id=" + articleId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log("Getting all comments concerning: " + articleId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCommentsForArticle', articleId)));
    };
    HttpService.prototype.postCommentToArticle = function (name, comment, articleId) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.serverURL + "/newComment", { name: name, comment: comment, postedTo: articleId }, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log("Posting new comment submitted by: " + name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postCommentToArticle', comment)));
    };
    HttpService.prototype.postMessage = function (name, message) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.serverURL + "/newMessage", { name: name, message: message }, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log("Posting new messaged submitted by: " + name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postMessage', message)));
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/logger.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/logger.service.ts ***!
  \********************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
        this.history = [];
    }
    LoggerService.prototype.add = function (message) {
        this.history.push(message);
        this.head();
    };
    LoggerService.prototype.head = function () {
        console.log(this.history[this.history.length - 1] || '...');
    };
    LoggerService.prototype.clear = function () {
        this.history = [];
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/services/web-socket.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config.js */ "./src/app/app.config.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
        this.serverURL = _app_config_js__WEBPACK_IMPORTED_MODULE_4__["default"].serverURL;
    }
    WebSocketService.prototype.connect = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.serverURL);
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('comment', function (data) {
                console.log('Socket received:', data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        var observer = {
            next: function (data) {
                _this.socket.emit('comment', JSON.stringify(data));
            }
        };
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Subject"].create(observer, observable);
    };
    WebSocketService.prototype.getSubject = function () {
        return this.connect();
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/assets/articles/index.js":
/*!**************************************!*\
  !*** ./src/assets/articles/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/example.js */ "./src/assets/articles/list/example.js");
/* harmony import */ var _list_fall_semester_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/fall_semester.js */ "./src/assets/articles/list/fall_semester.js");
/* harmony import */ var _list_internships_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/internships.js */ "./src/assets/articles/list/internships.js");
/* harmony import */ var _list_starting_a_blog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/starting_a_blog.js */ "./src/assets/articles/list/starting_a_blog.js");
/* harmony import */ var _list_teaching_assistant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/teaching_assistant.js */ "./src/assets/articles/list/teaching_assistant.js");






/* harmony default export */ __webpack_exports__["default"] = ({
    example: _list_example_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    fall_semester: _list_fall_semester_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    internships: _list_internships_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    starting_a_blog: _list_starting_a_blog_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    teaching_assistant: _list_teaching_assistant_js__WEBPACK_IMPORTED_MODULE_4__["default"]
});


/***/ }),

/***/ "./src/assets/articles/list/example.js":
/*!*********************************************!*\
  !*** ./src/assets/articles/list/example.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    id: '0',
    topic: 'Technology & Education',
    date: '06/15/2018',
    title: 'Example Article',
    image: '../../assets/articles/images/default_image.jpg',
    content: `
Heading
=======

![Default Picture](../../assets/articles/images/default_image.jpg)

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated by a blank line.

Leave 2 spaces at the end of a line to do a line break

Text attributes *italic*, **bold**, \`monospace\`, ~~strikethrough~~ .

Shopping list:

* apples
* oranges
* pears

Numbered list:

1. apples
2. oranges
3. pears

The rain---not the reign---in Spain.

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*
`});


/***/ }),

/***/ "./src/assets/articles/list/fall_semester.js":
/*!***************************************************!*\
  !*** ./src/assets/articles/list/fall_semester.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    id: '3',
    topic: 'Technology & Education',
    date: '08/27/2018',
    title: 'Fall Semester',
    image: '../../assets/articles/images/stock_fall_walkway.jpg',
    content: `
Fall Semester
=============
##### 08/27/2018

![Fall Walkway](../../assets/articles/images/stock_fall_walkway.jpg)

The first day of classes has concluded. My University's computer science program is currently larger than ever. Familiar faces I have not seen in months are now a near-daily occurrence. New construction is happening everywhere on campus. Everything feels so different compared to last week and the previous two semesters.

I failed to comprehend it the first time around, but University life feels so brittle. It somehow manages to exist off of students' fortunes or lack there-of in the case of student loans.

Granted, University costs are somewhat justified. University exposes people to the peaks of achievable skill and knowledge concerning most professions. People ply themselves against so many different professions wherein each boasts an incredibly high proficiency-ceiling.

One of the first proficiency-based professions I can think of is painting. A master painter is as obvious as the mid-day sun. I can behold his or her work ontop of a canvas and easily discern the painter's level of proficiency. That said, I would not qualify to give a professional art opinion. Regardless, I have attempted enough paintings to appreciate those who can make the paintbrush sing.

The idea of mastery, as exemplified with painting, is my motto for this semester. I want to produce the rough equivalent of a painted masterpiece in terms of programmatic logic. That may mean my biggest project yet. Perhaps it means going above and beyond in my classes. I am not 100% sure yet. Truth be told, I may lack the necessary experience to produce masterpieces. That does not mean I cannot try.

My class schedule lists 19 credit hours of both computer science and mathematics. This is the sort of challenge I need to push myself towards programmatic mastery. The pursuit of mastery offers unparalled fulfillment matched only by its difficulty to pursue.

I will keep at it as best as I can. Even now I am running short on time to write and publish this article due to classes. I apologize for stopping short. Trust me when I say that I will manage my time better for next Monday's blog post/article.
`
});


/***/ }),

/***/ "./src/assets/articles/list/internships.js":
/*!*************************************************!*\
  !*** ./src/assets/articles/list/internships.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  id: '2',
  topic: 'Technology & Education',
  date: '08/20/2018',
  title: 'Internships',
  image: '../../assets/articles/images/stock_light_bulb.jpg',
  content: `
College Internships
===================
##### 08/20/2018

![Light Bulb](../../assets/articles/images/stock_light_bulb.jpg)

My transition from high school to College was worrisome. I had to take on my first student loan where I would be owing more than $2000 to the government. I thought this was so risky yet very necessary.

I had no luck applying for scholarships offered by my College and home County. My funds from working the grocery store provided much-needed leeway for most of my College-related expenses. The financial burden was so surreal. It felt as if I was stepping into ice-cold water for the very first time. There was no going back.

My first instinct was my Checking Account. I believed that I had to replenish those funds. I jumped at the first opportunity to work at a University call center.

I had no idea what I was getting into. It turns out asking people for money over the phone was way beyond my sanity. It would have been much better if I had something to offer in return for money. That was not the case at this call center. Thankfully, I did succeed in securing very minor donations. Each success came at great cost to my sanity however. I tapped out of the job after a mere couple days.

I turned elsewhere in the University to earn some funds. I landed upon my first pseudo-internship with the University's Small Business Development Center. This position was not exactly money-making at 10 hours a week, $10 per hour. I no longer cared as much about the pay.

The work had me attending workshops and studying basic web development. These work/study experiences made the job worth much more than the pay. Earning money while performing engaging work was possible even if not financially optimal. I had done the numbers realizing that my financials were not that bad, so I went all-in with the internship while pursuing my College studies.

The people running the internship program were very kind. The things I did there were not always beneficial but neither were they harmful. I dedicated days to learning the ins-and-outs of Front End development concepts. This was not productive from a business perspective. From a personal perspective, it meant becoming a better programmer.

What made the learning process all the more fulfilling was the people overseeing my efforts. They actually approved of my studies. This motivated me to keep learning especially during the downtime.

In fact, I spent so much time beyond the weekly 10 hours learning how to program. I got to the point where I could develop a website from scratch. Unfortunately, the website my bosses had in mind for me to develop never surfaced. Other business concerns took priority.

I wrote multiple reports instead. They offered insight into the various cybersecurity workshops I attended. It turns out small businesses are very susceptible to cyber crime. The workshops discussed various methods to improve cybersecurity posture from a business standpoint.

Distilling workshop details into simple reports became my way of helping out. The reports were convenient for some of the other interns from my University's College of Business. I myself hailed from the College of Engineering.

Other than those reports, there was a whole lot of downtime. I dedicated every bit of it to learning Front End Development with ReactJS. My first exposure with React led to months of studying and practicing its core concepts.

Several months later, my first College semester was coming to an end alongside my first internship. It was time for Winter Break. With the skills developed during my internship, I built several websites. Each one was inspired by the [freecodecamp.com](https://www.freecodecamp.org) curriculum.

Moving past Winter break onto my next semester, I had a couple of finished websites to boost my resume with. These projects landed me my second internship going forward into the Summer. To be frank, I was extremely blessed to land this second internship. I daresay it was a miracle made possible through prayer, hard work, and the acknowledgement of a single recruiter.

The second internship was a level-up in experience and pay. The people, although completely unique from my first internship, were just as kind. This time around I got to work 40 hours a week at $15 per hour. Hallelujah!

With this second internship, I received my first taste of the real-world. I worked with two other senior-level developers on many different projects. Across many weeks, I learned so much from these two mentors not only in terms of technology, but also in regards to everyday life skills. I will cherish their compassion forever.

Simply put, internships are indescribably valuable.

## My Message to the Reader

If not successful at first, apply, apply, and apply again for internships. If you are not applying, then study something that interests you. If that means Web Development, learn JavaScript/HTML/CSS plus a server-side scripting language. If game development, jump straight into C#/Unity and build a basic game. If data visualization/analytics, download and try a business intelligence platform (QlikView, Tableau, etc), and maybe program some visualizations from scratch. If machines and hardware, learn Python or C++/C and make those robots do something!

All that said, try to keep some limits in mind. If I go anywhere past the 70-80 hours of weekly work/study, I start to lose track. I typically schedule 60-70 hours each week, most of which is unpaid. This explains my lack of income excluding periods of internship.

Besides programming, I still like to listen to my favorite shows, read, sleep, eat, and relax. I like planning out each day as a way of saying, "I am going to spend this much time programming and that much time doing everything else." This approach to scheduling is as flexible as it is productive.

Oh right, I almost forgot to mention College. College feels more like a resume booster than a skill booster for internships. My opinion may change over the course of next year. The first year of College tends to lack a lot of programming courses.

95% of the skills used in my previous two internships were self-taught. While College teaches some interesting stuff, most of it does not matter in the business world. Again, given another year I may completely change my mind. Regardless of my opinion, the Internet covers every bit of useful information. The only catch being you have to search for it. I suggest starting/continuing your journey [here](https://www.freecodecamp.org).

## Final Words of Advice

If you are graduating from high school and contemplating a Computer Science degree, go for it. You can earn the degree while self-teaching, which results in the best of both worlds. There is a good chance you will lose out on scholarships if you opt for coding bootcamp.

If you are switching careers, skip College for a coding bootcamp. You could also embark on the entirely self-taught route. Use the Internet and its free resources to their full potential.

Self-teach yourself as much as possible no matter what you decide. Teaching yourself new material will carry you through the rest of your career. Learning must ensue as technologies come-and-go.

In College, you should be perfecting your craft so that you can tackle the real world. I understand working retail/fast-food/server positions provide a solid source of income, but what if you could earn that same income while kick-starting your career?

Internships allow for that. I have no regrets about my past two internships. I hope to undertake several more. Nothing is ever guaranteed. Yet I take heart in curving the chances of failure with each passing hour of programming. You can do the same starting today.
`
});


/***/ }),

/***/ "./src/assets/articles/list/starting_a_blog.js":
/*!*****************************************************!*\
  !*** ./src/assets/articles/list/starting_a_blog.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  id: '1',
  topic: 'Life & Wellness',
  date: '08/13/2018',
  title: 'Starting a Blog',
  image: '../../assets/articles/images/stock_desert.jpg',
  content: `
Starting a Blog
===============
##### 08/13/2018

![Empty Desert](../../assets/articles/images/stock_desert.jpg)

### Introduction

Writing clarifies my thinking. My mind is a jumble of thoughts, fears, and ambitions lacking organization. Committing the jumble to paper helps me sort everything out. To that end, I am using a word processor in place of paper to produce this blog.

I know have an outlet for typing things down. Foregoing the pen and paper for keyboard and screen does not change much. The means are inconsequential to the act of writing. I will mostly refer to it as blog posting given the context of this website.

This blog website acts as a public display for my writing. Each post will derive from my own thoughts based on recent experiences. I will attempt to capture my opinions overtime. A mental timeline in the form of my blog will exist after a year or so. Each post would be representative of what I was thinking about during that time.

I cannot, on a weekly basis, type up every contemplation. That consumes too much time and sanity. I must isolate what I find most significant and type it into a single article. Repeat this process each week so that I fall into a consistent, productive rhythm.

Weekly articles forms part of this website's mission. Portfolio projects and resume building will carry on sporadically. Articles are something I can always guarantee. From my experience, each week always has something worth writing/typing about.

Excluding "Example Article", this marks my very first blog post. There is some risk to consider when committing to a weekly blog. I will encounter weeks that thinly spread my hours of productivity. The temptation to skip the blog for a week would arise. Personal self-discipline would determine whether I give in or push through.

Discipline is a career necessity. I need it for more than writing this blog. This blog serves to improve my self-discipline while constructing a mental timeline. Two birds one stone.

### My Corner of the Internet

In the Home introduction for this website, I mention "my corner of the internet". This phrase implies a small degree of freedom. With it I can add onto this website as preferred. Bare in mind, this makes me responsible for the website's success or failure. It can go either way and I only have myself to blame.

Hosting a single website is hardly worth priding in. The content I post on the website can change that. That said, I do intend to keep the scope of this website small. Posting thoughts, projects, and work-related documents defines its use-case.

I would like to see a crude user-login system so that people can interact with the website as themselves. These kinds of features are pending future development.

For the most part, I imagine this website as a notice board for sharing information relevant to me. Any project I invest massive amounts of time in would be a good example.

This website currently functions more as a resume than a public attraction. That will change with time. Humble beginnings for at least for the next several years.

With enough time, commitment, and development, this website will flourish. Improving my skills as a developer and writer comes first however. An old saying states 10,000 hours as the bare minimum in time spent. Thing is, writing and developing are separate processes. 20,000 hours sounds much more reasonable for my ambitions.

Development occurs per code-related projects and updating this blog. Posts will of course occur weekly. My goal for each article is ~1000 words, and those words must be meaningful without filler.

### Technologies Backing this Blog

This Website runs off of NodeJS and Express. I use Angular to streamline Front End development. A cloud-hosted MongoDB database saves persistent information like user comments and messages.

NodeJS is my strongest programming language. I have experience with Java/C++. It turns out these languages see a lot of use in formal schooling. Another nice thing about Node is JavaScript. Knowledge of Front End JavaScript translates well into Back End Node scripting.

My skills with React outweigh Angular. I built most of my hobby projects using React after all. I decided to try out Angular for this blog, and I must say, I enjoy the technology. I cannot say I like it more than React. Even so, Google successfully streamlined Front End development, workflow, and testing with Angular. The Front End framework has a bright future ahead of it. I will keep using it at least for this blog.

What about MongoDB? Why NoSQL over SQL? I have nothing against SQL tables. My first internship had me formatting data into excel tables. These tables were then loaded by SQL scripts.

MongoDB meshes nicely with Node and Angular. Hence why the MEAN (MongoDB, Express, Angular, and Node) stack exists. The format of NoSQL is JavaScript Object Notation (JSON). JSON syntax mirrors that of Node's Objects.

A native library of JSON methods installs with Node. These are the same methods available in traditional Front End JavaScript. The two most famous of the bunch being JSON.stringify(...) and JSON.parse(...).

The best-case scenario for MongoDB would have been as an in-memory database. Though implementable, it would have been a hassle to setup.

I cycle this application between two separate machines. A cloud-based solution lets this web application connect regardless of the file-system. It benefits convenience. This is another aspect that will likely change in future development cycles.

### Author and Developer

Let me start this section by saying that I lack the qualifications of a real author and developer. In 20,000 hours that may change. Author and developer is a title I wish to earn with enough hard work translating into ~20,000 hours. Projects like this blog form the beginning of my 20,000 hour journey.

Chasing these long-term goals involves many short-term objectives. Week-by-week I need to set my sights on getting things done. Accomplishments by which to measure progress help maintain motivation. Momentum is key and that means keeping the ball rolling.

These past couple days exemplify lost motivation. I literally fell flat on my face trying to get the ball rolling yesterday (imagine a head hitting a table). Today has gone much better, but I still feel guilty for days like yesterday where I fail. Those days happen every know and then when pursuing mastery.

Writing down a list of objectives makes getting started for the day easier. Planning out what to do before proceeding alleviates so much frustration.

I take solace in the process: start, struggle, progress, and stop. Over many days it evolves into trusting the process altogether. I do not want to undermine all my efforts up until now by compromising trust. Mistakes are just as inevitable as triumphs. Sticking it out through the mistakes requires trusting/believing in myself.

### Conclusion

Thank you for reading through this first installment to my blog. I will work hard to improve these articles each week.

Come back next week where I will talk about internships. I have participated in two separate internships over the past year. Each one proved a distinct experience in both co-worker morale and office workload.

For stories to read up on and tips to take advantage of for internships, come back next Monday!
`
});


/***/ }),

/***/ "./src/assets/articles/list/teaching_assistant.js":
/*!********************************************************!*\
  !*** ./src/assets/articles/list/teaching_assistant.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    id: '4',
    topic: 'Technology & Education',
    date: '09/03/2018',
    title: 'Teaching Assistant',
    image: '../../assets/articles/images/stock_book_study.jpg',
    content: `
Teaching Assistant
==================
##### 09/03/2018

![Default Picture](../../assets/articles/images/stock_book_study.jpg)

From my perspective as a student, the classroom is no big deal. When asked to teach, the classroom becomes something else. My perspective shifts to teacher. I have to be more involved than ever before if I want the class to succeed.

The class does not succeed without enough engagement. I believe classroom success corresponds the level of student engagement. So, I want every student involved throughout the duration of the class. I am not alone in this desire. Me and my assigned partner must work together to engage the students.

It helps to have a plan going into the classroom. The plan is simple, and it includes frequent interaction with the class. At the start of class, the students must quiet down, acknowledge their goal, and listen to further instructions. After that, it is a matter of us, the instructors, looking as bored as possible.

Of course, looks can be deceiving. I was advised, "looking bored leads to more questions". Based off last week's class, this advice is true. Students asked many questions as me and my partner patrolled the classroom. Looks of sheer boredom seemed to motivate students to pull us aside and ask away.

Answering people's questions was the most fulfilling part of teaching class. It was my first time teaching a class so I had no idea of its satisfaction. Feigning boredom is a small price to pay for such satisfaction.

The hardest part was moments before the start of class. Everything up until the last minute was going wrong. I remember how desperate I was to get the projector working by the beginning of class. I was up-and-running two minutes after the fact. I was lucky to find someone next-door who knew how to fix the projector.

The rest of the class went very smoothly. The class moved from introductions to the end of class without issue. Granted, the first class is always the easiest in terms of coursework. I guess the true test of a class' mettle arises as assignments grow in complexity. I assume student perseverance plus instructor competence will determine the class' effectiveness.

I say "I assume" and "I guess" to communicate my lack of experience. Last week was only one of many classes to come. I hope to witness lots of student success. I am responsible for part of that success moving forward.

The students showed many positive signs and habits in class. They were a little rowdy at first. They quickly settled down when I asked their attention. This makes me optimistic for the students' future. They can focus, work together, and produce results. Most of the class finished their assignments by the ending of class. Those who did not finish were just as admirable.

Another mistake I made: misplacing the instructions provided by the supervising professor. I had a decent memory of most of the instructions, but there were a couple things I forgot to go over in class. Thankfully, my class uses Piazza as a social forum for facilitating class communication. Students can answer each others questions on Piazza. Instructors can also answer questions and make general announcements. I used Piazza this past week to notify students of details I missed mentioning in class.

Another nice thing about teaching is the pay. The opportunity to earn money while sharing my passion for technology is a blessing. I only work 15-20 hours a week too. This leaves me with enough time to tackle my classes plus a few other obligations.

Granted, pay is definitely not the main motivation. I worked in a grocery store long enough to appreciate the importance of relevant work experience. For anyone considering a teacher assistant position, remember that teaching is one of the most sought after skills. Learning is good but teaching assures a thorough understanding of the material. No one wants to teach nonsense.

Alright, that is it for this week. I wish I had more to say on the matter. I think I will revisit the subject following the semester's conclusion. For now, it is time to circle back to the Life & Wellness category. I will write about some of my life habits next week. I consider some habits worthwhile to succeed while others not-so-much. Come back next week to find out more!
`
});


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



// production only
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Workshop\jgsimmons.me\development\angular-src\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map