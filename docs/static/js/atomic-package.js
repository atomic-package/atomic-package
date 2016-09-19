var AtomicPackages;
(function (AtomicPackages) {
    var AtomicPackageModel = (function () {
        function AtomicPackageModel() {
        }
        AtomicPackageModel.search = function (dataList, type) {
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
        AtomicPackageModel.checkType = function (data) {
            switch (typeof data) {
                case 'number':
                    return { id: data };
                    break;
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
                    break;
            }
        };
        return AtomicPackageModel;
    }());
    AtomicPackages.AtomicPackageModel = AtomicPackageModel;
})(AtomicPackages || (AtomicPackages = {}));
var AtomicPackageView;
(function (AtomicPackageView) {
    var ModalWindow = (function () {
        function ModalWindow(node) {
            this.node = node;
            this._OPEN_CLASS_NAME = 'open';
        }
        ModalWindow.fromData = function (data) {
            return new ModalWindow(data ? data : null);
        };
        ModalWindow.prototype.open = function () {
            this.node.classList.add(this._OPEN_CLASS_NAME);
        };
        ModalWindow.prototype.close = function () {
            if (this.node.classList.contains(this._OPEN_CLASS_NAME)) {
                this.node.classList.remove(this._OPEN_CLASS_NAME);
            }
        };
        ModalWindow.prototype.addIdName = function (idName) {
            this.node.id = idName;
        };
        ModalWindow.prototype.destroy = function () {
            var DOM = document.getElementById(this.node.id);
            DOM.parentNode.removeChild(DOM);
        };
        ModalWindow.prototype.createElement = function () {
        };
        return ModalWindow;
    }());
    AtomicPackageView.ModalWindow = ModalWindow;
    var ModalWindowBackDrop = (function () {
        function ModalWindowBackDrop() {
            this._BACKDROP_ELEMENT_CLASS_NAME = 'modalWindowBackDrop';
            this._SHOW_CLASS_NAME = 'show';
            this.callBackFunction = function () { };
            this.createElement();
            this.setEventListener();
        }
        ModalWindowBackDrop.prototype.setEventListener = function () {
            var _this = this;
            this.node.addEventListener('click', function (e) {
                e.preventDefault();
                _this.click(_this.callBackFunction);
            }, false);
        };
        ModalWindowBackDrop.prototype.createElement = function () {
            this.node = document.createElement("div");
            this.node.classList.add(this._BACKDROP_ELEMENT_CLASS_NAME);
            document.body.appendChild(this.node);
        };
        ModalWindowBackDrop.prototype.show = function () {
            this.node.classList.add(this._SHOW_CLASS_NAME);
        };
        ModalWindowBackDrop.prototype.hide = function () {
            if (this.node.classList.contains(this._SHOW_CLASS_NAME)) {
                this.node.classList.remove(this._SHOW_CLASS_NAME);
            }
        };
        ModalWindowBackDrop.prototype.click = function (fn, isFirst) {
            this.callBackFunction = fn;
            if (!isFirst) {
                fn();
            }
        };
        return ModalWindowBackDrop;
    }());
    AtomicPackageView.ModalWindowBackDrop = ModalWindowBackDrop;
    var ModalWindowTrigger = (function () {
        function ModalWindowTrigger(node, target, isOpener) {
            this.node = node;
            this.target = target;
            this.isOpener = isOpener;
            this.openCallBackFunction = function () { };
            this.closeCallBackFunction = function () { };
            this.setTarget(this.node);
            this.setEventListener();
        }
        ModalWindowTrigger.fromData = function (data) {
            return new ModalWindowTrigger(data ? data : null, null, true);
        };
        ModalWindowTrigger.prototype.setTarget = function (node) {
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
        ModalWindowTrigger.prototype.setEventListener = function () {
            var _this = this;
            this.node.addEventListener('click', function (e) {
                e.preventDefault();
                if (_this.isOpener) {
                    _this.open(_this.openCallBackFunction);
                }
                else {
                    _this.close(_this.closeCallBackFunction);
                }
            }, false);
        };
        ModalWindowTrigger.prototype.open = function (fn, isFirst) {
            this.openCallBackFunction = fn;
            if (!isFirst) {
                fn(this.target);
            }
        };
        ModalWindowTrigger.prototype.close = function (fn, isFirst) {
            this.closeCallBackFunction = fn;
            if (!isFirst) {
                fn(this.target);
            }
        };
        return ModalWindowTrigger;
    }());
    AtomicPackageView.ModalWindowTrigger = ModalWindowTrigger;
})(AtomicPackageView || (AtomicPackageView = {}));
var AtomicPackages;
(function (AtomicPackages) {
    var AtomicPackageView = (function () {
        function AtomicPackageView() {
        }
        return AtomicPackageView;
    }());
    AtomicPackages.AtomicPackageView = AtomicPackageView;
})(AtomicPackages || (AtomicPackages = {}));
var AtomicPackageModel;
(function (AtomicPackageModel) {
    var ModalWindow = (function () {
        function ModalWindow(id, className, idName, isOpen, view) {
            this.id = id;
            this.className = className;
            this.idName = idName;
            this.isOpen = isOpen;
            this.view = view;
            this.addIdName();
        }
        ModalWindow.fromData = function (data) {
            return new ModalWindow(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.isOpen ? data.isOpen : false, data.view ? data.view : null);
        };
        ModalWindow.prototype.addIdName = function () {
            this.view.addIdName(this.idName);
        };
        ModalWindow.prototype.open = function () {
            this.isOpen = true;
            this.view.open();
        };
        ModalWindow.prototype.close = function () {
            this.isOpen = false;
            this.view.close();
        };
        ModalWindow.prototype.destroy = function () {
            this.view.destroy();
        };
        return ModalWindow;
    }());
    AtomicPackageModel.ModalWindow = ModalWindow;
    var ModalWindowBackDrop = (function () {
        function ModalWindowBackDrop(isShow, view) {
            this.isShow = isShow;
            this.view = view;
        }
        ModalWindowBackDrop.fromData = function (data) {
            return new ModalWindowBackDrop(data.isShow ? data.isShow : false, data.view ? data.view : null);
        };
        ModalWindowBackDrop.prototype.show = function () {
            this.isShow = true;
            this.view.show();
        };
        ModalWindowBackDrop.prototype.hide = function () {
            this.isShow = false;
            this.view.hide();
        };
        return ModalWindowBackDrop;
    }());
    AtomicPackageModel.ModalWindowBackDrop = ModalWindowBackDrop;
    var ModalWindowTrigger = (function () {
        function ModalWindowTrigger(view) {
            this.view = view;
        }
        ModalWindowTrigger.fromData = function (data) {
            return new ModalWindowTrigger(data.view ? data.view : null);
        };
        return ModalWindowTrigger;
    }());
    AtomicPackageModel.ModalWindowTrigger = ModalWindowTrigger;
})(AtomicPackageModel || (AtomicPackageModel = {}));
var Controller;
(function (Controller) {
    var APModel = AtomicPackages.AtomicPackageModel;
    var Modal = AtomicPackageModel.ModalWindow;
    var ModalView = AtomicPackageView.ModalWindow;
    var BackDrop = AtomicPackageModel.ModalWindowBackDrop;
    var BackDropView = AtomicPackageView.ModalWindowBackDrop;
    var Trigger = AtomicPackageModel.ModalWindowTrigger;
    var TriggerView = AtomicPackageView.ModalWindowTrigger;
    var ModalWindow = (function () {
        function ModalWindow() {
            var _this = this;
            this._created_modal_window_num = 0;
            this.list = [];
            this.backDrop = null;
            this.triggerList = [];
            this._DEFAULT_ID_NAME = 'modalWindow';
            this._DEFAULT_CLASS_NAME = 'modalWindow';
            document.addEventListener("DOMContentLoaded", function () {
                _this.createFromElement(document.querySelectorAll('.' + _this._DEFAULT_CLASS_NAME));
                _this.createTriggerFromElement(document.querySelectorAll('[data-ap-modal]'));
                _this.createTriggerFromElement(document.querySelectorAll('[data-ap-modal-close]'));
            });
        }
        ModalWindow.prototype.createId = function () {
            return ++this._created_modal_window_num;
        };
        ModalWindow.prototype.createFromElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.create({
                    className: nodeList[i].className,
                    idName: nodeList[i].id ? nodeList[i].id : null,
                    view: ModalView.fromData(nodeList[i])
                });
            }
            if (nodeList.length > 0 && this.backDrop === null) {
                this.backDrop = BackDrop.fromData({
                    view: new BackDropView
                });
                this.setBackDropCallBack();
            }
        };
        ModalWindow.prototype.createTriggerFromElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.triggerList.push(Trigger.fromData({
                    view: TriggerView.fromData(nodeList[i])
                }));
            }
            this.setTriggerCallBack();
        };
        ModalWindow.prototype.setBackDropCallBack = function () {
            var _this = this;
            this.backDrop.view.click(function () {
                _this.close('all');
            }, true);
        };
        ModalWindow.prototype.setTriggerCallBack = function () {
            var _this = this;
            this.triggerList.forEach(function (trigger) {
                trigger.view.open(function (target) {
                    _this.open(target);
                }, true);
                trigger.view.close(function (target) {
                    _this.close(target);
                }, true);
            });
        };
        ModalWindow.prototype.matchModal = function (searchModals) {
            var matchModals = [];
            this.list.forEach(function (modal) {
                searchModals.forEach(function (searchModal) {
                    if (modal == searchModal) {
                        matchModals.push(modal);
                    }
                });
            });
            return matchModals;
        };
        ModalWindow.prototype.openCheck = function () {
            var isOpen = false;
            this.list.forEach(function (modal) {
                if (modal.isOpen) {
                    isOpen = true;
                }
            });
            return isOpen;
        };
        ModalWindow.prototype.open = function (data) {
            var searchModals = APModel.search(this.list, APModel.checkType(data));
            if (searchModals.length > 0) {
                var matchModals = this.matchModal(searchModals);
                matchModals.forEach(function (modal) {
                    modal.open();
                });
                this.backDrop.show();
            }
        };
        ModalWindow.prototype.close = function (data) {
            var searchModals = APModel.search(this.list, APModel.checkType(data));
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
        ModalWindow.prototype.create = function (data) {
            if (data !== void 0) {
                var idNumber = this.createId();
                this.list.push(Modal.fromData({
                    id: idNumber,
                    className: data.className ? data.className : this._DEFAULT_CLASS_NAME,
                    idName: data.idName ? data.idName : String(this._DEFAULT_ID_NAME + idNumber),
                    view: data.view ? data.view : null
                }));
            }
            else {
                var idNumber = this.createId();
                this.list.push(Modal.fromData({
                    id: idNumber,
                    className: this._DEFAULT_CLASS_NAME,
                    idName: String(this._DEFAULT_ID_NAME + idNumber),
                    view: null
                }));
            }
        };
        ModalWindow.prototype.destroy = function (data) {
            var searchModals = APModel.search(this.list, APModel.checkType(data)), newList = [];
            if (searchModals.length > 0) {
                this.list.forEach(function (modal) {
                    searchModals.forEach(function (searchModal) {
                        if (modal !== searchModal) {
                            newList.push(modal);
                        }
                        else {
                            modal.destroy();
                        }
                    });
                });
                this.list = newList;
            }
        };
        ModalWindow.prototype.update = function () {
        };
        ModalWindow.prototype.getElements = function (data) {
            return APModel.search(this.list, APModel.checkType(data));
        };
        return ModalWindow;
    }());
    Controller.ModalWindow = ModalWindow;
})(Controller || (Controller = {}));
var Model;
(function (Model) {
    var Button = (function () {
        function Button() {
        }
        return Button;
    }());
    Model.Button = Button;
})(Model || (Model = {}));
var AtomicPackageView;
(function (AtomicPackageView) {
    var Button = (function () {
        function Button() {
        }
        return Button;
    }());
    AtomicPackageView.Button = Button;
})(AtomicPackageView || (AtomicPackageView = {}));
var Controller;
(function (Controller) {
    var Button = (function () {
        function Button() {
        }
        return Button;
    }());
    Controller.Button = Button;
})(Controller || (Controller = {}));
var AtomicPackageModel;
(function (AtomicPackageModel) {
    var Switcher = (function () {
        function Switcher() {
        }
        return Switcher;
    }());
    AtomicPackageModel.Switcher = Switcher;
})(AtomicPackageModel || (AtomicPackageModel = {}));
var AtomicPackageView;
(function (AtomicPackageView) {
    var Switcher = (function () {
        function Switcher() {
        }
        return Switcher;
    }());
    AtomicPackageView.Switcher = Switcher;
})(AtomicPackageView || (AtomicPackageView = {}));
var Controller;
(function (Controller) {
    var Switcher = (function () {
        function Switcher() {
        }
        return Switcher;
    }());
    Controller.Switcher = Switcher;
})(Controller || (Controller = {}));
var AtomicPackageModel;
(function (AtomicPackageModel) {
    var Dropdown = (function () {
        function Dropdown() {
        }
        return Dropdown;
    }());
    AtomicPackageModel.Dropdown = Dropdown;
})(AtomicPackageModel || (AtomicPackageModel = {}));
var AtomicPackageView;
(function (AtomicPackageView) {
    var Dropdown = (function () {
        function Dropdown() {
        }
        return Dropdown;
    }());
    AtomicPackageView.Dropdown = Dropdown;
})(AtomicPackageView || (AtomicPackageView = {}));
var Controller;
(function (Controller) {
    var Dropdown = (function () {
        function Dropdown() {
        }
        return Dropdown;
    }());
    Controller.Dropdown = Dropdown;
})(Controller || (Controller = {}));
var AtomicPackageModel;
(function (AtomicPackageModel) {
    var ScrollSpy = (function () {
        function ScrollSpy() {
        }
        return ScrollSpy;
    }());
    AtomicPackageModel.ScrollSpy = ScrollSpy;
})(AtomicPackageModel || (AtomicPackageModel = {}));
var Controller;
(function (Controller) {
    var ScrollSpy = (function () {
        function ScrollSpy() {
        }
        return ScrollSpy;
    }());
    Controller.ScrollSpy = ScrollSpy;
})(Controller || (Controller = {}));
var AtomicPackageModel;
(function (AtomicPackageModel) {
    var SmoothScroll = (function () {
        function SmoothScroll() {
        }
        return SmoothScroll;
    }());
    AtomicPackageModel.SmoothScroll = SmoothScroll;
})(AtomicPackageModel || (AtomicPackageModel = {}));
var AtomicPackageView;
(function (AtomicPackageView) {
    var SmoothScroll = (function () {
        function SmoothScroll() {
        }
        return SmoothScroll;
    }());
    AtomicPackageView.SmoothScroll = SmoothScroll;
})(AtomicPackageView || (AtomicPackageView = {}));
var Controller;
(function (Controller) {
    var SmoothScroll = (function () {
        function SmoothScroll() {
        }
        return SmoothScroll;
    }());
    Controller.SmoothScroll = SmoothScroll;
})(Controller || (Controller = {}));
var AtomicPackageModel;
(function (AtomicPackageModel) {
    var Toggle = (function () {
        function Toggle() {
        }
        return Toggle;
    }());
    AtomicPackageModel.Toggle = Toggle;
})(AtomicPackageModel || (AtomicPackageModel = {}));
var AtomicPackageView;
(function (AtomicPackageView) {
    var Toggle = (function () {
        function Toggle() {
        }
        return Toggle;
    }());
    AtomicPackageView.Toggle = Toggle;
})(AtomicPackageView || (AtomicPackageView = {}));
var Controller;
(function (Controller) {
    var Toggle = (function () {
        function Toggle() {
        }
        return Toggle;
    }());
    Controller.Toggle = Toggle;
})(Controller || (Controller = {}));
var AtomicPackages;
(function (AtomicPackages) {
    var ModalWindow = Controller.ModalWindow;
    var Button = Controller.Button;
    var Switcher = Controller.Switcher;
    var AtomicPackageController = (function () {
        function AtomicPackageController() {
            this.model = new AtomicPackages.AtomicPackageModel();
            this.view = new AtomicPackages.AtomicPackageView();
            this.modal = new ModalWindow();
            this.btn = new Button();
            this.switcher = new Switcher();
        }
        return AtomicPackageController;
    }());
    AtomicPackages.AtomicPackageController = AtomicPackageController;
})(AtomicPackages || (AtomicPackages = {}));
'use strict';
var e = eval, global = e('this');
var AtomicPackages;
(function (AtomicPackages) {
    var AtomicPackage = (function () {
        function AtomicPackage(option) {
            if (AtomicPackage._instance) {
                return AtomicPackage._instance;
            }
            else {
                var controller = new AtomicPackages.AtomicPackageController();
                this.modal = controller.modal;
                this.btn = controller.btn;
                this.switcher = controller.switcher;
                AtomicPackage._instance = this;
            }
        }
        AtomicPackage._instance = null;
        return AtomicPackage;
    }());
    AtomicPackages.AtomicPackage = AtomicPackage;
})(AtomicPackages || (AtomicPackages = {}));
if (typeof (module) !== 'undefined') {
    if (typeof (module).exports.AP === 'undefined') {
        (module).exports.AP = new AtomicPackages.AtomicPackage();
    }
}
if (typeof (global) !== 'undefined') {
    if (typeof global['AP'] === 'undefined') {
        global['AP'] = new AtomicPackages.AtomicPackage({});
    }
}
var AtomicPackages;
(function (AtomicPackages) {
    var Utility = (function () {
        function Utility() {
            this._FAKE_ELEMENT = 'fakeelement';
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
        }
        Utility.prototype.createFakeElement = function () {
            return document.createElement(this._FAKE_ELEMENT);
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
        return Utility;
    }());
    AtomicPackages.Utility = Utility;
})(AtomicPackages || (AtomicPackages = {}));
var AtomicPackageModel;
(function (AtomicPackageModel) {
    var SideMenu = (function () {
        function SideMenu() {
        }
        return SideMenu;
    }());
    AtomicPackageModel.SideMenu = SideMenu;
})(AtomicPackageModel || (AtomicPackageModel = {}));
var AtomicPackageView;
(function (AtomicPackageView) {
    var SideMenu = (function () {
        function SideMenu() {
        }
        return SideMenu;
    }());
    AtomicPackageView.SideMenu = SideMenu;
})(AtomicPackageView || (AtomicPackageView = {}));
var Controller;
(function (Controller) {
    var SideMenu = (function () {
        function SideMenu() {
        }
        return SideMenu;
    }());
    Controller.SideMenu = SideMenu;
})(Controller || (Controller = {}));
