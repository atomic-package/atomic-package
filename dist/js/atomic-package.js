(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-core"] = factory();
	else
		root["ap-core"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-dropdown"] = factory();
	else
		root["ap-dropdown"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-common"] = factory();
	else
		root["ap-common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.isArray = function (data) {
        return Array.isArray(data) || typeof data !== 'object' && /^\[(\d|[^[|,])/.test(data);
    };
    Model.isObject = function (data) {
        var type = typeof data;
        return type === 'function' || type === 'object' && !!data;
    };
    Model.getSearchItems = function (dataList, type) {
        if (!type)
            return;
        var key = Object.keys(type)[0];
        if (type === 'all') {
            return dataList;
        }
        else {
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        }
    };
    Model.stringToNumber = function (data) {
        if (parseInt(data, 10) && /^\d|(^\-)/.test(data)) {
            return parseInt(data, 10);
        }
        else {
            return data;
        }
    };
    Model.stringToObjectCheck = function (data) {
        return /{.*:.*}/.test(data);
    };
    Model.stringToJson = function (data) {
        return JSON.parse(data
            .replace(/([\$\w]+)\s*:/g, function (_, $1) { return '"' + $1 + '":'; })
            .replace(/'([^']+)'/g, function (_, $1) { return '"' + $1 + '"'; }));
    };
    Model.stringToArray = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            var splitList = data.replace(/^\[/g, '').replace(/\s+/g, '').replace(/\]$/g, '').split(","), newSplitList_1 = [];
            if (this.stringToObjectCheck(splitList)) {
                splitList.forEach(function (item) {
                    if (_this.stringToObjectCheck(item)) {
                        newSplitList_1.push(_this.stringToJson(item.trim()));
                    }
                    else {
                        newSplitList_1.push(_this.stringToNumber(item));
                    }
                });
                return newSplitList_1;
            }
            else {
                splitList.forEach(function (item) {
                    newSplitList_1.push(_this.stringToNumber(item));
                });
                return newSplitList_1;
            }
        }
        else {
            return data;
        }
    };
    Model.checkType = function (data) {
        switch (typeof data) {
            case 'object':
                return data;
            case 'number':
                return { id: data };
            case 'string':
                if (/^#/.test(data)) {
                    return { idName: data.substr(1) };
                }
                else if (/^\./.test(data)) {
                    return { className: data.substr(1) };
                }
                else if (/all/gi.test(data)) {
                    return 'all';
                }
                else if (this.stringToNumber(data)) {
                    return { id: data };
                }
                break;
        }
    };
    Model.search = function (dataList, type) {
        var _this = this;
        if (this.isArray(type)) {
            var keys_1 = [], searchItems_1 = [], resultItem_1 = [];
            this.stringToArray(type).forEach(function (item) {
                keys_1.push(_this.checkType(item));
            });
            keys_1.forEach(function (key) {
                searchItems_1 = _this.getSearchItems(dataList, key);
                searchItems_1.forEach(function (item) {
                    resultItem_1.push(item);
                });
            });
            return resultItem_1;
        }
        else {
            return this.getSearchItems(dataList, this.checkType(type));
        }
    };
    Model.uniq = function (stringArr) {
        var newArr = stringArr.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return newArr;
    };
    Model.flattenArray = function (array) {
        return [].concat.apply(array);
    };
    Model.createTriggerModel = function (triggerView, triggerClass) {
        var triggerList = [];
        triggerView.forEach(function (trigger) {
            triggerList.push(triggerClass.fromData(trigger));
        });
        return triggerList;
    };
    Model.createTargetModel = function (targetView, targetClass) {
        var targetList = [];
        targetView.forEach(function (target) {
            targetList.push(targetClass.fromData(target));
        });
        return targetList;
    };
    Model.setTriggerTargetId = function (triggerList, targetList) {
        for (var i = 0; i < triggerList.length; i++) {
            triggerList[i].setTargetId(targetList);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var View = (function () {
    function View() {
    }
    View.getFirstChildLastNode = function (child) {
        if (child.children.length > 0) {
            return this.getFirstChildLastNode(child.children[0]);
        }
        else {
            return child;
        }
    };
    View.createFromTriggerElement = function (selectors, trigger) {
        var triggerList = [], triggerViewList = [];
        selectors.forEach(function (selector) {
            triggerList.push(document.querySelectorAll(selector));
        });
        triggerList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                triggerViewList.push(trigger.fromData(nodeList[i]));
            }
        });
        return triggerViewList;
    };
    View.createTargetView = function (triggerList, target) {
        var selectors = this.getTargetSelectors(triggerList), targetNodeList = this.getTargetNodeList(selectors), createTargetList = this.createFromTargetsElement(targetNodeList, target);
        return this.getTargetViewList(createTargetList);
    };
    View.getTargetSelectors = function (triggerList) {
        var selectors = [];
        triggerList.forEach(function (trigger) {
            if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        return _1.default.uniq(selectors);
    };
    View.getTargetNodeList = function (selectors) {
        var targetNodeList = [];
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] !== "all") {
                targetNodeList.push(document.querySelectorAll(selectors[i]));
            }
        }
        return targetNodeList;
    };
    View.createFromTargetsElement = function (targetList, target) {
        var targetViewList = [];
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(target.fromData({ node: nodeList[i] }));
            }
        });
        return targetViewList;
    };
    View.getTargetViewList = function (createTargetList) {
        var targetViewList = [];
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(0);
var _2 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
if (true) {
    module.exports.Model = _1.default;
    module.exports.View = _2.default;
    module.exports.Target = index_1.Target;
    module.exports.Trigger = index_1.Trigger;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.model === 'undefined') {
        Object.assign(global.AP.common, { model: _1.default });
    }
    if (typeof global.AP.common.view === 'undefined') {
        Object.assign(global.AP.common, { view: _2.default });
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_target_num = 0;
var Target = (function () {
    function Target(id, idName, className, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_target_num;
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.callBackFunction = function () { };
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getItemNode = function () {
        return this.node;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_dropdown_target_num = 0;
var Target = (function () {
    function Target(id, triggerId, idName, className, node) {
        this.id = id;
        this.triggerId = triggerId;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.triggerId ? data.triggerId : null, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_dropdown_target_num;
    };
    Target.prototype.getItemNode = function (node) {
    };
    Target.prototype.scroll = function () {
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(6);
var _2 = __webpack_require__(4);
var Dropdown = (function () {
    function Dropdown() {
        var _this = this;
        _2.default.fetchElements(function (data) {
            _this.model = _1.default.fromData(data);
        });
    }
    Dropdown.prototype.create = function (data) {
    };
    Dropdown.prototype.createTargets = function (data) {
    };
    Dropdown.prototype.scroll = function (data) {
    };
    Dropdown.prototype.resetSelected = function (data) {
    };
    return Dropdown;
}());
exports.Dropdown = Dropdown;
exports.default = Dropdown;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Target_1 = __webpack_require__(1);
var _created_dropdown_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.toggleCallBackFunction = function () { };
        this.id = this.createTriggerId();
        this.setEventListener();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apDropdown ? data.dataset.apDropdown : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_dropdown_trigger_num;
    };
    Trigger.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (e) {
            e.preventDefault();
            _this.toggle(_this.toggleCallBackFunction);
        }, false);
    };
    Trigger.prototype.toggle = function (fn, isFirst) {
        this.toggleCallBackFunction = fn;
        if (!isFirst) {
            fn(this);
        }
    };
    Trigger.prototype.getItemNode = function (node) {
    };
    Trigger.prototype.resetSelectedClassName = function () {
    };
    Trigger.prototype.createMoveCoordinate = function () {
        return Target_1.default.fromData({
            triggerId: this.id
        });
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var Target_1 = __webpack_require__(1);
var Trigger_1 = __webpack_require__(3);
var View = (function () {
    function View() {
    }
    View.fetchElements = function (callback) {
        document.addEventListener("DOMContentLoaded", function () {
            var triggerList = APView.createFromTriggerElement(['[data-ap-dropdown]'], Trigger_1.default);
            callback({
                triggerList: triggerList,
                targetList: APView.createTargetView(triggerList, Target_1.default)
            });
        });
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(2);
if (true) {
    module.exports = _1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.dropdown === 'undefined') {
        Object.assign(global.AP, { dropdown: new _1.default });
    }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var _1 = __webpack_require__(9);
var Model = (function () {
    function Model(targetList, triggerList) {
        this.targetList = targetList;
        this.triggerList = triggerList;
        this.setTriggerCallBack();
        APModel.setTriggerTargetId(this.triggerList, this.targetList);
    }
    Model.fromData = function (data) {
        return new Model(data.targetList ? APModel.createTargetModel(data.targetList, _1.Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, _1.Trigger) : []);
    };
    Model.prototype.setTriggerCallBack = function () {
        var _this = this;
        this.triggerList.forEach(function (trigger) {
            trigger.view.toggle(function (triggerView) {
                _this.toggleContents(trigger);
            }, true);
        });
    };
    Model.prototype.toggleContents = function (trigger) {
        for (var i = 0; i < this.targetList.length; i++) {
            this.targetList[i].toggle(trigger);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Target = (function () {
    function Target(id, className, idName, coordinate, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.coordinate = coordinate;
        this.view = view;
    }
    Target.fromData = function (data) {
        return new Target(data.id ? data.id : 1, data.className ? data.className : null, data.idName ? data.idName : null, data.coordinate ? data.coordinate : 0, data ? data : null);
    };
    Target.prototype.toggle = function (trigger) {
        if (trigger.targetId == this.id) {
            this.view.scroll();
        }
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var Trigger = (function () {
    function Trigger(id, className, idName, target, targetId, coordinate, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.targetId = targetId;
        this.coordinate = coordinate;
        this.view = view;
    }
    Trigger.fromData = function (data) {
        return new Trigger(data.id ? data.id : 1, data.className ? data.className : null, data.idName ? data.idName : null, data.target ? data.target : null, data.targetId ? data.targetId : 0, data.coordinate ? data.coordinate : 0, data ? data : null);
    };
    Trigger.prototype.setTargetId = function (targetViewList) {
        var searchContents;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(8));


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-modal-window"] = factory();
	else
		root["ap-modal-window"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-common"] = factory();
	else
		root["ap-common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.isArray = function (data) {
        return Array.isArray(data) || typeof data !== 'object' && /^\[(\d|[^[|,])/.test(data);
    };
    Model.isObject = function (data) {
        var type = typeof data;
        return type === 'function' || type === 'object' && !!data;
    };
    Model.getSearchItems = function (dataList, type) {
        if (!type)
            return;
        var key = Object.keys(type)[0];
        if (type === 'all') {
            return dataList;
        }
        else {
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        }
    };
    Model.stringToNumber = function (data) {
        if (parseInt(data, 10) && /^\d|(^\-)/.test(data)) {
            return parseInt(data, 10);
        }
        else {
            return data;
        }
    };
    Model.stringToObjectCheck = function (data) {
        return /{.*:.*}/.test(data);
    };
    Model.stringToJson = function (data) {
        return JSON.parse(data
            .replace(/([\$\w]+)\s*:/g, function (_, $1) { return '"' + $1 + '":'; })
            .replace(/'([^']+)'/g, function (_, $1) { return '"' + $1 + '"'; }));
    };
    Model.stringToArray = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            var splitList = data.replace(/^\[/g, '').replace(/\s+/g, '').replace(/\]$/g, '').split(","), newSplitList_1 = [];
            if (this.stringToObjectCheck(splitList)) {
                splitList.forEach(function (item) {
                    if (_this.stringToObjectCheck(item)) {
                        newSplitList_1.push(_this.stringToJson(item.trim()));
                    }
                    else {
                        newSplitList_1.push(_this.stringToNumber(item));
                    }
                });
                return newSplitList_1;
            }
            else {
                splitList.forEach(function (item) {
                    newSplitList_1.push(_this.stringToNumber(item));
                });
                return newSplitList_1;
            }
        }
        else {
            return data;
        }
    };
    Model.checkType = function (data) {
        switch (typeof data) {
            case 'object':
                return data;
            case 'number':
                return { id: data };
            case 'string':
                if (/^#/.test(data)) {
                    return { idName: data.substr(1) };
                }
                else if (/^\./.test(data)) {
                    return { className: data.substr(1) };
                }
                else if (/all/gi.test(data)) {
                    return 'all';
                }
                else if (this.stringToNumber(data)) {
                    return { id: data };
                }
                break;
        }
    };
    Model.search = function (dataList, type) {
        var _this = this;
        if (this.isArray(type)) {
            var keys_1 = [], searchItems_1 = [], resultItem_1 = [];
            this.stringToArray(type).forEach(function (item) {
                keys_1.push(_this.checkType(item));
            });
            keys_1.forEach(function (key) {
                searchItems_1 = _this.getSearchItems(dataList, key);
                searchItems_1.forEach(function (item) {
                    resultItem_1.push(item);
                });
            });
            return resultItem_1;
        }
        else {
            return this.getSearchItems(dataList, this.checkType(type));
        }
    };
    Model.uniq = function (stringArr) {
        var newArr = stringArr.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return newArr;
    };
    Model.flattenArray = function (array) {
        return [].concat.apply(array);
    };
    Model.createTriggerModel = function (triggerView, triggerClass) {
        var triggerList = [];
        triggerView.forEach(function (trigger) {
            triggerList.push(triggerClass.fromData(trigger));
        });
        return triggerList;
    };
    Model.createTargetModel = function (targetView, targetClass) {
        var targetList = [];
        targetView.forEach(function (target) {
            targetList.push(targetClass.fromData(target));
        });
        return targetList;
    };
    Model.setTriggerTargetId = function (triggerList, targetList) {
        for (var i = 0; i < triggerList.length; i++) {
            triggerList[i].setTargetId(targetList);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var View = (function () {
    function View() {
    }
    View.getFirstChildLastNode = function (child) {
        if (child.children.length > 0) {
            return this.getFirstChildLastNode(child.children[0]);
        }
        else {
            return child;
        }
    };
    View.createFromTriggerElement = function (selectors, trigger) {
        var triggerList = [], triggerViewList = [];
        selectors.forEach(function (selector) {
            triggerList.push(document.querySelectorAll(selector));
        });
        triggerList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                triggerViewList.push(trigger.fromData(nodeList[i]));
            }
        });
        return triggerViewList;
    };
    View.createTargetView = function (triggerList, target) {
        var selectors = this.getTargetSelectors(triggerList), targetNodeList = this.getTargetNodeList(selectors), createTargetList = this.createFromTargetsElement(targetNodeList, target);
        return this.getTargetViewList(createTargetList);
    };
    View.getTargetSelectors = function (triggerList) {
        var selectors = [];
        triggerList.forEach(function (trigger) {
            if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        return _1.default.uniq(selectors);
    };
    View.getTargetNodeList = function (selectors) {
        var targetNodeList = [];
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] !== "all") {
                targetNodeList.push(document.querySelectorAll(selectors[i]));
            }
        }
        return targetNodeList;
    };
    View.createFromTargetsElement = function (targetList, target) {
        var targetViewList = [];
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(target.fromData({ node: nodeList[i] }));
            }
        });
        return targetViewList;
    };
    View.getTargetViewList = function (createTargetList) {
        var targetViewList = [];
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(0);
var _2 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
if (true) {
    module.exports.Model = _1.default;
    module.exports.View = _2.default;
    module.exports.Target = index_1.Target;
    module.exports.Trigger = index_1.Trigger;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.model === 'undefined') {
        Object.assign(global.AP.common, { model: _1.default });
    }
    if (typeof global.AP.common.view === 'undefined') {
        Object.assign(global.AP.common, { view: _2.default });
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_target_num = 0;
var Target = (function () {
    function Target(id, idName, className, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_target_num;
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.callBackFunction = function () { };
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getItemNode = function () {
        return this.node;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-tween"] = factory();
	else
		root["ap-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tween = (function () {
    function Tween(start, end, option) {
        var _this = this;
        this.start = start;
        this.end = end;
        this.option = option;
        this.timer = null;
        this.isPlaying = false;
        this._startTime = Date.now();
        this.setting = {
            duration: 200,
            easing: 'linear',
            step: function () { },
            complete: function () { }
        };
        this._loopHandler = function () {
            _this.update();
        };
        this.setting = this._extend(this.setting, option);
        this.init();
    }
    Tween.fromData = function (data) {
        return new Tween(data.start ? data.start : null, data.end ? data.end : null, data.option ? data.option : null);
    };
    Tween.prototype.init = function () {
        this.play();
    };
    Tween.prototype._extend = function (arg, options) {
        if (arguments.length < 2) {
            return arg;
        }
        if (!arg) {
            arg = {};
        }
        for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
                if (arguments[i][key] !== null && typeof (arguments[i][key]) === "object") {
                    arg[key] = this._extend(arg[key], arguments[i][key]);
                }
                else {
                    arg[key] = arguments[i][key];
                }
            }
        }
        return arg;
    };
    Tween.prototype.checkSteps = function (elapsedTime) {
        if (this.setting.duration <= elapsedTime) {
            this.stop();
            this.setting.complete.apply(this, []);
        }
        else {
            this.timer = window.requestAnimationFrame(this._loopHandler);
        }
    };
    Tween.prototype.play = function () {
        this.isPlaying = true;
        this.timer = window.requestAnimationFrame(this._loopHandler);
    };
    Tween.prototype.stop = function () {
        this.isPlaying = false;
        if (this.timer) {
            this.timer = null;
            window.cancelAnimationFrame(this._loopHandler);
        }
        return this;
    };
    Tween.prototype.update = function () {
        var now = Date.now(), elapsedTime = now - this._startTime, val = {};
        for (var key in this.end) {
            var start = this.start[key], variation = this.end[key] - start, eased = Tween.Easing[this.setting.easing](elapsedTime, start, variation, this.setting.duration);
            val[key] = eased;
        }
        this.setting.step.apply(this, [val]);
        this.checkSteps(elapsedTime);
    };
    return Tween;
}());
Tween.Easing = {
    linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeInQuad: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (t, b, c, d) {
        if (t == 0)
            return b;
        if (t == d)
            return b + c;
        if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s_1 = p / 4;
        }
        else {
            var s_2 = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s_3 = p / 4;
        }
        else {
            var s_4 = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s_5 = p / 4;
        }
        else {
            var s_6 = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1)
            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (t, b, c, d) {
        return c - Tween.Easing.easeOutBounce(d - t, 0, c, d) + b;
    },
    easeOutBounce: function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        }
        else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (t, b, c, d) {
        if (t < d / 2)
            return Tween.Easing.easeInBounce(t * 2, 0, c, d) * .5 + b;
        return Tween.Easing.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
};
exports.Tween = Tween;
exports.default = Tween;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var Tween_1 = __webpack_require__(0);
if (true) {
    module.exports = Tween_1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.tween === 'undefined') {
        Object.assign(global.AP.common, { tween: Tween_1.default });
    }
}


/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utility = __webpack_require__(4);
var Tween = __webpack_require__(1);
var _created_modal_window_num = 0;
var Target = (function () {
    function Target(id, idName, className, isOpen, outerWidth, outerHeight, transform, node, body) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.isOpen = isOpen;
        this.outerWidth = outerWidth;
        this.outerHeight = outerHeight;
        this.transform = transform;
        this.node = node;
        this.body = body;
        this.callBackFunction = function () { };
        this._DEFAULT_ID_NAME = 'modalWindow';
        this._DEFAULT_CLASS_NAME = 'modalWindow';
        this.id = this.createModalWindowId();
        if (this.idName == null) {
            this.idName = String(this._DEFAULT_ID_NAME + this.id);
            this.node.id = this.idName;
        }
        if (this.className == null) {
            this.className = this._DEFAULT_CLASS_NAME;
        }
        this.outerCheck();
        this.defaultStyle();
        this.setEventListener();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, false, data.outerWidth ? data.outerWidth : 0, data.outerHeight ? data.outerHeight : 0, data.transform ? data.transform : null, data.node ? data.node : null, data.node && data.node.children ? data.node.children[0] : null);
    };
    Target.create = function () {
        return this.fromData({});
    };
    Target.prototype.createModalWindowId = function () {
        return ++_created_modal_window_num;
    };
    Target.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (e) {
            _this.click(_this.callBackFunction);
        }, false);
        this.body.addEventListener('click', function (e) {
        }, false);
    };
    Target.prototype.click = function (fn, isFirst) {
        this.callBackFunction = fn;
        if (!isFirst) {
            fn();
        }
    };
    Target.prototype.outerCheck = function () {
        var utility = Utility.getInstance();
        if (this.outerWidth === 0 || this.outerHeight === 0) {
            this.outerWidth = this.getStyle(this.body).outerWidth;
            this.outerHeight = this.getStyle(this.body).outerHeight;
            this.transform = utility.whichTransform();
        }
    };
    Target.prototype.getStyle = function (node) {
        return {
            outerWidth: node.offsetWidth,
            outerHeight: node.offsetHeight
        };
    };
    Target.prototype.defaultStyle = function () {
        this.node.style.display = 'none';
        this.node.style.position = 'fixed';
        this.node.style.top = '0';
        this.node.style.right = '0';
        this.node.style.bottom = '0';
        this.node.style.left = '0';
        this.node.style.zIndex = '1010';
        this.node.style.overflowY = 'scroll';
        this.body.style.position = 'relative';
        this.body.style.marginLeft = 'auto';
        this.body.style.marginRight = 'auto';
        this.body.style.marginTop = '100px';
        this.body.style.opacity = '0';
    };
    Target.prototype.showStartStyle = function () {
        this.node.style.display = 'block';
        this.body.style.opacity = '0';
        this.body.style.display = 'block';
        this.body.style[this.transform] = 'scale(0.4)';
        document.querySelector('html').classList.add('apOverHidden');
    };
    Target.prototype.showFixedStyle = function () {
        this.body.style.opacity = '1';
        this.body.style[this.transform] = 'scale(1)';
    };
    Target.prototype.hideFixedStyle = function () {
        this.node.style.display = 'none';
        this.body.style.opacity = '0';
        this.body.style.display = 'none';
        document.querySelector('html').classList.remove('apOverHidden');
    };
    Target.prototype.setOpenStyle = function () {
        this.showStartStyle();
        this.outerCheck();
        this.showAnimation();
    };
    Target.prototype.showAnimation = function () {
        var _this = this;
        var tween = Tween.fromData({
            start: {
                opacity: this.body.style.opacity,
                scale: 0.4
            },
            end: {
                opacity: 1,
                scale: 1
            },
            option: {
                duration: 200,
                easing: 'easeInOutCubic',
                step: function (val) {
                    _this.body.style.opacity = val.opacity;
                    _this.body.style[_this.transform] = 'scale(' + val.scale + ')';
                },
                complete: function () {
                    tween = null;
                    _this.showFixedStyle();
                }
            }
        });
    };
    Target.prototype.setCloseStyle = function () {
        this.closeAnimation();
    };
    Target.prototype.closeAnimation = function () {
        var _this = this;
        var tween = Tween.fromData({
            start: {
                opacity: 1,
                scale: 1
            },
            end: {
                opacity: 0,
                scale: 0.7
            },
            option: {
                duration: 150,
                easing: 'easeOutCubic',
                step: function (val) {
                    _this.body.style.opacity = val.opacity;
                    _this.body.style[_this.transform] = 'scale(' + val.scale + ')';
                },
                complete: function () {
                    _this.hideFixedStyle();
                    tween = null;
                }
            }
        });
    };
    Target.prototype.open = function () {
        this.setOpenStyle();
    };
    Target.prototype.close = function () {
        this.setCloseStyle();
    };
    Target.prototype.addIdName = function (idName) {
        this.node.id = idName;
    };
    Target.prototype.destroy = function () {
        var DOM = document.getElementById(this.node.id);
        DOM.parentNode.removeChild(DOM);
    };
    Target.prototype.createElement = function () {
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(9);
var _2 = __webpack_require__(7);
var ModalWindow = (function () {
    function ModalWindow() {
        var _this = this;
        _2.default.fetchElements(function (data) {
            _this.model = _1.default.fromData(data);
        });
    }
    ModalWindow.prototype.open = function (data) {
        this.model.open(data);
    };
    ModalWindow.prototype.close = function (data) {
        this.model.close(data);
    };
    ModalWindow.prototype.create = function (data) {
        this.model.create(data);
    };
    ModalWindow.prototype.destroy = function (data) {
        this.model.destroy(data);
    };
    ModalWindow.prototype.update = function (data) {
        this.model.update(data);
    };
    ModalWindow.prototype.getElements = function (data) {
        return this.model.getElements(data);
    };
    return ModalWindow;
}());
exports.ModalWindow = ModalWindow;
exports.default = ModalWindow;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-utility"] = factory();
	else
		root["ap-utility"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utility = (function () {
    function Utility() {
        this._FAKE_ELEMENT = 'fakeelement';
        if (Utility._instance) {
            return Utility._instance;
        }
        else {
            Utility._instance = this;
        }
        this.support = {
            touch: ('ontouchstart' in window)
        };
        this.vendor = {
            defaultEvent: 'click',
            transitionend: this.whichTransitionEvent(),
            animationend: this.whichAnimationEvent(),
            prefix: this.whichPrefix(),
            transform: this.whichTransform()
        };
        if (this.support.touch) {
            this.vendor.defaultEvent = 'touchend';
        }
        this.setRequestAnimationFrame();
        this.setCancelAnimationFrame();
    }
    Utility.getInstance = function () {
        if (this._instance == null) {
            return new Utility();
        }
        else {
            return Utility._instance;
        }
    };
    Utility.prototype.createFakeElement = function () {
        return document.createElement(this._FAKE_ELEMENT);
    };
    Utility.prototype.setRequestAnimationFrame = function () {
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
            function (callback, element) {
                window.setTimeout(callback, 1000 / 60);
            };
    };
    Utility.prototype.setCancelAnimationFrame = function () {
        window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame ||
            function (id) {
                window.clearTimeout(id);
            };
    };
    Utility.prototype.whichPrefix = function () {
        return (/webkit/i).test(navigator.appVersion) ? '-webkit-' : (/firefox/i).test(navigator.userAgent) ? '-moz-' :
            (/trident/i).test(navigator.userAgent) ? '-ms-' : 'opera' in window ? '-o-' : '';
    };
    Utility.prototype.whichTransform = function () {
        var t, el = this.createFakeElement();
        var transform = {
            'transform': 'transform',
            'OTransform': 'OTransform',
            'MozTransform': 'MozTransform',
            'webkitTransform': 'webkitTransform'
        };
        for (t in transform) {
            if (el.style[t] !== undefined) {
                return transform[t];
            }
        }
    };
    Utility.prototype.whichAnimationEvent = function () {
        var t, el = this.createFakeElement();
        var animations = {
            'animation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd'
        };
        for (t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    };
    Utility.prototype.whichTransitionEvent = function () {
        var t, el = this.createFakeElement();
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };
    Utility.prototype.getClientHeight = function () {
        return document.documentElement.clientHeight;
    };
    Utility.prototype.getClientWidth = function () {
        return document.documentElement.clientWidth;
    };
    return Utility;
}());
Utility._instance = null;
exports.Utility = Utility;
exports.default = Utility;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var Utility_1 = __webpack_require__(0);
if (true) {
    module.exports = Utility_1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.utility === 'undefined') {
        Object.assign(global.AP.common, { utility: Utility_1.default });
    }
}


/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tween = __webpack_require__(1);
var BackDrop = (function () {
    function BackDrop() {
        this._BACKDROP_ELEMENT_CLASS_NAME = 'modalWindowBackDrop';
        this.callBackFunction = function () { };
        this.createElement();
        this.setEventListener();
        this.defaultStyle();
    }
    BackDrop.fromData = function (data) {
        return new BackDrop();
    };
    BackDrop.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (event) {
            event.preventDefault();
            _this.click(_this.callBackFunction);
        }, false);
    };
    BackDrop.prototype.defaultStyle = function () {
        this.node.style.position = 'fixed';
        this.node.style.top = '0';
        this.node.style.display = 'none';
        this.node.style.width = '100%';
        this.node.style.height = '100%';
        this.node.style.opacity = '0';
        this.node.style.background = 'rgba(0, 0, 0, 0.6)';
    };
    BackDrop.prototype.showStartStyle = function () {
        this.node.style.display = 'block';
    };
    BackDrop.prototype.showFixedStyle = function () {
        this.node.style.opacity = '1';
    };
    BackDrop.prototype.setOpenStyle = function () {
        this.showStartStyle();
        this.showAnimation();
    };
    BackDrop.prototype.hideFixedStyle = function () {
        this.node.style.display = 'none';
        this.node.style.opacity = '0';
    };
    BackDrop.prototype.showAnimation = function () {
        var _this = this;
        var tween = new Tween({
            opacity: this.node.style.opacity
        }, {
            opacity: 1
        }, {
            duration: 200,
            easing: 'easeInOutQuad',
            step: function (val) {
                _this.node.style.opacity = val.opacity;
            },
            complete: function () {
                tween = null;
                _this.showFixedStyle();
            }
        });
    };
    BackDrop.prototype.closeAnimation = function () {
        var _this = this;
        var tween = new Tween({
            opacity: 1
        }, {
            opacity: 0
        }, {
            duration: 300,
            easing: 'easeInOutQuad',
            step: function (val) {
                _this.node.style.opacity = val.opacity;
            },
            complete: function () {
                _this.hideFixedStyle();
                tween = null;
            }
        });
    };
    BackDrop.prototype.setCloseStyle = function () {
        this.closeAnimation();
    };
    BackDrop.prototype.createElement = function () {
        this.node = document.createElement("div");
        this.node.classList.add(this._BACKDROP_ELEMENT_CLASS_NAME);
        document.body.appendChild(this.node);
    };
    BackDrop.prototype.show = function () {
        this.setOpenStyle();
    };
    BackDrop.prototype.hide = function () {
        this.setCloseStyle();
    };
    BackDrop.prototype.click = function (fn, isFirst) {
        this.callBackFunction = fn;
        if (!isFirst) {
            fn();
        }
    };
    return BackDrop;
}());
exports.BackDrop = BackDrop;
exports.default = BackDrop;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, node, target, isOpener) {
        this.id = id;
        this.node = node;
        this.target = target;
        this.isOpener = isOpener;
        this.openCallBackFunction = function () { };
        this.closeCallBackFunction = function () { };
        this.setTarget(this.node);
        this.setEventListener();
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data ? data : null, null, true);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.setTarget = function (node) {
        if (node.dataset.apModalClose !== undefined) {
            this.isOpener = false;
            if (node.dataset.apModalClose) {
                this.target = node.dataset.apModalClose;
            }
            else if ((/^#./gi).test(node.hash)) {
                this.target = node.hash;
            }
            else {
                this.target = 'all';
            }
        }
        else if (node.dataset.apModal !== undefined) {
            if (node.dataset.apModal) {
                this.target = node.dataset.apModal;
            }
            else {
                this.target = node.hash;
            }
        }
    };
    Trigger.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (event) {
            event.preventDefault();
            if (_this.isOpener) {
                _this.open(_this.openCallBackFunction);
            }
            else {
                _this.close(_this.closeCallBackFunction);
            }
        }, false);
    };
    Trigger.prototype.open = function (fn, isFirst) {
        this.openCallBackFunction = fn;
        if (!isFirst) {
            fn(this.target);
        }
    };
    Trigger.prototype.close = function (fn, isFirst) {
        this.closeCallBackFunction = fn;
        if (!isFirst) {
            fn(this.target);
        }
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var Trigger_1 = __webpack_require__(6);
var Target_1 = __webpack_require__(2);
var BackDrop_1 = __webpack_require__(5);
var View = (function () {
    function View() {
    }
    View.fetchElements = function (callback) {
        var _this = this;
        document.addEventListener("DOMContentLoaded", function () {
            var triggerList = APView.createFromTriggerElement(['[data-ap-modal]', '[data-ap-modal-close]'], Trigger_1.default);
            callback({
                triggerList: triggerList,
                targetList: APView.createTargetView(triggerList, Target_1.default),
                backDrop: _this.createBackDropView()
            });
        });
    };
    View.createBackDropView = function () {
        return BackDrop_1.default.fromData({});
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(3);
if (true) {
    module.exports = _1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.modal === 'undefined') {
        Object.assign(global.AP, { modal: new _1.default });
    }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var Target_1 = __webpack_require__(2);
var _1 = __webpack_require__(13);
var Model = (function () {
    function Model(backDrop, targetList, triggerList) {
        this.backDrop = backDrop;
        this.targetList = targetList;
        this.triggerList = triggerList;
        this.setTriggerCallBack();
        this.setTriggerTargetId();
        this.setTargetCallBack();
        this.setBackDropCallBack();
    }
    Model.fromData = function (data) {
        return new Model(data.backDrop ? _1.BackDrop.fromData(data.backDrop) : null, data.targetList ? APModel.createTargetModel(data.targetList, _1.Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, _1.Trigger) : []);
    };
    Model.prototype.setTriggerCallBack = function () {
        var _this = this;
        this.triggerList.forEach(function (trigger) {
            trigger.view.open(function (target) {
                trigger.open(_this.targetList);
                _this.backDrop.show();
            }, true);
            trigger.view.close(function (target) {
                trigger.close(_this.targetList);
                _this.backDrop.hide();
            }, true);
        });
    };
    Model.prototype.setTargetCallBack = function () {
        var _this = this;
        this.targetList.forEach(function (target) {
            target.view.click(function () {
                target.close();
                if (!_this.openCheck()) {
                    _this.backDrop.hide();
                }
            }, true);
        });
    };
    Model.prototype.setTriggerTargetId = function () {
        for (var i = 0; i < this.triggerList.length; i++) {
            this.triggerList[i].setTargetId(this.targetList);
        }
    };
    Model.prototype.setBackDropCallBack = function () {
        var _this = this;
        this.backDrop.view.click(function () {
            _this.close('all');
        }, true);
    };
    Model.prototype.matchModal = function (searchModals) {
        var matchModals = [];
        this.targetList.forEach(function (modal) {
            searchModals.forEach(function (searchModal) {
                if (modal == searchModal) {
                    matchModals.push(modal);
                }
            });
        });
        return matchModals;
    };
    Model.prototype.openCheck = function () {
        var isOpen = false;
        this.targetList.forEach(function (modal) {
            if (modal.isOpen) {
                isOpen = true;
            }
        });
        return isOpen;
    };
    Model.prototype.open = function (data) {
        var searchModals = APModel.search(this.targetList, data);
        if (searchModals.length > 0) {
            var matchModals = this.matchModal(searchModals);
            matchModals.forEach(function (modal) {
                modal.open();
            });
            this.backDrop.show();
        }
    };
    Model.prototype.close = function (data) {
        var searchModals = APModel.search(this.targetList, data);
        if (searchModals.length > 0) {
            var matchModals = this.matchModal(searchModals);
            matchModals.forEach(function (modal) {
                modal.close();
            });
        }
        if (!this.openCheck()) {
            this.backDrop.hide();
        }
    };
    Model.prototype.create = function (data) {
        if (data !== void 0) {
            this.targetList.push(_1.Target.fromData(data));
        }
        else {
            this.targetList.push(_1.Target.fromData(Target_1.default.create()));
        }
    };
    Model.prototype.destroy = function (data) {
        var searchModals = APModel.search(this.targetList, data), newList = [];
        if (searchModals.length > 0) {
            this.targetList.forEach(function (modal) {
                searchModals.forEach(function (searchModal) {
                    if (modal !== searchModal) {
                        newList.push(modal);
                    }
                    else {
                        modal.destroy();
                    }
                });
            });
            this.targetList = newList;
        }
    };
    Model.prototype.update = function (data) {
    };
    Model.prototype.getElements = function (data) {
        return APModel.search(this.targetList, data);
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BackDrop = (function () {
    function BackDrop(isShow, view) {
        this.isShow = isShow;
        this.view = view;
    }
    BackDrop.fromData = function (data) {
        return new BackDrop(data.isShow ? data.isShow : false, data ? data : null);
    };
    BackDrop.prototype.show = function () {
        this.isShow = true;
        this.view.show();
    };
    BackDrop.prototype.hide = function () {
        this.isShow = false;
        this.view.hide();
    };
    return BackDrop;
}());
exports.BackDrop = BackDrop;
exports.default = BackDrop;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Target = (function () {
    function Target(id, triggerId, className, idName, isOpen, view) {
        this.id = id;
        this.triggerId = triggerId;
        this.className = className;
        this.idName = idName;
        this.isOpen = isOpen;
        this.view = view;
    }
    Target.fromData = function (data) {
        return new Target(data.id ? data.id : 1, data.triggerId ? data.triggerId : null, data.className ? data.className : null, data.idName ? data.idName : null, data.isOpen ? data.isOpen : false, data ? data : null);
    };
    Target.prototype.open = function () {
        if (!this.isOpen) {
            this.isOpen = true;
            this.view.open();
        }
    };
    Target.prototype.close = function () {
        this.isOpen = false;
        this.view.close();
    };
    Target.prototype.destroy = function () {
        this.view.destroy();
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var Trigger = (function () {
    function Trigger(id, className, idName, target, targetId, isOpener, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.targetId = targetId;
        this.isOpener = isOpener;
        this.view = view;
    }
    Trigger.fromData = function (data) {
        return new Trigger(data.id ? data.id : 1, data.className ? data.className : null, data.idName ? data.idName : null, data.target ? data.target : null, data.targetId ? data.targetId : [], data.isOpener ? data.isOpener : false, data ? data : null);
    };
    Trigger.prototype.setTargetId = function (targetViewList) {
        var searchContents;
        if (this.target) {
            searchContents = APModel.search(targetViewList, this.target);
        }
        else {
            searchContents = APModel.search(targetViewList, { triggerId: this.id });
        }
        if (searchContents) {
            for (var i = 0; i < searchContents.length; i++) {
                this.targetId.push(searchContents[i].id);
            }
        }
    };
    Trigger.prototype.open = function (targetList) {
        for (var i = 0; i < this.targetId.length; i++) {
            for (var n = 0; n < targetList.length; n++) {
                if (targetList[n].id === this.targetId[i]) {
                    targetList[n].open();
                }
            }
        }
    };
    Trigger.prototype.close = function (targetList) {
        for (var i = 0; i < this.targetId.length; i++) {
            for (var n = 0; n < targetList.length; n++) {
                if (targetList[n].id === this.targetId[i]) {
                    targetList[n].close();
                }
            }
        }
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(11));
__export(__webpack_require__(12));
__export(__webpack_require__(10));


/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-scrollspy"] = factory();
	else
		root["ap-scrollspy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-common"] = factory();
	else
		root["ap-common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.isArray = function (data) {
        return Array.isArray(data) || typeof data !== 'object' && /^\[(\d|[^[|,])/.test(data);
    };
    Model.isObject = function (data) {
        var type = typeof data;
        return type === 'function' || type === 'object' && !!data;
    };
    Model.getSearchItems = function (dataList, type) {
        if (!type)
            return;
        var key = Object.keys(type)[0];
        if (type === 'all') {
            return dataList;
        }
        else {
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        }
    };
    Model.stringToNumber = function (data) {
        if (parseInt(data, 10) && /^\d|(^\-)/.test(data)) {
            return parseInt(data, 10);
        }
        else {
            return data;
        }
    };
    Model.stringToObjectCheck = function (data) {
        return /{.*:.*}/.test(data);
    };
    Model.stringToJson = function (data) {
        return JSON.parse(data
            .replace(/([\$\w]+)\s*:/g, function (_, $1) { return '"' + $1 + '":'; })
            .replace(/'([^']+)'/g, function (_, $1) { return '"' + $1 + '"'; }));
    };
    Model.stringToArray = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            var splitList = data.replace(/^\[/g, '').replace(/\s+/g, '').replace(/\]$/g, '').split(","), newSplitList_1 = [];
            if (this.stringToObjectCheck(splitList)) {
                splitList.forEach(function (item) {
                    if (_this.stringToObjectCheck(item)) {
                        newSplitList_1.push(_this.stringToJson(item.trim()));
                    }
                    else {
                        newSplitList_1.push(_this.stringToNumber(item));
                    }
                });
                return newSplitList_1;
            }
            else {
                splitList.forEach(function (item) {
                    newSplitList_1.push(_this.stringToNumber(item));
                });
                return newSplitList_1;
            }
        }
        else {
            return data;
        }
    };
    Model.checkType = function (data) {
        switch (typeof data) {
            case 'object':
                return data;
            case 'number':
                return { id: data };
            case 'string':
                if (/^#/.test(data)) {
                    return { idName: data.substr(1) };
                }
                else if (/^\./.test(data)) {
                    return { className: data.substr(1) };
                }
                else if (/all/gi.test(data)) {
                    return 'all';
                }
                else if (this.stringToNumber(data)) {
                    return { id: data };
                }
                break;
        }
    };
    Model.search = function (dataList, type) {
        var _this = this;
        if (this.isArray(type)) {
            var keys_1 = [], searchItems_1 = [], resultItem_1 = [];
            this.stringToArray(type).forEach(function (item) {
                keys_1.push(_this.checkType(item));
            });
            keys_1.forEach(function (key) {
                searchItems_1 = _this.getSearchItems(dataList, key);
                searchItems_1.forEach(function (item) {
                    resultItem_1.push(item);
                });
            });
            return resultItem_1;
        }
        else {
            return this.getSearchItems(dataList, this.checkType(type));
        }
    };
    Model.uniq = function (stringArr) {
        var newArr = stringArr.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return newArr;
    };
    Model.flattenArray = function (array) {
        return [].concat.apply(array);
    };
    Model.createTriggerModel = function (triggerView, triggerClass) {
        var triggerList = [];
        triggerView.forEach(function (trigger) {
            triggerList.push(triggerClass.fromData(trigger));
        });
        return triggerList;
    };
    Model.createTargetModel = function (targetView, targetClass) {
        var targetList = [];
        targetView.forEach(function (target) {
            targetList.push(targetClass.fromData(target));
        });
        return targetList;
    };
    Model.setTriggerTargetId = function (triggerList, targetList) {
        for (var i = 0; i < triggerList.length; i++) {
            triggerList[i].setTargetId(targetList);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var View = (function () {
    function View() {
    }
    View.getFirstChildLastNode = function (child) {
        if (child.children.length > 0) {
            return this.getFirstChildLastNode(child.children[0]);
        }
        else {
            return child;
        }
    };
    View.createFromTriggerElement = function (selectors, trigger) {
        var triggerList = [], triggerViewList = [];
        selectors.forEach(function (selector) {
            triggerList.push(document.querySelectorAll(selector));
        });
        triggerList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                triggerViewList.push(trigger.fromData(nodeList[i]));
            }
        });
        return triggerViewList;
    };
    View.createTargetView = function (triggerList, target) {
        var selectors = this.getTargetSelectors(triggerList), targetNodeList = this.getTargetNodeList(selectors), createTargetList = this.createFromTargetsElement(targetNodeList, target);
        return this.getTargetViewList(createTargetList);
    };
    View.getTargetSelectors = function (triggerList) {
        var selectors = [];
        triggerList.forEach(function (trigger) {
            if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        return _1.default.uniq(selectors);
    };
    View.getTargetNodeList = function (selectors) {
        var targetNodeList = [];
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] !== "all") {
                targetNodeList.push(document.querySelectorAll(selectors[i]));
            }
        }
        return targetNodeList;
    };
    View.createFromTargetsElement = function (targetList, target) {
        var targetViewList = [];
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(target.fromData({ node: nodeList[i] }));
            }
        });
        return targetViewList;
    };
    View.getTargetViewList = function (createTargetList) {
        var targetViewList = [];
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(0);
var _2 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
if (true) {
    module.exports.Model = _1.default;
    module.exports.View = _2.default;
    module.exports.Target = index_1.Target;
    module.exports.Trigger = index_1.Trigger;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.model === 'undefined') {
        Object.assign(global.AP.common, { model: _1.default });
    }
    if (typeof global.AP.common.view === 'undefined') {
        Object.assign(global.AP.common, { view: _2.default });
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_target_num = 0;
var Target = (function () {
    function Target(id, idName, className, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_target_num;
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.callBackFunction = function () { };
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getItemNode = function () {
        return this.node;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(5);
var _2 = __webpack_require__(3);
var ScrollSpy = (function () {
    function ScrollSpy() {
        var _this = this;
        _2.default.fetchElements(function (data) {
            _this.model = _1.default.fromData(data);
        });
    }
    ScrollSpy.prototype.create = function (data) {
    };
    ScrollSpy.prototype.createTargets = function (data) {
    };
    ScrollSpy.prototype.scroll = function (data) {
    };
    ScrollSpy.prototype.resetSelected = function (data) {
    };
    return ScrollSpy;
}());
exports.ScrollSpy = ScrollSpy;
exports.default = ScrollSpy;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_scroll_spy_target_num = 0;
var Target = (function () {
    function Target(id, triggerId, idName, className, coordinate, node) {
        this.id = id;
        this.triggerId = triggerId;
        this.idName = idName;
        this.className = className;
        this.coordinate = coordinate;
        this.node = node;
        this.id = this.createContentsId();
        if (this.node && this.coordinate == 0) {
            this.coordinate = this.getCoordinate(this.node);
        }
    }
    Target.fromData = function (data) {
        return new Target(0, data.triggerId ? data.triggerId : null, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.coordinate ? data.coordinate : 0, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_scroll_spy_target_num;
    };
    Target.prototype.getCoordinate = function (node) {
        var rect = node.getBoundingClientRect();
        return rect.top + window.pageYOffset;
    };
    Target.prototype.getItemNode = function (node) {
    };
    Target.prototype.scroll = function () {
        window.scrollTo(0, this.coordinate);
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var Target_1 = __webpack_require__(2);
var View = (function () {
    function View() {
    }
    View.fetchElements = function (callback) {
        var _this = this;
        document.addEventListener("DOMContentLoaded", function () {
            callback({
                triggerList: _this.createTrigger(),
                targetList: _this.createTargetView()
            });
        });
    };
    View.createTrigger = function () {
        if (document.querySelectorAll('[data-ap-scrollspy]')) {
        }
    };
    View.createTargetView = function () {
        var targetList = [], targetViewList = [];
        targetList.push(document.querySelectorAll('[data-ap-scrollspy]'));
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(Target_1.default.fromData(nodeList[i]));
            }
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(1);
if (true) {
    module.exports = _1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.scrollSpy === 'undefined') {
        Object.assign(global.AP, { scrollSpy: new _1.default });
    }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var _1 = __webpack_require__(8);
var Model = (function () {
    function Model(targetList, trigger) {
        this.targetList = targetList;
        this.trigger = trigger;
        this.setTriggerCallBack();
        this.setTriggerTargetId();
    }
    Model.fromData = function (data) {
        return new Model(data.targetList ? APModel.createTargetModel(data.targetList, _1.Target) : [], data.trigger ? _1.Trigger.fromData(data) : null);
    };
    Model.prototype.setTriggerTargetId = function () {
    };
    Model.prototype.setTriggerCallBack = function () {
    };
    Model.prototype.toggleContents = function (trigger) {
        for (var i = 0; i < this.targetList.length; i++) {
            this.targetList[i].toggle(trigger);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Target = (function () {
    function Target(id, triggerId, className, idName, coordinate, view) {
        this.id = id;
        this.triggerId = triggerId;
        this.className = className;
        this.idName = idName;
        this.coordinate = coordinate;
        this.view = view;
    }
    Target.fromData = function (data) {
        return new Target(data.id ? data.id : 1, data.triggerId ? data.triggerId : null, data.className ? data.className : null, data.idName ? data.idName : null, data.coordinate ? data.coordinate : 0, data ? data : null);
    };
    Target.prototype.toggle = function (trigger) {
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var Trigger = (function () {
    function Trigger(id, target, targetId, coordinate, view) {
        this.id = id;
        this.target = target;
        this.targetId = targetId;
        this.coordinate = coordinate;
        this.view = view;
    }
    Trigger.fromData = function (data) {
        return new Trigger(data.id ? data.id : 1, data.target ? data.target : null, data.targetId ? data.targetId : 0, data.coordinate ? data.coordinate : 0, data ? data : null);
    };
    Trigger.prototype.setTargetId = function (targetViewList) {
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));
__export(__webpack_require__(7));


/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-side-menu"] = factory();
	else
		root["ap-side-menu"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-common"] = factory();
	else
		root["ap-common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.isArray = function (data) {
        return Array.isArray(data) || typeof data !== 'object' && /^\[(\d|[^[|,])/.test(data);
    };
    Model.isObject = function (data) {
        var type = typeof data;
        return type === 'function' || type === 'object' && !!data;
    };
    Model.getSearchItems = function (dataList, type) {
        if (!type)
            return;
        var key = Object.keys(type)[0];
        if (type === 'all') {
            return dataList;
        }
        else {
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        }
    };
    Model.stringToNumber = function (data) {
        if (parseInt(data, 10) && /^\d|(^\-)/.test(data)) {
            return parseInt(data, 10);
        }
        else {
            return data;
        }
    };
    Model.stringToObjectCheck = function (data) {
        return /{.*:.*}/.test(data);
    };
    Model.stringToJson = function (data) {
        return JSON.parse(data
            .replace(/([\$\w]+)\s*:/g, function (_, $1) { return '"' + $1 + '":'; })
            .replace(/'([^']+)'/g, function (_, $1) { return '"' + $1 + '"'; }));
    };
    Model.stringToArray = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            var splitList = data.replace(/^\[/g, '').replace(/\s+/g, '').replace(/\]$/g, '').split(","), newSplitList_1 = [];
            if (this.stringToObjectCheck(splitList)) {
                splitList.forEach(function (item) {
                    if (_this.stringToObjectCheck(item)) {
                        newSplitList_1.push(_this.stringToJson(item.trim()));
                    }
                    else {
                        newSplitList_1.push(_this.stringToNumber(item));
                    }
                });
                return newSplitList_1;
            }
            else {
                splitList.forEach(function (item) {
                    newSplitList_1.push(_this.stringToNumber(item));
                });
                return newSplitList_1;
            }
        }
        else {
            return data;
        }
    };
    Model.checkType = function (data) {
        switch (typeof data) {
            case 'object':
                return data;
            case 'number':
                return { id: data };
            case 'string':
                if (/^#/.test(data)) {
                    return { idName: data.substr(1) };
                }
                else if (/^\./.test(data)) {
                    return { className: data.substr(1) };
                }
                else if (/all/gi.test(data)) {
                    return 'all';
                }
                else if (this.stringToNumber(data)) {
                    return { id: data };
                }
                break;
        }
    };
    Model.search = function (dataList, type) {
        var _this = this;
        if (this.isArray(type)) {
            var keys_1 = [], searchItems_1 = [], resultItem_1 = [];
            this.stringToArray(type).forEach(function (item) {
                keys_1.push(_this.checkType(item));
            });
            keys_1.forEach(function (key) {
                searchItems_1 = _this.getSearchItems(dataList, key);
                searchItems_1.forEach(function (item) {
                    resultItem_1.push(item);
                });
            });
            return resultItem_1;
        }
        else {
            return this.getSearchItems(dataList, this.checkType(type));
        }
    };
    Model.uniq = function (stringArr) {
        var newArr = stringArr.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return newArr;
    };
    Model.flattenArray = function (array) {
        return [].concat.apply(array);
    };
    Model.createTriggerModel = function (triggerView, triggerClass) {
        var triggerList = [];
        triggerView.forEach(function (trigger) {
            triggerList.push(triggerClass.fromData(trigger));
        });
        return triggerList;
    };
    Model.createTargetModel = function (targetView, targetClass) {
        var targetList = [];
        targetView.forEach(function (target) {
            targetList.push(targetClass.fromData(target));
        });
        return targetList;
    };
    Model.setTriggerTargetId = function (triggerList, targetList) {
        for (var i = 0; i < triggerList.length; i++) {
            triggerList[i].setTargetId(targetList);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var View = (function () {
    function View() {
    }
    View.getFirstChildLastNode = function (child) {
        if (child.children.length > 0) {
            return this.getFirstChildLastNode(child.children[0]);
        }
        else {
            return child;
        }
    };
    View.createFromTriggerElement = function (selectors, trigger) {
        var triggerList = [], triggerViewList = [];
        selectors.forEach(function (selector) {
            triggerList.push(document.querySelectorAll(selector));
        });
        triggerList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                triggerViewList.push(trigger.fromData(nodeList[i]));
            }
        });
        return triggerViewList;
    };
    View.createTargetView = function (triggerList, target) {
        var selectors = this.getTargetSelectors(triggerList), targetNodeList = this.getTargetNodeList(selectors), createTargetList = this.createFromTargetsElement(targetNodeList, target);
        return this.getTargetViewList(createTargetList);
    };
    View.getTargetSelectors = function (triggerList) {
        var selectors = [];
        triggerList.forEach(function (trigger) {
            if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        return _1.default.uniq(selectors);
    };
    View.getTargetNodeList = function (selectors) {
        var targetNodeList = [];
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] !== "all") {
                targetNodeList.push(document.querySelectorAll(selectors[i]));
            }
        }
        return targetNodeList;
    };
    View.createFromTargetsElement = function (targetList, target) {
        var targetViewList = [];
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(target.fromData({ node: nodeList[i] }));
            }
        });
        return targetViewList;
    };
    View.getTargetViewList = function (createTargetList) {
        var targetViewList = [];
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(0);
var _2 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
if (true) {
    module.exports.Model = _1.default;
    module.exports.View = _2.default;
    module.exports.Target = index_1.Target;
    module.exports.Trigger = index_1.Trigger;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.model === 'undefined') {
        Object.assign(global.AP.common, { model: _1.default });
    }
    if (typeof global.AP.common.view === 'undefined') {
        Object.assign(global.AP.common, { view: _2.default });
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_target_num = 0;
var Target = (function () {
    function Target(id, idName, className, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_target_num;
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.callBackFunction = function () { };
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getItemNode = function () {
        return this.node;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(6);
var _2 = __webpack_require__(4);
var SideMenu = (function () {
    function SideMenu() {
        var _this = this;
        _2.default.fetchElements(function (data) {
            _this.model = _1.default.fromData(data);
        });
    }
    SideMenu.prototype.create = function (data) {
    };
    SideMenu.prototype.select = function (data) {
    };
    SideMenu.prototype.resetSelected = function (data) {
    };
    return SideMenu;
}());
exports.SideMenu = SideMenu;
exports.default = SideMenu;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_sidemenu_contents_num = 0;
var Target = (function () {
    function Target(id, idName, className, toggleClassName, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.toggleClassName = toggleClassName;
        this.node = node;
        this._DEFAULT_TOGGLE_CLASS_NAME = 'active';
        this.id = this.createContentsId();
        if (!this.toggleClassName) {
            this.toggleClassName = this._DEFAULT_TOGGLE_CLASS_NAME;
        }
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.toggleClassName ? data.toggleClassName : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_sidemenu_contents_num;
    };
    Target.prototype.toggleClass = function () {
        if (this.node.classList.contains(this.toggleClassName)) {
            this.node.classList.remove(this.toggleClassName);
        }
        else {
            this.node.classList.add(this.toggleClassName);
        }
    };
    Target.prototype.getItemNode = function (node) {
    };
    Target.prototype.toggle = function () {
        this.toggleClass();
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_toggle_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.toggleCallBackFunction = function () { };
        this.id = this.createTriggerId();
        this.setEventListener();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apSide ? data.dataset.apSide : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_toggle_trigger_num;
    };
    Trigger.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (e) {
            e.preventDefault();
            _this.toggle(_this.toggleCallBackFunction);
        }, false);
    };
    Trigger.prototype.toggle = function (fn, isFirst) {
        this.toggleCallBackFunction = fn;
        if (!isFirst) {
            fn(this);
        }
    };
    Trigger.prototype.getItemNode = function (node) {
    };
    Trigger.prototype.resetSelectedClassName = function () {
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var Target_1 = __webpack_require__(2);
var Trigger_1 = __webpack_require__(3);
var View = (function () {
    function View() {
    }
    View.fetchElements = function (callback) {
        document.addEventListener("DOMContentLoaded", function () {
            var triggerList = APView.createFromTriggerElement(['[data-ap-side]'], Trigger_1.default);
            callback({
                triggerList: triggerList,
                targetList: APView.createTargetView(triggerList, Target_1.default)
            });
        });
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(1);
if (true) {
    module.exports = _1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.sideMenu === 'undefined') {
        Object.assign(global.AP, { sideMenu: new _1.default });
    }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var _1 = __webpack_require__(9);
var Model = (function () {
    function Model(targetList, triggerList) {
        this.targetList = targetList;
        this.triggerList = triggerList;
        this.setTriggerCallBack();
        this.setTriggerTargetId();
    }
    Model.fromData = function (data) {
        return new Model(data.targetList ? APModel.createTargetModel(data.targetList, _1.Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, _1.Trigger) : []);
    };
    Model.prototype.setTriggerCallBack = function () {
        var _this = this;
        this.triggerList.forEach(function (trigger) {
            trigger.view.toggle(function () {
                trigger.toggle(_this.targetList);
            }, true);
        });
    };
    Model.prototype.setTriggerTargetId = function () {
        for (var i = 0; i < this.triggerList.length; i++) {
            this.triggerList[i].setTargetId(this.targetList);
        }
    };
    Model.prototype.toggle = function (data) {
    };
    Model.prototype.getElements = function (data) {
        return APModel.search(this.targetList, data);
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Target = (function () {
    function Target(id, className, idName, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.view = view;
    }
    Target.fromData = function (data) {
        return new Target(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data ? data : null);
    };
    Target.prototype.toggle = function (trigger) {
        this.view.toggle();
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var Trigger = (function () {
    function Trigger(id, className, idName, target, targetId, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.targetId = targetId;
        this.view = view;
    }
    Trigger.fromData = function (data) {
        return new Trigger(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.target ? data.target : null, data.targetId ? data.targetId : [], data ? data : null);
    };
    Trigger.prototype.setTargetId = function (contentsViewList) {
        var searchContents = APModel.search(contentsViewList, this.target);
        if (searchContents) {
            for (var i = 0; i < searchContents.length; i++) {
                this.targetId.push(searchContents[i].id);
            }
        }
    };
    Trigger.prototype.toggle = function (targetList) {
        for (var i = 0; i < this.targetId.length; i++) {
            for (var n = 0; n < targetList.length; n++) {
                if (targetList[i].id === this.targetId[i]) {
                    targetList[i].toggle();
                }
            }
        }
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(8));


/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-smooth-scroll"] = factory();
	else
		root["ap-smooth-scroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-common"] = factory();
	else
		root["ap-common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.isArray = function (data) {
        return Array.isArray(data) || typeof data !== 'object' && /^\[(\d|[^[|,])/.test(data);
    };
    Model.isObject = function (data) {
        var type = typeof data;
        return type === 'function' || type === 'object' && !!data;
    };
    Model.getSearchItems = function (dataList, type) {
        if (!type)
            return;
        var key = Object.keys(type)[0];
        if (type === 'all') {
            return dataList;
        }
        else {
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        }
    };
    Model.stringToNumber = function (data) {
        if (parseInt(data, 10) && /^\d|(^\-)/.test(data)) {
            return parseInt(data, 10);
        }
        else {
            return data;
        }
    };
    Model.stringToObjectCheck = function (data) {
        return /{.*:.*}/.test(data);
    };
    Model.stringToJson = function (data) {
        return JSON.parse(data
            .replace(/([\$\w]+)\s*:/g, function (_, $1) { return '"' + $1 + '":'; })
            .replace(/'([^']+)'/g, function (_, $1) { return '"' + $1 + '"'; }));
    };
    Model.stringToArray = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            var splitList = data.replace(/^\[/g, '').replace(/\s+/g, '').replace(/\]$/g, '').split(","), newSplitList_1 = [];
            if (this.stringToObjectCheck(splitList)) {
                splitList.forEach(function (item) {
                    if (_this.stringToObjectCheck(item)) {
                        newSplitList_1.push(_this.stringToJson(item.trim()));
                    }
                    else {
                        newSplitList_1.push(_this.stringToNumber(item));
                    }
                });
                return newSplitList_1;
            }
            else {
                splitList.forEach(function (item) {
                    newSplitList_1.push(_this.stringToNumber(item));
                });
                return newSplitList_1;
            }
        }
        else {
            return data;
        }
    };
    Model.checkType = function (data) {
        switch (typeof data) {
            case 'object':
                return data;
            case 'number':
                return { id: data };
            case 'string':
                if (/^#/.test(data)) {
                    return { idName: data.substr(1) };
                }
                else if (/^\./.test(data)) {
                    return { className: data.substr(1) };
                }
                else if (/all/gi.test(data)) {
                    return 'all';
                }
                else if (this.stringToNumber(data)) {
                    return { id: data };
                }
                break;
        }
    };
    Model.search = function (dataList, type) {
        var _this = this;
        if (this.isArray(type)) {
            var keys_1 = [], searchItems_1 = [], resultItem_1 = [];
            this.stringToArray(type).forEach(function (item) {
                keys_1.push(_this.checkType(item));
            });
            keys_1.forEach(function (key) {
                searchItems_1 = _this.getSearchItems(dataList, key);
                searchItems_1.forEach(function (item) {
                    resultItem_1.push(item);
                });
            });
            return resultItem_1;
        }
        else {
            return this.getSearchItems(dataList, this.checkType(type));
        }
    };
    Model.uniq = function (stringArr) {
        var newArr = stringArr.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return newArr;
    };
    Model.flattenArray = function (array) {
        return [].concat.apply(array);
    };
    Model.createTriggerModel = function (triggerView, triggerClass) {
        var triggerList = [];
        triggerView.forEach(function (trigger) {
            triggerList.push(triggerClass.fromData(trigger));
        });
        return triggerList;
    };
    Model.createTargetModel = function (targetView, targetClass) {
        var targetList = [];
        targetView.forEach(function (target) {
            targetList.push(targetClass.fromData(target));
        });
        return targetList;
    };
    Model.setTriggerTargetId = function (triggerList, targetList) {
        for (var i = 0; i < triggerList.length; i++) {
            triggerList[i].setTargetId(targetList);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var View = (function () {
    function View() {
    }
    View.getFirstChildLastNode = function (child) {
        if (child.children.length > 0) {
            return this.getFirstChildLastNode(child.children[0]);
        }
        else {
            return child;
        }
    };
    View.createFromTriggerElement = function (selectors, trigger) {
        var triggerList = [], triggerViewList = [];
        selectors.forEach(function (selector) {
            triggerList.push(document.querySelectorAll(selector));
        });
        triggerList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                triggerViewList.push(trigger.fromData(nodeList[i]));
            }
        });
        return triggerViewList;
    };
    View.createTargetView = function (triggerList, target) {
        var selectors = this.getTargetSelectors(triggerList), targetNodeList = this.getTargetNodeList(selectors), createTargetList = this.createFromTargetsElement(targetNodeList, target);
        return this.getTargetViewList(createTargetList);
    };
    View.getTargetSelectors = function (triggerList) {
        var selectors = [];
        triggerList.forEach(function (trigger) {
            if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        return _1.default.uniq(selectors);
    };
    View.getTargetNodeList = function (selectors) {
        var targetNodeList = [];
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] !== "all") {
                targetNodeList.push(document.querySelectorAll(selectors[i]));
            }
        }
        return targetNodeList;
    };
    View.createFromTargetsElement = function (targetList, target) {
        var targetViewList = [];
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(target.fromData({ node: nodeList[i] }));
            }
        });
        return targetViewList;
    };
    View.getTargetViewList = function (createTargetList) {
        var targetViewList = [];
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(0);
var _2 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
if (true) {
    module.exports.Model = _1.default;
    module.exports.View = _2.default;
    module.exports.Target = index_1.Target;
    module.exports.Trigger = index_1.Trigger;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.model === 'undefined') {
        Object.assign(global.AP.common, { model: _1.default });
    }
    if (typeof global.AP.common.view === 'undefined') {
        Object.assign(global.AP.common, { view: _2.default });
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_target_num = 0;
var Target = (function () {
    function Target(id, idName, className, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_target_num;
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.callBackFunction = function () { };
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getItemNode = function () {
        return this.node;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tween = __webpack_require__(3);
var _created_scroll_target_num = 0;
var Target = (function () {
    function Target(id, triggerId, idName, className, coordinate, node) {
        this.id = id;
        this.triggerId = triggerId;
        this.idName = idName;
        this.className = className;
        this.coordinate = coordinate;
        this.node = node;
        this.id = this.createContentsId();
        if (this.node && this.coordinate == 0) {
            this.coordinate = this.getCoordinate(this.node);
        }
    }
    Target.fromData = function (data) {
        return new Target(0, data.triggerId ? data.triggerId : null, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.coordinate ? data.coordinate : 0, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_scroll_target_num;
    };
    Target.prototype.getCoordinate = function (node) {
        var rect = node.getBoundingClientRect();
        return rect.top + window.pageYOffset;
    };
    Target.prototype.fixedScroll = function (scrollTarget) {
        scrollTarget.scrollTop = this.coordinate;
    };
    Target.prototype.scroll = function () {
        var _this = this;
        var target = navigator.userAgent.indexOf('WebKit') < 0 ? document.documentElement : document.body;
        var tween = Tween.fromData({
            start: {
                scrollTop: window.pageYOffset
            },
            end: {
                scrollTop: this.coordinate
            },
            option: {
                duration: 500,
                easing: 'easeOutCubic',
                step: function (val) {
                    target.scrollTop = val.scrollTop;
                },
                complete: function () {
                    tween = null;
                    _this.fixedScroll(target);
                }
            }
        });
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(7);
var _2 = __webpack_require__(5);
var SmoothScroll = (function () {
    function SmoothScroll() {
        var _this = this;
        if (SmoothScroll._instance) {
            return SmoothScroll._instance;
        }
        else {
            _2.default.fetchElements(function (data) {
                _this.model = _1.default.fromData(data);
            });
            SmoothScroll._instance = this;
        }
    }
    SmoothScroll.prototype.create = function (data) {
    };
    SmoothScroll.prototype.createTargets = function (data) {
    };
    SmoothScroll.prototype.scroll = function (data) {
    };
    SmoothScroll.prototype.resetSelected = function (data) {
    };
    return SmoothScroll;
}());
SmoothScroll._instance = null;
exports.SmoothScroll = SmoothScroll;
exports.default = SmoothScroll;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-tween"] = factory();
	else
		root["ap-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tween = (function () {
    function Tween(start, end, option) {
        var _this = this;
        this.start = start;
        this.end = end;
        this.option = option;
        this.timer = null;
        this.isPlaying = false;
        this._startTime = Date.now();
        this.setting = {
            duration: 200,
            easing: 'linear',
            step: function () { },
            complete: function () { }
        };
        this._loopHandler = function () {
            _this.update();
        };
        this.setting = this._extend(this.setting, option);
        this.init();
    }
    Tween.fromData = function (data) {
        return new Tween(data.start ? data.start : null, data.end ? data.end : null, data.option ? data.option : null);
    };
    Tween.prototype.init = function () {
        this.play();
    };
    Tween.prototype._extend = function (arg, options) {
        if (arguments.length < 2) {
            return arg;
        }
        if (!arg) {
            arg = {};
        }
        for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
                if (arguments[i][key] !== null && typeof (arguments[i][key]) === "object") {
                    arg[key] = this._extend(arg[key], arguments[i][key]);
                }
                else {
                    arg[key] = arguments[i][key];
                }
            }
        }
        return arg;
    };
    Tween.prototype.checkSteps = function (elapsedTime) {
        if (this.setting.duration <= elapsedTime) {
            this.stop();
            this.setting.complete.apply(this, []);
        }
        else {
            this.timer = window.requestAnimationFrame(this._loopHandler);
        }
    };
    Tween.prototype.play = function () {
        this.isPlaying = true;
        this.timer = window.requestAnimationFrame(this._loopHandler);
    };
    Tween.prototype.stop = function () {
        this.isPlaying = false;
        if (this.timer) {
            this.timer = null;
            window.cancelAnimationFrame(this._loopHandler);
        }
        return this;
    };
    Tween.prototype.update = function () {
        var now = Date.now(), elapsedTime = now - this._startTime, val = {};
        for (var key in this.end) {
            var start = this.start[key], variation = this.end[key] - start, eased = Tween.Easing[this.setting.easing](elapsedTime, start, variation, this.setting.duration);
            val[key] = eased;
        }
        this.setting.step.apply(this, [val]);
        this.checkSteps(elapsedTime);
    };
    return Tween;
}());
Tween.Easing = {
    linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeInQuad: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (t, b, c, d) {
        if (t == 0)
            return b;
        if (t == d)
            return b + c;
        if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s_1 = p / 4;
        }
        else {
            var s_2 = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s_3 = p / 4;
        }
        else {
            var s_4 = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s_5 = p / 4;
        }
        else {
            var s_6 = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1)
            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (t, b, c, d) {
        return c - Tween.Easing.easeOutBounce(d - t, 0, c, d) + b;
    },
    easeOutBounce: function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        }
        else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (t, b, c, d) {
        if (t < d / 2)
            return Tween.Easing.easeInBounce(t * 2, 0, c, d) * .5 + b;
        return Tween.Easing.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
};
exports.Tween = Tween;
exports.default = Tween;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var Tween_1 = __webpack_require__(0);
if (true) {
    module.exports = Tween_1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.tween === 'undefined') {
        Object.assign(global.AP.common, { tween: Tween_1.default });
    }
}


/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Target_1 = __webpack_require__(1);
var _created_scroll_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, coordinate, moveCoordinate, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.coordinate = coordinate;
        this.moveCoordinate = moveCoordinate;
        this.node = node;
        this.clickCallBackFunction = function () { };
        this.id = this.createTriggerId();
        this.coordinate = this.getCoordinate(this.node);
        this.setEventListener();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apScroll ? data.dataset.apScroll : null, 0, 0, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_scroll_trigger_num;
    };
    Trigger.prototype.getCoordinate = function (node) {
        var rect = node.getBoundingClientRect();
        return rect.top + window.pageYOffset;
    };
    Trigger.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (event) {
            event.preventDefault();
            _this.click(_this.clickCallBackFunction);
        }, false);
    };
    Trigger.prototype.click = function (fn, isFirst) {
        this.clickCallBackFunction = fn;
        if (!isFirst) {
            fn(this);
        }
    };
    Trigger.prototype.setMoveCoordinate = function () {
        this.moveCoordinate = parseInt(this.target, 10);
        this.target = null;
    };
    Trigger.prototype.createMoveCoordinate = function () {
        return Target_1.default.fromData({
            triggerId: this.id,
            coordinate: this.coordinate + this.moveCoordinate
        });
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var APModel = __webpack_require__(0).Model;
var Trigger_1 = __webpack_require__(4);
var Target_1 = __webpack_require__(1);
var View = (function () {
    function View() {
    }
    View.fetchElements = function (callback) {
        var _this = this;
        document.addEventListener("DOMContentLoaded", function () {
            var triggerList = APView.createFromTriggerElement(['[data-ap-scroll]'], Trigger_1.default);
            callback({
                triggerList: triggerList,
                targetList: _this.createTargetView(triggerList)
            });
        });
    };
    View.createTargetView = function (triggerList) {
        var selectors = [], targetList = [], targetViewList = [];
        triggerList.forEach(function (trigger) {
            if (parseInt(trigger.target, 10)) {
                trigger.setMoveCoordinate();
                targetViewList.push(trigger.createMoveCoordinate());
            }
            else if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        selectors = APModel.uniq(selectors);
        for (var i = 0; i < selectors.length; i++) {
            targetList.push(document.querySelectorAll(selectors[i]));
        }
        var createTargetList = APView.createFromTargetsElement(targetList, Target_1.default);
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(2);
if (true) {
    module.exports = _1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.scroll === 'undefined') {
        Object.assign(global.AP, { scroll: new _1.default });
    }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var _1 = __webpack_require__(10);
var Model = (function () {
    function Model(targetList, triggerList) {
        this.targetList = targetList;
        this.triggerList = triggerList;
        this.setTriggerCallBack();
        this.setTriggerTargetId();
    }
    Model.fromData = function (data) {
        return new Model(data.targetList ? APModel.createTargetModel(data.targetList, _1.Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, _1.Trigger) : []);
    };
    Model.prototype.setTriggerTargetId = function () {
        for (var i = 0; i < this.triggerList.length; i++) {
            this.triggerList[i].setTargetId(this.targetList);
        }
    };
    Model.prototype.setTriggerCallBack = function () {
        var _this = this;
        this.triggerList.forEach(function (trigger) {
            trigger.view.click(function (triggerView) {
                _this.triggerClick(trigger);
            }, true);
        });
    };
    Model.prototype.triggerClick = function (trigger) {
        for (var i = 0; i < this.targetList.length; i++) {
            this.targetList[i].scroll(trigger);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Target = (function () {
    function Target(id, triggerId, className, idName, coordinate, view) {
        this.id = id;
        this.triggerId = triggerId;
        this.className = className;
        this.idName = idName;
        this.coordinate = coordinate;
        this.view = view;
    }
    Target.fromData = function (data) {
        return new Target(data.id ? data.id : 1, data.triggerId ? data.triggerId : null, data.className ? data.className : null, data.idName ? data.idName : null, data.coordinate ? data.coordinate : 0, data ? data : null);
    };
    Target.prototype.scroll = function (trigger) {
        if (trigger.targetId == this.id) {
            this.view.scroll();
        }
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var Trigger = (function () {
    function Trigger(id, className, idName, target, targetId, coordinate, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.targetId = targetId;
        this.coordinate = coordinate;
        this.view = view;
    }
    Trigger.fromData = function (data) {
        return new Trigger(data.id ? data.id : 1, data.className ? data.className : null, data.idName ? data.idName : null, data.target ? data.target : null, data.targetId ? data.targetId : 0, data.coordinate ? data.coordinate : 0, data ? data : null);
    };
    Trigger.prototype.setTargetId = function (targetViewList) {
        var searchContents;
        if (this.target) {
            searchContents = APModel.search(targetViewList, this.target);
        }
        else {
            searchContents = APModel.search(targetViewList, { triggerId: this.id });
        }
        if (searchContents) {
            this.targetId = searchContents[0].id;
        }
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(9));


/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-switcher"] = factory();
	else
		root["ap-switcher"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-common"] = factory();
	else
		root["ap-common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.isArray = function (data) {
        return Array.isArray(data) || typeof data !== 'object' && /^\[(\d|[^[|,])/.test(data);
    };
    Model.isObject = function (data) {
        var type = typeof data;
        return type === 'function' || type === 'object' && !!data;
    };
    Model.getSearchItems = function (dataList, type) {
        if (!type)
            return;
        var key = Object.keys(type)[0];
        if (type === 'all') {
            return dataList;
        }
        else {
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        }
    };
    Model.stringToNumber = function (data) {
        if (parseInt(data, 10) && /^\d|(^\-)/.test(data)) {
            return parseInt(data, 10);
        }
        else {
            return data;
        }
    };
    Model.stringToObjectCheck = function (data) {
        return /{.*:.*}/.test(data);
    };
    Model.stringToJson = function (data) {
        return JSON.parse(data
            .replace(/([\$\w]+)\s*:/g, function (_, $1) { return '"' + $1 + '":'; })
            .replace(/'([^']+)'/g, function (_, $1) { return '"' + $1 + '"'; }));
    };
    Model.stringToArray = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            var splitList = data.replace(/^\[/g, '').replace(/\s+/g, '').replace(/\]$/g, '').split(","), newSplitList_1 = [];
            if (this.stringToObjectCheck(splitList)) {
                splitList.forEach(function (item) {
                    if (_this.stringToObjectCheck(item)) {
                        newSplitList_1.push(_this.stringToJson(item.trim()));
                    }
                    else {
                        newSplitList_1.push(_this.stringToNumber(item));
                    }
                });
                return newSplitList_1;
            }
            else {
                splitList.forEach(function (item) {
                    newSplitList_1.push(_this.stringToNumber(item));
                });
                return newSplitList_1;
            }
        }
        else {
            return data;
        }
    };
    Model.checkType = function (data) {
        switch (typeof data) {
            case 'object':
                return data;
            case 'number':
                return { id: data };
            case 'string':
                if (/^#/.test(data)) {
                    return { idName: data.substr(1) };
                }
                else if (/^\./.test(data)) {
                    return { className: data.substr(1) };
                }
                else if (/all/gi.test(data)) {
                    return 'all';
                }
                else if (this.stringToNumber(data)) {
                    return { id: data };
                }
                break;
        }
    };
    Model.search = function (dataList, type) {
        var _this = this;
        if (this.isArray(type)) {
            var keys_1 = [], searchItems_1 = [], resultItem_1 = [];
            this.stringToArray(type).forEach(function (item) {
                keys_1.push(_this.checkType(item));
            });
            keys_1.forEach(function (key) {
                searchItems_1 = _this.getSearchItems(dataList, key);
                searchItems_1.forEach(function (item) {
                    resultItem_1.push(item);
                });
            });
            return resultItem_1;
        }
        else {
            return this.getSearchItems(dataList, this.checkType(type));
        }
    };
    Model.uniq = function (stringArr) {
        var newArr = stringArr.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return newArr;
    };
    Model.flattenArray = function (array) {
        return [].concat.apply(array);
    };
    Model.createTriggerModel = function (triggerView, triggerClass) {
        var triggerList = [];
        triggerView.forEach(function (trigger) {
            triggerList.push(triggerClass.fromData(trigger));
        });
        return triggerList;
    };
    Model.createTargetModel = function (targetView, targetClass) {
        var targetList = [];
        targetView.forEach(function (target) {
            targetList.push(targetClass.fromData(target));
        });
        return targetList;
    };
    Model.setTriggerTargetId = function (triggerList, targetList) {
        for (var i = 0; i < triggerList.length; i++) {
            triggerList[i].setTargetId(targetList);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var View = (function () {
    function View() {
    }
    View.getFirstChildLastNode = function (child) {
        if (child.children.length > 0) {
            return this.getFirstChildLastNode(child.children[0]);
        }
        else {
            return child;
        }
    };
    View.createFromTriggerElement = function (selectors, trigger) {
        var triggerList = [], triggerViewList = [];
        selectors.forEach(function (selector) {
            triggerList.push(document.querySelectorAll(selector));
        });
        triggerList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                triggerViewList.push(trigger.fromData(nodeList[i]));
            }
        });
        return triggerViewList;
    };
    View.createTargetView = function (triggerList, target) {
        var selectors = this.getTargetSelectors(triggerList), targetNodeList = this.getTargetNodeList(selectors), createTargetList = this.createFromTargetsElement(targetNodeList, target);
        return this.getTargetViewList(createTargetList);
    };
    View.getTargetSelectors = function (triggerList) {
        var selectors = [];
        triggerList.forEach(function (trigger) {
            if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        return _1.default.uniq(selectors);
    };
    View.getTargetNodeList = function (selectors) {
        var targetNodeList = [];
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] !== "all") {
                targetNodeList.push(document.querySelectorAll(selectors[i]));
            }
        }
        return targetNodeList;
    };
    View.createFromTargetsElement = function (targetList, target) {
        var targetViewList = [];
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(target.fromData({ node: nodeList[i] }));
            }
        });
        return targetViewList;
    };
    View.getTargetViewList = function (createTargetList) {
        var targetViewList = [];
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(0);
var _2 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
if (true) {
    module.exports.Model = _1.default;
    module.exports.View = _2.default;
    module.exports.Target = index_1.Target;
    module.exports.Trigger = index_1.Trigger;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.model === 'undefined') {
        Object.assign(global.AP.common, { model: _1.default });
    }
    if (typeof global.AP.common.view === 'undefined') {
        Object.assign(global.AP.common, { view: _2.default });
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_target_num = 0;
var Target = (function () {
    function Target(id, idName, className, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_target_num;
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.callBackFunction = function () { };
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getItemNode = function () {
        return this.node;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(10));
__export(__webpack_require__(12));
__export(__webpack_require__(11));
__export(__webpack_require__(13));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(9);
var _2 = __webpack_require__(7);
var Switcher = (function () {
    function Switcher() {
        var _this = this;
        _2.default.fetchElements(function (data) {
            _this.model = _1.default.fromData(data);
        });
    }
    Switcher.prototype.create = function (data) {
    };
    Switcher.prototype.createTarget = function (data) {
    };
    Switcher.prototype.select = function (data) {
    };
    Switcher.prototype.resetSelected = function (data) {
    };
    return Switcher;
}());
exports.Switcher = Switcher;
exports.default = Switcher;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var TargetItem_1 = __webpack_require__(4);
var _created_contents_num = 0;
var Target = (function () {
    function Target(id, idName, className, items, selectedNumber, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.items = items;
        this.selectedNumber = selectedNumber;
        this.node = node;
        this.id = this.createContentsId();
        this.items = this.getItemNode(this.node);
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.items ? data.items : [], data.selectedNumber ? data.selectedNumber : 1, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_contents_num;
    };
    Target.prototype.getChildren = function (node) {
        var lastChildren = [];
        if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
                lastChildren.push(TargetItem_1.default.fromData({
                    parentId: this.id,
                    itemNumber: i + 1,
                    node: APView.getFirstChildLastNode(node.children[i])
                }));
            }
        }
        return lastChildren;
    };
    Target.prototype.getItemNode = function (node) {
        return this.getChildren(node);
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_contents_item_num = 0;
var TargetItem = (function () {
    function TargetItem(id, parentId, idName, className, itemNumber, isSelected, node) {
        this.id = id;
        this.parentId = parentId;
        this.idName = idName;
        this.className = className;
        this.itemNumber = itemNumber;
        this.isSelected = isSelected;
        this.node = node;
        this._SELECT_CLASS_NAME = 'show';
        this.id = this.createContentsItemId();
    }
    TargetItem.fromData = function (data) {
        return new TargetItem(0, data.parentId ? data.parentId : 1, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.itemNumber ? data.itemNumber : 1, data.isSelected ? data.isSelected : false, data.node ? data.node : null);
    };
    TargetItem.prototype.createContentsItemId = function () {
        return ++_created_contents_item_num;
    };
    TargetItem.prototype.removeSelectClass = function () {
        if (this.node.classList.contains(this._SELECT_CLASS_NAME)) {
            this.node.classList.remove(this._SELECT_CLASS_NAME);
        }
    };
    TargetItem.prototype.addSelectClass = function () {
        if (!this.node.classList.contains(this._SELECT_CLASS_NAME)) {
            this.node.classList.add(this._SELECT_CLASS_NAME);
        }
    };
    TargetItem.prototype.resetItem = function () {
        this.removeSelectClass();
    };
    TargetItem.prototype.selectItem = function () {
        this.addSelectClass();
    };
    return TargetItem;
}());
exports.TargetItem = TargetItem;
exports.default = TargetItem;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var TriggerItem_1 = __webpack_require__(6);
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, items, selectedNumber, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.items = items;
        this.selectedNumber = selectedNumber;
        this.target = target;
        this.node = node;
        this.id = this.createTriggerId();
        this.items = this.getItemNode(this.node);
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.items ? data.items : [], data.selectedNumber ? data.selectedNumber : 1, data.dataset.apSwitcher ? data.dataset.apSwitcher : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getChildren = function (node) {
        var lastChildren = [];
        for (var i = 0; i < node.children.length; i++) {
            lastChildren.push(TriggerItem_1.default.fromData({
                parentId: this.id,
                itemNumber: i + 1,
                node: APView.getFirstChildLastNode(node.children[i])
            }));
        }
        return lastChildren;
    };
    Trigger.prototype.getItemNode = function (node) {
        return this.getChildren(node);
    };
    Trigger.prototype.resetSelectedClassName = function () {
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_item_num = 0;
var TriggerItem = (function () {
    function TriggerItem(id, parentId, idName, className, itemNumber, isSelected, node) {
        this.id = id;
        this.parentId = parentId;
        this.idName = idName;
        this.className = className;
        this.itemNumber = itemNumber;
        this.isSelected = isSelected;
        this.node = node;
        this.selectCallBackFunction = function () { };
        this.resetCallBackFunction = function () { };
        this._SELECT_CLASS_NAME = 'active';
        this.id = this.createTriggerItemId();
        this.setEventListener();
    }
    TriggerItem.fromData = function (data) {
        return new TriggerItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.itemNumber ? data.itemNumber : 1, data.isSelected ? data.isSelected : false, data.node ? data.node : null);
    };
    TriggerItem.prototype.createTriggerItemId = function () {
        return ++_created_trigger_item_num;
    };
    TriggerItem.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (e) {
            e.preventDefault();
            _this.select(_this.selectCallBackFunction);
        }, false);
    };
    TriggerItem.prototype.resetSelected = function () {
    };
    TriggerItem.prototype.removeSelectClass = function () {
        if (this.node.classList.contains(this._SELECT_CLASS_NAME)) {
            this.node.classList.remove(this._SELECT_CLASS_NAME);
        }
    };
    TriggerItem.prototype.addSelectClass = function () {
        if (!this.node.classList.contains(this._SELECT_CLASS_NAME)) {
            this.node.classList.add(this._SELECT_CLASS_NAME);
        }
    };
    TriggerItem.prototype.select = function (fn, isFirst) {
        this.selectCallBackFunction = fn;
        if (!isFirst) {
            fn(this);
        }
    };
    TriggerItem.prototype.reset = function (fn, isFirst) {
        this.resetCallBackFunction = fn;
    };
    TriggerItem.prototype.resetItem = function () {
        this.removeSelectClass();
    };
    TriggerItem.prototype.selectItem = function () {
        this.addSelectClass();
    };
    return TriggerItem;
}());
exports.TriggerItem = TriggerItem;
exports.default = TriggerItem;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var Trigger_1 = __webpack_require__(5);
var Target_1 = __webpack_require__(3);
var View = (function () {
    function View() {
    }
    View.fetchElements = function (callback) {
        document.addEventListener("DOMContentLoaded", function () {
            var triggerList = APView.createFromTriggerElement(['[data-ap-switcher]'], Trigger_1.default);
            callback({
                triggerList: triggerList,
                targetList: APView.createTargetView(triggerList, Target_1.default)
            });
        });
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(2);
if (true) {
    module.exports = _1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.switcher === 'undefined') {
        Object.assign(global.AP, { switcher: new _1.default });
    }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var _1 = __webpack_require__(1);
var Model = (function () {
    function Model(targetList, triggerList) {
        this.targetList = targetList;
        this.triggerList = triggerList;
        this.setTriggerCallBack();
        this.setTriggerTargetId();
    }
    Model.fromData = function (data) {
        return new Model(data.targetList ? APModel.createTargetModel(data.targetList, _1.Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, _1.Trigger) : []);
    };
    Model.prototype.setTriggerCallBack = function () {
        var _this = this;
        this.triggerList.forEach(function (trigger) {
            var parent = trigger;
            trigger.items.forEach(function (item) {
                item.view.select(function (view) {
                    parent.select(view, _this.targetList);
                }, true);
            });
        });
    };
    Model.prototype.setTriggerTargetId = function () {
        for (var i = 0; i < this.triggerList.length; i++) {
            this.triggerList[i].setTargetId(this.targetList);
        }
    };
    Model.prototype.select = function (data) {
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
var Target = (function () {
    function Target(id, className, idName, items, selectedNumber, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.items = items;
        this.selectedNumber = selectedNumber;
        this.view = view;
        this.items = this.createItem(this.items);
        this.items[this.selectedNumber - 1].select();
    }
    Target.fromData = function (data) {
        return new Target(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.items ? data.items : null, data.selectedNumber ? data.selectedNumber : 1, data ? data : null);
    };
    Target.prototype.createItem = function (items) {
        var itemModels = [];
        for (var i = 0; i < items.length; i++) {
            itemModels.push(_1.TargetItem.fromData(items[i]));
        }
        return itemModels;
    };
    Target.prototype.selectItem = function (itemNumber) {
        this.selectedNumber = itemNumber;
        this.items[this.selectedNumber - 1].select();
    };
    Target.prototype.resetSelected = function () {
        this.items.forEach(function (item) {
            item.reset();
        });
    };
    Target.prototype.select = function (itemNumber) {
        this.resetSelected();
        this.selectItem(itemNumber);
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TargetItem = (function () {
    function TargetItem(id, parentId, className, idName, isShow, view) {
        this.id = id;
        this.parentId = parentId;
        this.className = className;
        this.idName = idName;
        this.isShow = isShow;
        this.view = view;
    }
    TargetItem.fromData = function (data) {
        return new TargetItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.isShow ? data.isShow : false, data ? data : null);
    };
    TargetItem.prototype.reset = function () {
        this.isShow = false;
        this.view.resetItem();
    };
    TargetItem.prototype.select = function () {
        this.isShow = true;
        this.view.selectItem();
    };
    return TargetItem;
}());
exports.TargetItem = TargetItem;
exports.default = TargetItem;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var _1 = __webpack_require__(1);
var Trigger = (function () {
    function Trigger(id, className, idName, items, itemLength, selectedNumber, target, targetId, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.items = items;
        this.itemLength = itemLength;
        this.selectedNumber = selectedNumber;
        this.target = target;
        this.targetId = targetId;
        this.view = view;
        this.items = this.createItem(this.items);
        this.items[selectedNumber - 1].select();
    }
    Trigger.fromData = function (data) {
        return new Trigger(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.items ? data.items : null, data.items.length, data.selectedNumber ? data.selectedNumber : 1, data.target ? data.target : null, data.targetId ? data.targetId : [], data ? data : null);
    };
    Trigger.prototype.createItem = function (items) {
        var itemModels = [];
        for (var i = 0; i < items.length; i++) {
            itemModels.push(_1.TriggerItem.fromData(items[i]));
        }
        return itemModels;
    };
    Trigger.prototype.setSelectedNumber = function (item) {
        this.selectedNumber = item.itemNumber;
    };
    Trigger.prototype.setTargetId = function (contentsViewList) {
        var searchContents = APModel.search(contentsViewList, this.target);
        if (searchContents) {
            for (var i = 0; i < searchContents.length; i++) {
                this.targetId.push(searchContents[i].id);
            }
        }
    };
    Trigger.prototype.select = function (selectItem, targetList) {
        this.selectItem(selectItem);
        for (var i = 0; i < this.targetId.length; i++) {
            for (var n = 0; n < targetList.length; n++) {
                if (targetList[n].id === this.targetId[i]) {
                    targetList[n].select(selectItem.itemNumber);
                }
            }
        }
    };
    Trigger.prototype.selectItem = function (selectItem) {
        this.resetSelected();
        this.setSelectedNumber(selectItem);
        this.items[selectItem.itemNumber - 1].select();
    };
    Trigger.prototype.resetSelected = function () {
        this.items.forEach(function (item) {
            item.reset();
        });
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TriggerItem = (function () {
    function TriggerItem(id, parentId, className, idName, itemNumber, isSelected, view) {
        this.id = id;
        this.parentId = parentId;
        this.className = className;
        this.idName = idName;
        this.itemNumber = itemNumber;
        this.isSelected = isSelected;
        this.view = view;
    }
    TriggerItem.fromData = function (data) {
        return new TriggerItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.itemNumber ? data.itemNumber : 0, data.isSelected ? data.isSelected : false, data ? data : null);
    };
    TriggerItem.prototype.reset = function () {
        this.isSelected = false;
        this.view.resetItem();
    };
    TriggerItem.prototype.select = function () {
        this.isSelected = true;
        this.view.selectItem();
    };
    return TriggerItem;
}());
exports.TriggerItem = TriggerItem;
exports.default = TriggerItem;


/***/ })
/******/ ]);
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-tab"] = factory();
	else
		root["ap-tab"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-common"] = factory();
	else
		root["ap-common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.isArray = function (data) {
        return Array.isArray(data) || typeof data !== 'object' && /^\[(\d|[^[|,])/.test(data);
    };
    Model.isObject = function (data) {
        var type = typeof data;
        return type === 'function' || type === 'object' && !!data;
    };
    Model.getSearchItems = function (dataList, type) {
        if (!type)
            return;
        var key = Object.keys(type)[0];
        if (type === 'all') {
            return dataList;
        }
        else {
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        }
    };
    Model.stringToNumber = function (data) {
        if (parseInt(data, 10) && /^\d|(^\-)/.test(data)) {
            return parseInt(data, 10);
        }
        else {
            return data;
        }
    };
    Model.stringToObjectCheck = function (data) {
        return /{.*:.*}/.test(data);
    };
    Model.stringToJson = function (data) {
        return JSON.parse(data
            .replace(/([\$\w]+)\s*:/g, function (_, $1) { return '"' + $1 + '":'; })
            .replace(/'([^']+)'/g, function (_, $1) { return '"' + $1 + '"'; }));
    };
    Model.stringToArray = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            var splitList = data.replace(/^\[/g, '').replace(/\s+/g, '').replace(/\]$/g, '').split(","), newSplitList_1 = [];
            if (this.stringToObjectCheck(splitList)) {
                splitList.forEach(function (item) {
                    if (_this.stringToObjectCheck(item)) {
                        newSplitList_1.push(_this.stringToJson(item.trim()));
                    }
                    else {
                        newSplitList_1.push(_this.stringToNumber(item));
                    }
                });
                return newSplitList_1;
            }
            else {
                splitList.forEach(function (item) {
                    newSplitList_1.push(_this.stringToNumber(item));
                });
                return newSplitList_1;
            }
        }
        else {
            return data;
        }
    };
    Model.checkType = function (data) {
        switch (typeof data) {
            case 'object':
                return data;
            case 'number':
                return { id: data };
            case 'string':
                if (/^#/.test(data)) {
                    return { idName: data.substr(1) };
                }
                else if (/^\./.test(data)) {
                    return { className: data.substr(1) };
                }
                else if (/all/gi.test(data)) {
                    return 'all';
                }
                else if (this.stringToNumber(data)) {
                    return { id: data };
                }
                break;
        }
    };
    Model.search = function (dataList, type) {
        var _this = this;
        if (this.isArray(type)) {
            var keys_1 = [], searchItems_1 = [], resultItem_1 = [];
            this.stringToArray(type).forEach(function (item) {
                keys_1.push(_this.checkType(item));
            });
            keys_1.forEach(function (key) {
                searchItems_1 = _this.getSearchItems(dataList, key);
                searchItems_1.forEach(function (item) {
                    resultItem_1.push(item);
                });
            });
            return resultItem_1;
        }
        else {
            return this.getSearchItems(dataList, this.checkType(type));
        }
    };
    Model.uniq = function (stringArr) {
        var newArr = stringArr.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return newArr;
    };
    Model.flattenArray = function (array) {
        return [].concat.apply(array);
    };
    Model.createTriggerModel = function (triggerView, triggerClass) {
        var triggerList = [];
        triggerView.forEach(function (trigger) {
            triggerList.push(triggerClass.fromData(trigger));
        });
        return triggerList;
    };
    Model.createTargetModel = function (targetView, targetClass) {
        var targetList = [];
        targetView.forEach(function (target) {
            targetList.push(targetClass.fromData(target));
        });
        return targetList;
    };
    Model.setTriggerTargetId = function (triggerList, targetList) {
        for (var i = 0; i < triggerList.length; i++) {
            triggerList[i].setTargetId(targetList);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var View = (function () {
    function View() {
    }
    View.getFirstChildLastNode = function (child) {
        if (child.children.length > 0) {
            return this.getFirstChildLastNode(child.children[0]);
        }
        else {
            return child;
        }
    };
    View.createFromTriggerElement = function (selectors, trigger) {
        var triggerList = [], triggerViewList = [];
        selectors.forEach(function (selector) {
            triggerList.push(document.querySelectorAll(selector));
        });
        triggerList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                triggerViewList.push(trigger.fromData(nodeList[i]));
            }
        });
        return triggerViewList;
    };
    View.createTargetView = function (triggerList, target) {
        var selectors = this.getTargetSelectors(triggerList), targetNodeList = this.getTargetNodeList(selectors), createTargetList = this.createFromTargetsElement(targetNodeList, target);
        return this.getTargetViewList(createTargetList);
    };
    View.getTargetSelectors = function (triggerList) {
        var selectors = [];
        triggerList.forEach(function (trigger) {
            if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        return _1.default.uniq(selectors);
    };
    View.getTargetNodeList = function (selectors) {
        var targetNodeList = [];
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] !== "all") {
                targetNodeList.push(document.querySelectorAll(selectors[i]));
            }
        }
        return targetNodeList;
    };
    View.createFromTargetsElement = function (targetList, target) {
        var targetViewList = [];
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(target.fromData({ node: nodeList[i] }));
            }
        });
        return targetViewList;
    };
    View.getTargetViewList = function (createTargetList) {
        var targetViewList = [];
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(0);
var _2 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
if (true) {
    module.exports.Model = _1.default;
    module.exports.View = _2.default;
    module.exports.Target = index_1.Target;
    module.exports.Trigger = index_1.Trigger;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.model === 'undefined') {
        Object.assign(global.AP.common, { model: _1.default });
    }
    if (typeof global.AP.common.view === 'undefined') {
        Object.assign(global.AP.common, { view: _2.default });
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_target_num = 0;
var Target = (function () {
    function Target(id, idName, className, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_target_num;
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.callBackFunction = function () { };
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getItemNode = function () {
        return this.node;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TargetItem = (function () {
    function TargetItem(id, parentId, className, idName, isShow, view) {
        this.id = id;
        this.parentId = parentId;
        this.className = className;
        this.idName = idName;
        this.isShow = isShow;
        this.view = view;
    }
    TargetItem.fromData = function (data) {
        return new TargetItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.isShow ? data.isShow : false, data ? data : null);
    };
    TargetItem.prototype.reset = function () {
        this.isShow = false;
        this.view.resetItem();
    };
    TargetItem.prototype.select = function () {
        this.isShow = true;
        this.view.selectItem();
    };
    return TargetItem;
}());
exports.TargetItem = TargetItem;
exports.default = TargetItem;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TriggerItem = (function () {
    function TriggerItem(id, parentId, className, idName, itemNumber, isSelected, isDisable, view) {
        this.id = id;
        this.parentId = parentId;
        this.className = className;
        this.idName = idName;
        this.itemNumber = itemNumber;
        this.isSelected = isSelected;
        this.isDisable = isDisable;
        this.view = view;
    }
    TriggerItem.fromData = function (data) {
        return new TriggerItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.itemNumber ? data.itemNumber : 0, data.isSelected ? data.isSelected : false, data.isDisable ? data.isDisable : false, data ? data : null);
    };
    TriggerItem.prototype.reset = function () {
        this.isSelected = false;
        this.view.resetItem();
    };
    TriggerItem.prototype.select = function () {
        this.isSelected = true;
        this.view.selectItem();
    };
    return TriggerItem;
}());
exports.TriggerItem = TriggerItem;
exports.default = TriggerItem;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(8);
var _2 = __webpack_require__(6);
var Tab = (function () {
    function Tab() {
        var _this = this;
        _2.default.fetchElements(function (data) {
            _this.model = _1.default.fromData(data);
        });
    }
    Tab.prototype.create = function (data) {
    };
    return Tab;
}());
exports.Tab = Tab;
exports.default = Tab;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_toggle_contents_num = 0;
var Target = (function () {
    function Target(id, idName, className, toggleClassName, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.toggleClassName = toggleClassName;
        this.node = node;
        this._DEFAULT_TOGGLE_CLASS_NAME = 'active';
        this.id = this.createContentsId();
        if (!this.toggleClassName) {
            this.toggleClassName = this._DEFAULT_TOGGLE_CLASS_NAME;
        }
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.toggleClassName ? data.toggleClassName : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_toggle_contents_num;
    };
    Target.prototype.toggleClass = function () {
        if (this.node.classList.contains(this.toggleClassName)) {
            this.node.classList.remove(this.toggleClassName);
        }
        else {
            this.node.classList.add(this.toggleClassName);
        }
    };
    Target.prototype.getItemNode = function (node) {
    };
    Target.prototype.toggle = function () {
        this.toggleClass();
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_toggle_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.toggleCallBackFunction = function () { };
        this.id = this.createTriggerId();
        this.setEventListener();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_toggle_trigger_num;
    };
    Trigger.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (e) {
            e.preventDefault();
            _this.toggle(_this.toggleCallBackFunction);
        }, false);
    };
    Trigger.prototype.toggle = function (fn, isFirst) {
        this.toggleCallBackFunction = fn;
        if (!isFirst) {
            fn(this);
        }
    };
    Trigger.prototype.getItemNode = function (node) {
    };
    Trigger.prototype.resetSelectedClassName = function () {
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var Trigger_1 = __webpack_require__(5);
var Target_1 = __webpack_require__(4);
var View = (function () {
    function View() {
    }
    View.fetchElements = function (callback) {
        document.addEventListener("DOMContentLoaded", function () {
            var triggerList = APView.createFromTriggerElement(['[data-ap-toggle]'], Trigger_1.default);
            callback({
                triggerList: triggerList,
                targetList: APView.createTargetView(triggerList, Target_1.default)
            });
        });
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(3);
if (true) {
    module.exports = _1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.tab === 'undefined') {
        Object.assign(global.AP, { tab: new _1.default });
    }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var _1 = __webpack_require__(11);
var Model = (function () {
    function Model(targetList, triggerList) {
        this.targetList = targetList;
        this.triggerList = triggerList;
        this.setTriggerCallBack();
        this.setTriggerTargetId();
    }
    Model.fromData = function (data) {
        return new Model(data.targetList ? APModel.createTargetModel(data.targetList, _1.Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, _1.Trigger) : []);
    };
    Model.prototype.setTriggerCallBack = function () {
        var _this = this;
        this.triggerList.forEach(function (trigger) {
            var parent = trigger;
            trigger.items.forEach(function (item) {
                item.view.select(function (view) {
                    parent.select(view, _this.targetList);
                }, true);
            });
        });
    };
    Model.prototype.setTriggerTargetId = function () {
        for (var i = 0; i < this.triggerList.length; i++) {
            this.triggerList[i].setTargetId(this.targetList);
        }
    };
    Model.prototype.select = function (data) {
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TargetItem_1 = __webpack_require__(1);
var Target = (function () {
    function Target(id, className, idName, items, selectedNumber, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.items = items;
        this.selectedNumber = selectedNumber;
        this.view = view;
        this.items = this.createItem(this.items);
        this.items[this.selectedNumber - 1].select();
    }
    Target.fromData = function (data) {
        return new Target(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.items ? data.items : null, data.selectedNumber ? data.selectedNumber : 1, data ? data : null);
    };
    Target.prototype.createItem = function (items) {
        var itemModels = [];
        for (var i = 0; i < items.length; i++) {
            itemModels.push(TargetItem_1.default.fromData(items[i]));
        }
        return itemModels;
    };
    Target.prototype.selectItem = function (itemNumber) {
        this.selectedNumber = itemNumber;
        this.items[this.selectedNumber - 1].select();
    };
    Target.prototype.resetSelected = function () {
        this.items.forEach(function (item) {
            item.reset();
        });
    };
    Target.prototype.select = function (itemNumber) {
        this.resetSelected();
        this.selectItem(itemNumber);
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var TriggerItem_1 = __webpack_require__(2);
var Trigger = (function () {
    function Trigger(id, className, idName, items, itemLength, selectedNumber, target, targetId, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.items = items;
        this.itemLength = itemLength;
        this.selectedNumber = selectedNumber;
        this.target = target;
        this.targetId = targetId;
        this.view = view;
        this.items = this.createItem(this.items);
        this.items[selectedNumber - 1].select();
    }
    Trigger.fromData = function (data) {
        return new Trigger(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.items ? data.items : null, data.items.length, data.selectedNumber ? data.selectedNumber : 1, data.target ? data.target : null, data.targetId ? data.targetId : [], data ? data : null);
    };
    Trigger.prototype.createItem = function (items) {
        var itemModels = [];
        for (var i = 0; i < items.length; i++) {
            itemModels.push(TriggerItem_1.default.fromData(items[i]));
        }
        return itemModels;
    };
    Trigger.prototype.searchItem = function (id) {
        return this.items.filter(function (item) {
            return (item.id == id);
        })[0];
    };
    Trigger.prototype.setSelectedNumber = function (item) {
        this.selectedNumber = item.itemNumber;
    };
    Trigger.prototype.setTargetId = function (contentsViewList) {
        var searchContents = APModel.search(contentsViewList, this.target);
        if (searchContents) {
            for (var i = 0; i < searchContents.length; i++) {
                this.targetId.push(searchContents[i].id);
            }
        }
    };
    Trigger.prototype.select = function (selectItem, targetList) {
        if (selectItem.isDisable)
            return;
        this.selectItem(selectItem);
        for (var i = 0; i < this.targetId.length; i++) {
            for (var n = 0; n < targetList.length; n++) {
                if (targetList[n].id === this.targetId[i]) {
                    targetList[n].select(selectItem.itemNumber);
                }
            }
        }
    };
    Trigger.prototype.selectItem = function (selectItem) {
        this.resetSelected();
        this.setSelectedNumber(selectItem);
        this.items[selectItem.itemNumber - 1].select();
    };
    Trigger.prototype.resetSelected = function () {
        this.items.forEach(function (item) {
            item.reset();
        });
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));
__export(__webpack_require__(1));
__export(__webpack_require__(10));
__export(__webpack_require__(2));


/***/ })
/******/ ]);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-toggle"] = factory();
	else
		root["ap-toggle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-common"] = factory();
	else
		root["ap-common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.isArray = function (data) {
        return Array.isArray(data) || typeof data !== 'object' && /^\[(\d|[^[|,])/.test(data);
    };
    Model.isObject = function (data) {
        var type = typeof data;
        return type === 'function' || type === 'object' && !!data;
    };
    Model.getSearchItems = function (dataList, type) {
        if (!type)
            return;
        var key = Object.keys(type)[0];
        if (type === 'all') {
            return dataList;
        }
        else {
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        }
    };
    Model.stringToNumber = function (data) {
        if (parseInt(data, 10) && /^\d|(^\-)/.test(data)) {
            return parseInt(data, 10);
        }
        else {
            return data;
        }
    };
    Model.stringToObjectCheck = function (data) {
        return /{.*:.*}/.test(data);
    };
    Model.stringToJson = function (data) {
        return JSON.parse(data
            .replace(/([\$\w]+)\s*:/g, function (_, $1) { return '"' + $1 + '":'; })
            .replace(/'([^']+)'/g, function (_, $1) { return '"' + $1 + '"'; }));
    };
    Model.stringToArray = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            var splitList = data.replace(/^\[/g, '').replace(/\s+/g, '').replace(/\]$/g, '').split(","), newSplitList_1 = [];
            if (this.stringToObjectCheck(splitList)) {
                splitList.forEach(function (item) {
                    if (_this.stringToObjectCheck(item)) {
                        newSplitList_1.push(_this.stringToJson(item.trim()));
                    }
                    else {
                        newSplitList_1.push(_this.stringToNumber(item));
                    }
                });
                return newSplitList_1;
            }
            else {
                splitList.forEach(function (item) {
                    newSplitList_1.push(_this.stringToNumber(item));
                });
                return newSplitList_1;
            }
        }
        else {
            return data;
        }
    };
    Model.checkType = function (data) {
        switch (typeof data) {
            case 'object':
                return data;
            case 'number':
                return { id: data };
            case 'string':
                if (/^#/.test(data)) {
                    return { idName: data.substr(1) };
                }
                else if (/^\./.test(data)) {
                    return { className: data.substr(1) };
                }
                else if (/all/gi.test(data)) {
                    return 'all';
                }
                else if (this.stringToNumber(data)) {
                    return { id: data };
                }
                break;
        }
    };
    Model.search = function (dataList, type) {
        var _this = this;
        if (this.isArray(type)) {
            var keys_1 = [], searchItems_1 = [], resultItem_1 = [];
            this.stringToArray(type).forEach(function (item) {
                keys_1.push(_this.checkType(item));
            });
            keys_1.forEach(function (key) {
                searchItems_1 = _this.getSearchItems(dataList, key);
                searchItems_1.forEach(function (item) {
                    resultItem_1.push(item);
                });
            });
            return resultItem_1;
        }
        else {
            return this.getSearchItems(dataList, this.checkType(type));
        }
    };
    Model.uniq = function (stringArr) {
        var newArr = stringArr.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return newArr;
    };
    Model.flattenArray = function (array) {
        return [].concat.apply(array);
    };
    Model.createTriggerModel = function (triggerView, triggerClass) {
        var triggerList = [];
        triggerView.forEach(function (trigger) {
            triggerList.push(triggerClass.fromData(trigger));
        });
        return triggerList;
    };
    Model.createTargetModel = function (targetView, targetClass) {
        var targetList = [];
        targetView.forEach(function (target) {
            targetList.push(targetClass.fromData(target));
        });
        return targetList;
    };
    Model.setTriggerTargetId = function (triggerList, targetList) {
        for (var i = 0; i < triggerList.length; i++) {
            triggerList[i].setTargetId(targetList);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var View = (function () {
    function View() {
    }
    View.getFirstChildLastNode = function (child) {
        if (child.children.length > 0) {
            return this.getFirstChildLastNode(child.children[0]);
        }
        else {
            return child;
        }
    };
    View.createFromTriggerElement = function (selectors, trigger) {
        var triggerList = [], triggerViewList = [];
        selectors.forEach(function (selector) {
            triggerList.push(document.querySelectorAll(selector));
        });
        triggerList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                triggerViewList.push(trigger.fromData(nodeList[i]));
            }
        });
        return triggerViewList;
    };
    View.createTargetView = function (triggerList, target) {
        var selectors = this.getTargetSelectors(triggerList), targetNodeList = this.getTargetNodeList(selectors), createTargetList = this.createFromTargetsElement(targetNodeList, target);
        return this.getTargetViewList(createTargetList);
    };
    View.getTargetSelectors = function (triggerList) {
        var selectors = [];
        triggerList.forEach(function (trigger) {
            if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        return _1.default.uniq(selectors);
    };
    View.getTargetNodeList = function (selectors) {
        var targetNodeList = [];
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] !== "all") {
                targetNodeList.push(document.querySelectorAll(selectors[i]));
            }
        }
        return targetNodeList;
    };
    View.createFromTargetsElement = function (targetList, target) {
        var targetViewList = [];
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(target.fromData({ node: nodeList[i] }));
            }
        });
        return targetViewList;
    };
    View.getTargetViewList = function (createTargetList) {
        var targetViewList = [];
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(0);
var _2 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
if (true) {
    module.exports.Model = _1.default;
    module.exports.View = _2.default;
    module.exports.Target = index_1.Target;
    module.exports.Trigger = index_1.Trigger;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.model === 'undefined') {
        Object.assign(global.AP.common, { model: _1.default });
    }
    if (typeof global.AP.common.view === 'undefined') {
        Object.assign(global.AP.common, { view: _2.default });
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_target_num = 0;
var Target = (function () {
    function Target(id, idName, className, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_target_num;
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.callBackFunction = function () { };
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getItemNode = function () {
        return this.node;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(6);
var _2 = __webpack_require__(4);
var Toggle = (function () {
    function Toggle() {
        var _this = this;
        if (Toggle._instance) {
            return Toggle._instance;
        }
        else {
            _2.default.fetchElements(function (data) {
                _this.model = _1.default.fromData(data);
            });
            Toggle._instance = this;
        }
    }
    Toggle.prototype.create = function (data) {
    };
    Toggle.prototype.select = function (data) {
    };
    Toggle.prototype.resetSelected = function (data) {
    };
    return Toggle;
}());
Toggle._instance = null;
exports.Toggle = Toggle;
exports.default = Toggle;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_toggle_contents_num = 0;
var Target = (function () {
    function Target(id, idName, className, toggleClassName, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.toggleClassName = toggleClassName;
        this.node = node;
        this._DEFAULT_TOGGLE_CLASS_NAME = 'active';
        this.id = this.createContentsId();
        if (!this.toggleClassName) {
            this.toggleClassName = this._DEFAULT_TOGGLE_CLASS_NAME;
        }
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.toggleClassName ? data.toggleClassName : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_toggle_contents_num;
    };
    Target.prototype.toggleClass = function () {
        if (this.node.classList.contains(this.toggleClassName)) {
            this.node.classList.remove(this.toggleClassName);
        }
        else {
            this.node.classList.add(this.toggleClassName);
        }
    };
    Target.prototype.getItemNode = function (node) {
    };
    Target.prototype.toggle = function () {
        this.toggleClass();
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_toggle_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.toggleCallBackFunction = function () { };
        this.id = this.createTriggerId();
        this.setEventListener();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_toggle_trigger_num;
    };
    Trigger.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (e) {
            e.preventDefault();
            _this.toggle(_this.toggleCallBackFunction);
        }, false);
    };
    Trigger.prototype.toggle = function (fn, isFirst) {
        this.toggleCallBackFunction = fn;
        if (!isFirst) {
            fn(this);
        }
    };
    Trigger.prototype.getItemNode = function (node) {
    };
    Trigger.prototype.resetSelectedClassName = function () {
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var Trigger_1 = __webpack_require__(3);
var Target_1 = __webpack_require__(2);
var View = (function () {
    function View() {
    }
    View.fetchElements = function (callback) {
        document.addEventListener("DOMContentLoaded", function () {
            var triggerList = APView.createFromTriggerElement(['[data-ap-toggle]'], Trigger_1.default);
            callback({
                triggerList: triggerList,
                targetList: APView.createTargetView(triggerList, Target_1.default)
            });
        });
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(1);
if (true) {
    module.exports = _1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.toggle === 'undefined') {
        Object.assign(global.AP, { toggle: new _1.default });
    }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var _1 = __webpack_require__(9);
var Model = (function () {
    function Model(targetList, triggerList) {
        this.targetList = targetList;
        this.triggerList = triggerList;
        this.setTriggerCallBack();
        this.setTriggerTargetId();
    }
    Model.fromData = function (data) {
        return new Model(data.targetList ? APModel.createTargetModel(data.targetList, _1.Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, _1.Trigger) : []);
    };
    Model.prototype.setTriggerCallBack = function () {
        var _this = this;
        this.triggerList.forEach(function (trigger) {
            trigger.view.toggle(function () {
                trigger.toggle(_this.targetList);
            }, true);
        });
    };
    Model.prototype.setTriggerTargetId = function () {
        for (var i = 0; i < this.triggerList.length; i++) {
            this.triggerList[i].setTargetId(this.targetList);
        }
    };
    Model.prototype.toggle = function (data) {
    };
    Model.prototype.getElements = function (data) {
        return APModel.search(this.targetList, data);
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Target = (function () {
    function Target(id, className, idName, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.view = view;
    }
    Target.fromData = function (data) {
        return new Target(data.id ? data.id : 1, data.className ? data.className : null, data.idName ? data.idName : null, data ? data : null);
    };
    Target.prototype.toggle = function () {
        this.view.toggle();
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var Trigger = (function () {
    function Trigger(id, className, idName, target, targetId, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.targetId = targetId;
        this.view = view;
    }
    Trigger.fromData = function (data) {
        return new Trigger(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.target ? data.target : null, data.targetId ? data.targetId : [], data ? data : null);
    };
    Trigger.prototype.setTargetId = function (contentsViewList) {
        var searchContents = APModel.search(contentsViewList, this.target);
        if (searchContents) {
            for (var i = 0; i < searchContents.length; i++) {
                this.targetId.push(searchContents[i].id);
            }
        }
    };
    Trigger.prototype.toggle = function (targetList) {
        for (var i = 0; i < this.targetId.length; i++) {
            for (var n = 0; n < targetList.length; n++) {
                if (targetList[i].id === this.targetId[i]) {
                    targetList[i].toggle();
                }
            }
        }
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(8));


/***/ })
/******/ ]);
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var Tab = __webpack_require__(6);
var Toggle = __webpack_require__(7);
var ScrollSpy = __webpack_require__(2);
var Dropdown = __webpack_require__(0);
var SideMenu = __webpack_require__(3);
var ModalWindow = __webpack_require__(1);
var SmoothScroll = __webpack_require__(4);
var Switcher = __webpack_require__(5);
var AtomicPackage = (function () {
    function AtomicPackage(option) {
        if (AtomicPackage._instance) {
            return AtomicPackage._instance;
        }
        else {
            this.modal = new ModalWindow;
            this.tab = new Tab;
            this.switcher = new Switcher;
            this.toggle = new Toggle;
            this.sideMenu = new SideMenu;
            this.scroll = new SmoothScroll;
            this.dropdown = new Dropdown;
            this.scrollSpy = new ScrollSpy;
            AtomicPackage._instance = this;
        }
    }
    return AtomicPackage;
}());
AtomicPackage._instance = null;
exports.AtomicPackage = AtomicPackage;
if (true) {
    module.exports = AtomicPackage;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: new AtomicPackage });
    }
}


/***/ })
/******/ ]);
});