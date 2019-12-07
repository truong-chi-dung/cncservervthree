(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loginService.isUserLoggedIn()\" class=\"container\">\r\n    <app-update-device></app-update-device>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <app-devices-card></app-devices-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/devices-card/devices-card.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/devices-card/devices-card.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div *ngFor=\"let device of devices\" class=\"col-sm-4 col-md-3 col-lg-2 mt-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header unavailable\"\r\n                *ngIf=\"device.currentOperationStatus=='UNAVAILABLE' || device.currentOperationStatus===null\">\r\n                {{device.description.manufacturer}} (L{{device.description.model}}) - DISCONNECTED</div>\r\n            <div class=\"card-header active\"\r\n                *ngIf=\"device.currentOperationStatus=='ACTIVE' || device.currentOperationStatus=='READY'\">\r\n                {{device.description.manufacturer}} (L{{device.description.model}}) - RUNNING</div>\r\n            <div class=\"card-header warning\"\r\n                *ngIf=\"device.currentOperationStatus=='STOPPED' && device.emgStop!='TRIGGERED' || device.currentOperationStatus=='INTERRUPTED' && device.emgStop!='TRIGGERED'\">\r\n                {{device.description.manufacturer}} (L{{device.description.model}}) - PAUSED</div>\r\n            <div class=\"card-header emg\" *ngIf=\"device.emgStop=='TRIGGERED'\">\r\n                {{device.description.manufacturer}} (L{{device.description.model}}) - EMG STOPPED</div>\r\n            <div>\r\n                <div class=\"panel-body\">Parts No: {{device.partNo}}</div>\r\n                <div class=\"panel-body\">Part: {{device.currentPartsCount}} | Total target: {{device.prodTarget}}</div>\r\n                <div class=\"panel-body font-weight-bold successText\"\r\n                    *ngIf=\"(device.currentPartsCount/((device.prodTarget/12)*timeIndex))>=1\">\r\n                    Productivity/hour (%):\r\n                    {{(device.currentPartsCount/((device.prodTarget/12)*timeIndex))*100|number:'3.0-0'}}</div>\r\n                <div class=\"panel-body font-weight-bold emgText\"\r\n                    *ngIf=\"(device.currentPartsCount/((device.prodTarget/12)*timeIndex))<0.8\">\r\n                    Productivity/hour (%):\r\n                    {{(device.currentPartsCount/((device.prodTarget/12)*timeIndex))*100|number:'3.0-0'}}</div>\r\n                <div class=\"panel-body font-weight-bold\"\r\n                    *ngIf=\"0.8<(device.currentPartsCount/((device.prodTarget/12)*timeIndex)) && (device.currentPartsCount/((device.prodTarget/12)*timeIndex))<1\">\r\n                    Productivity/hour (%):\r\n                    {{(device.currentPartsCount/((device.prodTarget/12)*timeIndex))*100|number:'3.0-0'}}</div>\r\n            </div>\r\n            <a [routerLink]=\"['/detail/', device.id]\" class=\"stretched-link\"></a>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/update-device/update-device.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/update-device/update-device.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mt-3\">\r\n    <div class=\"col\">\r\n        <!-- <button type=\"button\" class=\"btn btn-success ml-3\" (click)=\"createDevices()\">Create devices</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteDevices()\">Delete devices</button> -->\r\n        <button type=\"button\" class=\"btn btn-info ml-3\" (click)=\"updateDevices()\">Update devices</button>\r\n        <button type=\"button\" class=\"btn btn-success ml-3\" (click)=\"exportCsv()\">Export CSV</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <app-part-count-monitor></app-part-count-monitor>\r\n    <div class=\"row mt-3\" *ngIf=\"loginService.isUserLoggedIn()\">\r\n        <div class=\"col\">\r\n            <h5>Edit</h5>\r\n            <p>\r\n                <a [routerLink]=\"['./']\">Hide</a> |\r\n                <a [routerLink]=\"['./edit']\">Show</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/edit-detail/edit-detail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/edit-detail/edit-detail.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"mt-3\" #machineForm=\"ngForm\" *ngIf=\"device\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"machineName\">Machine Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"machineName\" [(ngModel)]=\"device.description.manufacturer\"\n            name=\"machineName\" #machineName=\"ngModel\" required>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lineNo\">Line No</label>\n        <input type=\"text\" class=\"form-control\" id=\"lineNo\" [(ngModel)]=\"device.description.model\" name=\"lineNo\"\n            required>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"partNo\">Part No</label>\n        <input type=\"text\" class=\"form-control\" id=\"partNo\" [(ngModel)]=\"device.partNo\" name=\"partNo\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"prodTarget\">Target (12h)</label>\n        <input type=\"text\" class=\"form-control\" id=\"prodTarget\" [(ngModel)]=\"device.prodTarget\" name=\"prodTarget\"\n            pattern=\"[0-9]{1,10}\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success mb-3\" [disabled]=\"machineForm.invalid\">Submit</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/part-count-monitor/part-count-monitor.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/part-count-monitor/part-count-monitor.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mt-3\">\r\n    <div class=\"col\">\r\n        <form class=\"form-inline ml-3\">\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"date\" ngbDatepicker\r\n                        #d=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col\">\r\n        <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"shift\">\r\n            <label ngbButtonLabel class=\"btn-secondary\">\r\n                <input ngbButton type=\"radio\" [value]=\"0\"> All\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn-secondary\">\r\n                <input ngbButton type=\"radio\" [value]=\"1\"> 1st shift\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn-secondary\">\r\n                <input ngbButton type=\"radio\" [value]=\"2\"> 2nd shift\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn-secondary\">\r\n                <input ngbButton type=\"radio\" [value]=\"3\"> 3rd shift\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class=\"col\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateData()\">Change</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n    <img src=\"../../assets/brand/1024px-Nidec_company_logo.png\" height=\"20\" alt=\"Nidec logo\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" routerLink=\"dashboard\">Dashboard</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!loginService.isUserLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" routerLink=\"login\">Login</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.isUserLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" routerLink=\"logout\">Logout</a>\n            </li>\n        </ul>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title text-center\">Login</h3>\n                <form class=\"form-signin\">\n                    <div class=\"form-label-group\">\n                        <input type=\"text\" id=\"inputId\" class=\"form-control\" placeholder=\"ID\" required\n                            [(ngModel)]=\"username\" name=\"inputId\" autofocus>\n                    </div>\n                    <br>\n                    <div class=\"form-label-group\">\n                        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\"\n                            [(ngModel)]=\"password\" name=\"inputPassword\" required>\n                    </div>\n                    <br>\n                    <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" (click)=\"checkLogin()\"\n                        type=\"submit\">Login</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/@service/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/@service/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/@service/authentication.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivateChild(childRoute, state) {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/@service/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@service/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthenticationService = class AuthenticationService {
    constructor() { }
    authenticate(username, password) {
        if (username === "admin" && password === "iotsystem") {
            sessionStorage.setItem('username', username);
            return true;
        }
        else {
            return false;
        }
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        // console.log(!(user === null));
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('username');
    }
};
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/@service/device.service.ts":
/*!********************************************!*\
  !*** ./src/app/@service/device.service.ts ***!
  \********************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DeviceService = class DeviceService {
    constructor(http) {
        this.http = http;
        // getDevicesUrl = 'http://localhost:8080/api/devices/';
        this.getDevicesUrl = '/api/devices/';
    }
    getDevices(ipPort) {
        // return this.http.get<Device[]>(this.getDevicesUrl);
        return this.http.get(ipPort + this.getDevicesUrl);
    }
    getDevice(ipPort, id) {
        // return this.http.get<Device>(this.getDevicesUrl + id);
        return this.http.get(ipPort + this.getDevicesUrl + id);
    }
    // deleteDevices(): Observable<Device[]> {
    //   console.log(this.getDevicesUrl + 'delete');
    //   return this.http.get<Device[]>(this.getDevicesUrl + 'delete');
    // }
    // createDevices(): Observable<Device[]> {
    //   console.log(this.getDevicesUrl + 'create');
    //   return this.http.get<Device[]>(this.getDevicesUrl + 'create');
    // }
    deleteDevice(ipPort) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(ipPort + this.getDevicesUrl + 'delete');
            return this.http.get(ipPort + this.getDevicesUrl + 'delete').toPromise();
        });
    }
    updateDevice(ipPort, id, deviceInfo) {
        let url = `${ipPort}/api/devices/update/${id}`;
        console.log(deviceInfo);
        return this.http.put(url, deviceInfo);
    }
    createDevices(ipPort) {
        console.log(ipPort + this.getDevicesUrl + 'create');
        return this.http.get(ipPort + this.getDevicesUrl + 'create');
    }
    exportCsv(ipPort) {
        console.log(ipPort + this.getDevicesUrl + 'csv');
        window.open(ipPort + this.getDevicesUrl + 'csv', "_blank");
    }
};
DeviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DeviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DeviceService);



/***/ }),

/***/ "./src/app/@service/partcount.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@service/partcount.service.ts ***!
  \***********************************************/
/*! exports provided: PartcountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartcountService", function() { return PartcountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PartcountService = class PartcountService {
    constructor(http) {
        this.http = http;
        // getPartCountUrl = 'http://localhost:8080/streams/partcount/period/';
        // getPartCountUrl = HostAddress.API_ENDPOINT + 'streams/partcount/period/';
        this.getPartCountUrl = '/api/streams/partcount/period/';
    }
    // getPartCountUrl = ':8080/api/streams/partcount/period/';
    getPartCountByDeviceId(ipPort, id) {
        return this.http.get(ipPort + this.getPartCountUrl + id);
    }
    getPartCountByDeviceIdAndPeriod(ipPort, id, shift, startTime, endTime) {
        console.log(ipPort + this.getPartCountUrl + id + '?startTime=' + startTime + '&endTime=' + endTime + '&shift=' + shift);
        return this.http.get(ipPort + this.getPartCountUrl + id + '?startTime=' + startTime + '&endTime=' + endTime + '&shift=' + shift);
    }
};
PartcountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PartcountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PartcountService);



/***/ }),

/***/ "./src/app/@service/refresh.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@service/refresh.service.ts ***!
  \*********************************************/
/*! exports provided: RefreshService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshService", function() { return RefreshService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var RefreshService_1;




let RefreshService = RefreshService_1 = class RefreshService {
    constructor() { }
    setInterval(newInterval) {
        RefreshService_1.interval$.next(newInterval);
    }
    withRefresh() {
        return RefreshService_1.interval$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((int) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(int, int)));
    }
};
RefreshService.interval$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](2000);
RefreshService = RefreshService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], RefreshService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _detail_edit_detail_edit_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/edit-detail/edit-detail.component */ "./src/app/detail/edit-detail/edit-detail.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@service/auth-guard.service */ "./src/app/@service/auth-guard.service.ts");









const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] },
    {
        path: 'detail/:id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"],
        canActivateChild: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]],
        children: [
            { path: 'edit', component: _detail_edit_detail_edit_detail_component__WEBPACK_IMPORTED_MODULE_6__["EditDetailComponent"] }
        ]
    },
    { path: 'detail/:id/:startTime/:endTime/:shift', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'iot-angular-v-six';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _detail_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.module */ "./src/app/detail/detail.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"],
            _detail_detail_module__WEBPACK_IMPORTED_MODULE_9__["DetailModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@service/authentication.service */ "./src/app/@service/authentication.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _devices_card_devices_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devices-card/devices-card.component */ "./src/app/dashboard/devices-card/devices-card.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_device_update_device_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-device/update-device.component */ "./src/app/dashboard/update-device/update-device.component.ts");







let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            _devices_card_devices_card_component__WEBPACK_IMPORTED_MODULE_4__["DevicesCardComponent"], _update_device_update_device_component__WEBPACK_IMPORTED_MODULE_6__["UpdateDeviceComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/dashboard/devices-card/devices-card.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/devices-card/devices-card.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    box-sizing: border-box;\r\n}\r\n\r\n.row{\r\n    margin: 20px 0px;\r\n}\r\n\r\n.card{\r\n    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), \r\n    0 1px 1px 0 rgba(0,0,0,.14), \r\n    0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nul{\r\n    padding: 0px;\r\n}\r\n\r\nli{\r\n    padding-left: 20px;\r\n    list-style: none;\r\n}\r\n\r\n.card-header{\r\n    padding: 7px;\r\n    border: 1px solid rgba(0,0,0,0.125);\r\n}\r\n\r\n.panel-body{\r\n    padding: 7px;\r\n    border-bottom: 1px solid rgba(0,0,0,0.125);\r\n}\r\n\r\n.emgText{\r\n    color: red;\r\n}\r\n\r\n.successText{\r\n    color: #00cc00;\r\n}\r\n\r\n.panel-body:last-child{\r\n    border-bottom: none;\r\n}\r\n\r\n.unavailable {\r\n    background: #e0e0e0;\r\n}\r\n\r\n.active {\r\n    background: #00ff00;\r\n}\r\n\r\n.warning {\r\n    background: #ffff00;\r\n\r\n}\r\n\r\n.emg {\r\n    background: #ff0000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2RldmljZXMtY2FyZC9kZXZpY2VzLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJOzsrQkFFMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kZXZpY2VzLWNhcmQvZGV2aWNlcy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnJvd3tcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIFxyXG4gICAgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCBcclxuICAgIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxudWx7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVye1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEyNSk7XHJcbn1cclxuXHJcbi5wYW5lbC1ib2R5e1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xMjUpO1xyXG59XHJcblxyXG4uZW1nVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zdWNjZXNzVGV4dHtcclxuICAgIGNvbG9yOiAjMDBjYzAwO1xyXG59XHJcblxyXG4ucGFuZWwtYm9keTpsYXN0LWNoaWxke1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnVuYXZhaWxhYmxlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzAwZmYwMDtcclxufVxyXG5cclxuLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcclxuXHJcbn1cclxuXHJcbi5lbWcge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/devices-card/devices-card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/devices-card/devices-card.component.ts ***!
  \******************************************************************/
/*! exports provided: DevicesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesCardComponent", function() { return DevicesCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@service/device.service */ "./src/app/@service/device.service.ts");
/* harmony import */ var src_app_service_refresh_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@service/refresh.service */ "./src/app/@service/refresh.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DevicesCardComponent = class DevicesCardComponent {
    // private ip = 'http://localhost:8080';
    constructor(deviceService, refreshService) {
        this.deviceService = deviceService;
        this.refreshService = refreshService;
        this.alive = true;
        this.speedVal = 5000;
        this.mockCurPart = 50;
        // .origin this will give you the ip:port, .hostname for ip
        // private ip = window.location.hostname;
        this.ip = window.location.origin;
        this.curHour = new Date();
        this.timeIndex = this.getTimeIndex(this.curHour.getHours());
    }
    ngOnInit() {
        this.deviceService.getDevices(this.ip)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(() => this.alive))
            .subscribe(devices => this.devices = devices);
        this.updateDeviceStatus();
        setInterval(() => {
            this.curHour = new Date();
            this.timeIndex = this.getTimeIndex(this.curHour.getHours());
        }, 3600 * 1000);
    }
    updateDeviceStatus() {
        this.timeRefreshSubscription = this.refreshService.withRefresh()
            .subscribe(() => {
            this.deviceService.getDevices(this.ip)
                .subscribe((data) => {
                console.log(this.speedVal);
                this.devices = data;
            });
        });
    }
    ngOnDestroy() {
        this.alive = false;
        this.timeRefreshSubscription.unsubscribe();
    }
    getTimeIndex(twentyFourHour) {
        if (6 <= twentyFourHour && twentyFourHour <= 17) {
            return twentyFourHour - 5;
        }
        else if (twentyFourHour < 6) {
            return twentyFourHour + 7;
        }
        else {
            return twentyFourHour - 17;
        }
    }
};
DevicesCardComponent.ctorParameters = () => [
    { type: src_app_service_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] },
    { type: src_app_service_refresh_service__WEBPACK_IMPORTED_MODULE_3__["RefreshService"] }
];
DevicesCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-devices-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./devices-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/devices-card/devices-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./devices-card.component.css */ "./src/app/dashboard/devices-card/devices-card.component.css")).default]
    })
], DevicesCardComponent);



/***/ }),

/***/ "./src/app/dashboard/update-device/update-device.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/update-device/update-device.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC91cGRhdGUtZGV2aWNlL3VwZGF0ZS1kZXZpY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/update-device/update-device.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/update-device/update-device.component.ts ***!
  \********************************************************************/
/*! exports provided: UpdateDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDeviceComponent", function() { return UpdateDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@service/device.service */ "./src/app/@service/device.service.ts");



let UpdateDeviceComponent = class UpdateDeviceComponent {
    constructor(deviceService) {
        this.deviceService = deviceService;
        // .origin this will give you the ip:port, .hostname for ip
        // private ip = window.location.hostname;
        this.ip = window.location.origin;
    }
    ngOnInit() {
    }
    // createDevices() {
    //   this.deviceService.createDevices().subscribe();
    // }
    // deleteDevices() {
    //   this.deviceService.deleteDevices().subscribe();
    // }
    updateDevices() {
        console.log(this.ip);
        this.deviceService.deleteDevice(this.ip).then(() => this.deviceService.createDevices(this.ip).subscribe());
    }
    exportCsv() {
        this.deviceService.exportCsv(this.ip);
    }
};
UpdateDeviceComponent.ctorParameters = () => [
    { type: src_app_service_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] }
];
UpdateDeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-device',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-device.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/update-device/update-device.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-device.component.css */ "./src/app/dashboard/update-device/update-device.component.css")).default]
    })
], UpdateDeviceComponent);



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@service/authentication.service */ "./src/app/@service/authentication.service.ts");



let DetailComponent = class DetailComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
    }
};
DetailComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")).default]
    })
], DetailComponent);



/***/ }),

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return DetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _part_count_monitor_part_count_monitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./part-count-monitor/part-count-monitor.component */ "./src/app/detail/part-count-monitor/part-count-monitor.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _edit_detail_edit_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-detail/edit-detail.component */ "./src/app/detail/edit-detail/edit-detail.component.ts");










let DetailModule = class DetailModule {
};
DetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
            _part_count_monitor_part_count_monitor_component__WEBPACK_IMPORTED_MODULE_4__["PartCountMonitorComponent"],
            _edit_detail_edit_detail_component__WEBPACK_IMPORTED_MODULE_9__["EditDetailComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"]
        ]
    })
], DetailModule);



/***/ }),

/***/ "./src/app/detail/edit-detail/edit-detail.component.css":
/*!**************************************************************!*\
  !*** ./src/app/detail/edit-detail/edit-detail.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9lZGl0LWRldGFpbC9lZGl0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/detail/edit-detail/edit-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/detail/edit-detail/edit-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: EditDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetailComponent", function() { return EditDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@service/device.service */ "./src/app/@service/device.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EditDetailComponent = class EditDetailComponent {
    constructor(route, deviceService, router) {
        this.route = route;
        this.deviceService = deviceService;
        this.router = router;
        // .origin this will give you the ip:port, hostname for ip
        // private ip = window.location.hostname;
        this.ip = window.location.origin;
    }
    ngOnInit() {
        this.deviceService.getDevice(this.ip, this.route.snapshot.parent.params.id)
            .subscribe(device => this.device = device);
    }
    onSubmit() {
        console.log("PUT");
        this.deviceService.updateDevice(this.ip, this.route.snapshot.parent.params.id, this.device).toPromise().then(() => this.router.navigate(['']));
    }
};
EditDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_service_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/edit-detail/edit-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-detail.component.css */ "./src/app/detail/edit-detail/edit-detail.component.css")).default]
    })
], EditDetailComponent);



/***/ }),

/***/ "./src/app/detail/part-count-monitor/part-count-monitor.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/detail/part-count-monitor/part-count-monitor.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.calendar, button.calendar:active {\r\n    width: 2.75rem;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;\r\n    background-repeat: no-repeat;\r\n    background-size: 23px;\r\n    background-position: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL3BhcnQtY291bnQtbW9uaXRvci9wYXJ0LWNvdW50LW1vbml0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwwbEJBQTBsQjtJQUMxbEIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwvcGFydC1jb3VudC1tb25pdG9yL3BhcnQtY291bnQtbW9uaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmNhbGVuZGFyLCBidXR0b24uY2FsZW5kYXI6YWN0aXZlIHtcclxuICAgIHdpZHRoOiAyLjc1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQWNDQVlBQUFBRU4yMGZBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc09Hd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFFVVNVUkJWRWlKN1pReFRvVkFFSVkvWUNIR3hONlhHT0lwbnBhRXNCU2VRQzlBclpibTlUWjZBRHlCTnpBaFFHR2w4Uml2NEJMQVdBZ21rcEJZa0gxYjhGV1QyV0sveko4Wko0cWlJNlhVSTNBTm5HS1dCbmh0Mi9aQkRSSzNoZ1ZHTnNDZDcvdWkrSmtFSXJLdHF1ckxwRVdhcGhkOTMzK0l5STNMRUlkcENZQ2lLRDZIY3VPYS9ud09hMFNjSkVuazBCSmcwVVRVV0pSbDZSeENZRXpFbW9tc0lsUFUzSVBXK2dySUFicXV5K3E2Zmx1eS8yOFJJQmVSTXdEWGRYTWdYTGovQjJ1aW1SWHB1aTREOXNCZVJMS2wrMU4rTCt0NlJ3YldyWmxpVFRUcjFveFl0elZXaVRRQWNSeHZUWCtlSk1ubFVEYU8xdnBaUk81TlMweDQ4c0l3ZlBjODd4ZzRCMDRNQ3pRaThoSUV3ZTRibDFEbkZNQ04yenNBQUFBQVNVVk9SSzVDWUlJPScpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/detail/part-count-monitor/part-count-monitor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/detail/part-count-monitor/part-count-monitor.component.ts ***!
  \***************************************************************************/
/*! exports provided: PartCountMonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartCountMonitorComponent", function() { return PartCountMonitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_partcount_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@service/partcount.service */ "./src/app/@service/partcount.service.ts");




let PartCountMonitorComponent = class PartCountMonitorComponent {
    constructor(route, partcountService) {
        this.route = route;
        this.partcountService = partcountService;
        this.currentDate = new Date();
        this.shift = "0";
        this.date = { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth() + 1, day: this.currentDate.getDate() };
        // .origin this will give you the ip:port, hostname for ip
        // private ip = window.location.hostname;
        this.ip = window.location.origin;
        // private ip = 'http://localhost:8080';
        this.settings = {
            actions: false,
            columns: {
                partCount: {
                    title: 'Part Count'
                },
                timeStamp: {
                    title: 'Time'
                },
                shift: {
                    title: 'Shift'
                }
            }
        };
    }
    ngOnInit() {
        if (this.route.snapshot.params.startTime != null && this.route.snapshot.params.endTime != null) {
            this.partcountService.getPartCountByDeviceIdAndPeriod(this.ip, this.route.snapshot.params.id, this.route.snapshot.params.shift, this.route.snapshot.params.startTime, this.route.snapshot.params.endTime)
                .subscribe(partCountByDeviceId => {
                this.data = partCountByDeviceId;
                this.data.map(partCountsElement => {
                    partCountsElement.timeStamp = new Date(parseInt(partCountsElement.id.toString().substring(0, 8), 16) * 1000).toString().substring(0, 24);
                });
            });
        }
        else {
            console.log(this.route.snapshot.params.id);
            this.partcountService.getPartCountByDeviceId(this.ip, this.route.snapshot.params.id)
                .subscribe(partCountByDeviceId => {
                this.data = partCountByDeviceId;
                this.data.map(partCountsElement => {
                    partCountsElement.timeStamp = new Date(parseInt(partCountsElement.id.toString().substring(0, 8), 16) * 1000).toString().substring(0, 24);
                });
            });
        }
    }
    updateData() {
        console.log(this.shift);
        if (this.shift == '3') {
            let startTime = this.date.year + "-" + this.date.month + "-" + this.date.day;
            let endTime = this.date.year + "-" + this.date.month + "-" + (this.date.day + 1).toString();
            this.partcountService.getPartCountByDeviceIdAndPeriod(this.ip, this.route.snapshot.params.id, this.shift, startTime, endTime)
                .subscribe(partCountByDeviceId => {
                this.data = partCountByDeviceId;
                this.data.map(partCountsElement => {
                    partCountsElement.timeStamp = new Date(parseInt(partCountsElement.id.toString().substring(0, 8), 16) * 1000).toString().substring(0, 24);
                });
            });
        }
        else {
            let startTime = this.date.year + "-" + this.date.month + "-" + this.date.day;
            let endTime = this.date.year + "-" + this.date.month + "-" + this.date.day;
            this.partcountService.getPartCountByDeviceIdAndPeriod(this.ip, this.route.snapshot.params.id, this.shift, startTime, endTime)
                .subscribe(partCountByDeviceId => {
                this.data = partCountByDeviceId;
                this.data.map(partCountsElement => {
                    partCountsElement.timeStamp = new Date(parseInt(partCountsElement.id.toString().substring(0, 8), 16) * 1000).toString().substring(0, 24);
                });
            });
        }
    }
};
PartCountMonitorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_partcount_service__WEBPACK_IMPORTED_MODULE_3__["PartcountService"] }
];
PartCountMonitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-part-count-monitor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./part-count-monitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/part-count-monitor/part-count-monitor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./part-count-monitor.component.css */ "./src/app/detail/part-count-monitor/part-count-monitor.component.css")).default]
    })
], PartCountMonitorComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@service/authentication.service */ "./src/app/@service/authentication.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.isUserLoggedIn = false;
    }
    ngOnInit() {
        this.isUserLoggedIn = this.loginService.isUserLoggedIn();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@service/authentication.service */ "./src/app/@service/authentication.service.ts");




let LoginComponent = class LoginComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.invalidLogin = false;
    }
    ngOnInit() {
    }
    checkLogin() {
        if (this.loginService.authenticate(this.username, this.password)) {
            this.router.navigate(['']);
            this.invalidLogin = false;
        }
        else {
            this.invalidLogin = true;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@service/authentication.service */ "./src/app/@service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LogoutComponent = class LogoutComponent {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    ngOnInit() {
        this.authenticationService.logOut();
        this.router.navigate(['login']);
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")).default]
    })
], LogoutComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Project\Angular\iot-angular-v-six\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map