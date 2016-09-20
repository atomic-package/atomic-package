var AtomicPackages;
(function (AtomicPackages) {
    var Model = (function () {
        function Model() {
        }
        Model.isArray = function (data) {
            return Array.isArray(data) || /^\[/.test(data);
        };
        Model.getSearchItems = function (dataList, type) {
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
        Model.stringToArray = function (data) {
            var _this = this;
            if (typeof data === 'string') {
                var splitList = data.replace(/^\[/g, '').replace(/\]$/g, '').split(","), newSplitList = [];
                splitList.forEach(function (item) {
                    newSplitList.push(_this.stringToNumber(item));
                });
                return newSplitList;
            }
            else {
                return data;
            }
        };
        Model.stringToNumber = function (data) {
            if (parseInt(data, 10)) {
                return parseInt(data, 10);
            }
            else {
                return data;
            }
        };
        Model.checkType = function (data) {
            switch (typeof data) {
                case 'object':
                    return data;
                    break;
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
                    else if (this.stringToNumber(data)) {
                        return { id: data };
                    }
                    break;
            }
        };
        Model.search = function (dataList, type) {
            var _this = this;
            if (this.isArray(type)) {
                var keys = [], searchItems = [], resultItem = [];
                this.stringToArray(type).forEach(function (item) {
                    keys.push(_this.checkType(item));
                });
                keys.forEach(function (key) {
                    searchItems = _this.getSearchItems(dataList, key);
                    searchItems.forEach(function (item) {
                        resultItem.push(item);
                    });
                });
                return resultItem;
            }
            else {
                return this.getSearchItems(dataList, this.checkType(type));
            }
        };
        return Model;
    }());
    AtomicPackages.Model = Model;
})(AtomicPackages || (AtomicPackages = {}));
var ModalWindowView;
(function (ModalWindowView) {
    var _created_modal_window_num = 0;
    var _created_trigger_num = 0;
    var ModalWindow = (function () {
        function ModalWindow(id, idName, className, isOpen, node) {
            this.id = id;
            this.idName = idName;
            this.className = className;
            this.isOpen = isOpen;
            this.node = node;
            this._OPEN_CLASS_NAME = 'open';
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
        }
        ModalWindow.fromData = function (data) {
            return new ModalWindow(0, data.id ? data.id : null, data.className ? data.className : null, false, data ? data : null);
        };
        ModalWindow.fetchElements = function (callback) {
            var modalElements = {
                modal: [],
                trigger: []
            };
            document.addEventListener("DOMContentLoaded", function () {
                modalElements.modal.push(document.querySelectorAll('.modalWindow'));
                modalElements.trigger.push(document.querySelectorAll('[data-ap-modal]'));
                modalElements.trigger.push(document.querySelectorAll('[data-ap-modal-close]'));
                callback(modalElements);
            });
        };
        ModalWindow.create = function () {
            return this.fromData({});
        };
        ModalWindow.prototype.createModalWindowId = function () {
            return ++_created_modal_window_num;
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
    ModalWindowView.ModalWindow = ModalWindow;
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
    ModalWindowView.ModalWindowBackDrop = ModalWindowBackDrop;
    var ModalWindowTrigger = (function () {
        function ModalWindowTrigger(id, node, target, isOpener) {
            this.id = id;
            this.node = node;
            this.target = target;
            this.isOpener = isOpener;
            this.openCallBackFunction = function () { };
            this.closeCallBackFunction = function () { };
            this.setTarget(this.node);
            this.setEventListener();
        }
        ModalWindowTrigger.fromData = function (data) {
            return new ModalWindowTrigger(0, data ? data : null, null, true);
        };
        ModalWindowTrigger.prototype.createTriggerId = function () {
            return ++_created_trigger_num;
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
    ModalWindowView.ModalWindowTrigger = ModalWindowTrigger;
})(ModalWindowView || (ModalWindowView = {}));
var AtomicPackages;
(function (AtomicPackages) {
    var View = (function () {
        function View() {
        }
        return View;
    }());
    AtomicPackages.View = View;
})(AtomicPackages || (AtomicPackages = {}));
var ModalWindowModel;
(function (ModalWindowModel) {
    var ModalWindow = (function () {
        function ModalWindow(id, className, idName, isOpen, view) {
            this.id = id;
            this.className = className;
            this.idName = idName;
            this.isOpen = isOpen;
            this.view = view;
        }
        ModalWindow.fromData = function (data) {
            return new ModalWindow(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.isOpen ? data.isOpen : false, data.view ? data.view : null);
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
    ModalWindowModel.ModalWindow = ModalWindow;
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
    ModalWindowModel.ModalWindowBackDrop = ModalWindowBackDrop;
    var ModalWindowTrigger = (function () {
        function ModalWindowTrigger(view) {
            this.view = view;
        }
        ModalWindowTrigger.fromData = function (data) {
            return new ModalWindowTrigger(data.view ? data.view : null);
        };
        return ModalWindowTrigger;
    }());
    ModalWindowModel.ModalWindowTrigger = ModalWindowTrigger;
})(ModalWindowModel || (ModalWindowModel = {}));
var ModalWindowController;
(function (ModalWindowController) {
    var APModel = AtomicPackages.Model;
    var Modal = ModalWindowModel.ModalWindow;
    var ModalView = ModalWindowView.ModalWindow;
    var BackDrop = ModalWindowModel.ModalWindowBackDrop;
    var BackDropView = ModalWindowView.ModalWindowBackDrop;
    var Trigger = ModalWindowModel.ModalWindowTrigger;
    var TriggerView = ModalWindowView.ModalWindowTrigger;
    var ModalWindow = (function () {
        function ModalWindow() {
            var _this = this;
            this.list = [];
            this.backDrop = null;
            this.triggerList = [];
            ModalView.fetchElements(function (data) {
                data.modal.forEach(function (nodeList) {
                    _this.createFromElement(nodeList);
                });
                data.trigger.forEach(function (nodeList) {
                    _this.createTriggerFromElement(nodeList);
                });
            });
        }
        ModalWindow.prototype.createFromElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.createModalModel(ModalView.fromData(nodeList[i]));
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
        ModalWindow.prototype.createModalModel = function (modalView) {
            this.create({
                id: modalView.id,
                idName: modalView.idName,
                className: modalView.className,
                isOpen: modalView.isOpen,
                view: modalView
            });
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
            var searchModals = APModel.search(this.list, data);
            if (searchModals.length > 0) {
                var matchModals = this.matchModal(searchModals);
                matchModals.forEach(function (modal) {
                    modal.open();
                });
                this.backDrop.show();
            }
        };
        ModalWindow.prototype.close = function (data) {
            var searchModals = APModel.search(this.list, data);
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
                this.list.push(Modal.fromData(data));
            }
            else {
                this.list.push(Modal.fromData(ModalView.create()));
            }
        };
        ModalWindow.prototype.destroy = function (data) {
            var searchModals = APModel.search(this.list, data), newList = [];
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
            return APModel.search(this.list, data);
        };
        return ModalWindow;
    }());
    ModalWindowController.ModalWindow = ModalWindow;
})(ModalWindowController || (ModalWindowController = {}));
var ButtonModel;
(function (ButtonModel) {
    var Button = (function () {
        function Button() {
        }
        return Button;
    }());
    ButtonModel.Button = Button;
})(ButtonModel || (ButtonModel = {}));
var ButtonView;
(function (ButtonView) {
    var Button = (function () {
        function Button() {
        }
        return Button;
    }());
    ButtonView.Button = Button;
})(ButtonView || (ButtonView = {}));
var ButtonController;
(function (ButtonController) {
    var Button = (function () {
        function Button() {
        }
        return Button;
    }());
    ButtonController.Button = Button;
})(ButtonController || (ButtonController = {}));
var SwitcherModel;
(function (SwitcherModel) {
    var Trigger = (function () {
        function Trigger(id, className, idName, items, itemLength, selectedNumber, view) {
            this.id = id;
            this.className = className;
            this.idName = idName;
            this.items = items;
            this.itemLength = itemLength;
            this.selectedNumber = selectedNumber;
            this.view = view;
        }
        Trigger.fromData = function (data) {
            return new Trigger(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.items ? data.items : null, data.selectedNumber ? data.selectedNumber : 1, data.items.length, data.view ? data.view : null);
        };
        return Trigger;
    }());
    SwitcherModel.Trigger = Trigger;
    var TriggerItem = (function () {
        function TriggerItem(id, parentId, className, idName, isSelected, view) {
            this.id = id;
            this.parentId = parentId;
            this.className = className;
            this.idName = idName;
            this.isSelected = isSelected;
            this.view = view;
        }
        TriggerItem.fromData = function (data) {
            return new TriggerItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.isSelected ? data.isSelected : false, data.view ? data.view : null);
        };
        return TriggerItem;
    }());
    SwitcherModel.TriggerItem = TriggerItem;
    var Contents = (function () {
        function Contents(id, className, idName, items, selectedNumber, view) {
            this.id = id;
            this.className = className;
            this.idName = idName;
            this.items = items;
            this.selectedNumber = selectedNumber;
            this.view = view;
        }
        Contents.fromData = function (data) {
            return new Contents(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.items ? data.items : null, data.selectedNumber ? data.selectedNumber : 1, data.view ? data.view : null);
        };
        return Contents;
    }());
    SwitcherModel.Contents = Contents;
    var ContentsItem = (function () {
        function ContentsItem(id, parentId, className, idName, isShow, view) {
            this.id = id;
            this.parentId = parentId;
            this.className = className;
            this.idName = idName;
            this.isShow = isShow;
            this.view = view;
        }
        ContentsItem.fromData = function (data) {
            return new ContentsItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.isShow ? data.isShow : false, data.view ? data.view : null);
        };
        return ContentsItem;
    }());
    SwitcherModel.ContentsItem = ContentsItem;
})(SwitcherModel || (SwitcherModel = {}));
var SwitcherView;
(function (SwitcherView) {
    var _created_trigger_num = 0;
    var _created_trigger_item_num = 0;
    var Trigger = (function () {
        function Trigger(id, node) {
            this.id = id;
            this.node = node;
            this.id = this.createTriggerId();
        }
        Trigger.fromData = function (data) {
            return new Trigger(0, data ? data : null);
        };
        Trigger.prototype.createTriggerId = function () {
            return ++_created_trigger_num;
        };
        Trigger.prototype.getChildren = function (children) {
            var lastChidren = [];
            for (var i = 0; i < children.length; i++) {
                lastChidren.push(TriggerItem.fromData({
                    parentId: this.id,
                    view: this.getLastChild(children[i])
                }));
            }
        };
        Trigger.prototype.getLastChild = function (child) {
            if (child.children.length > 0) {
                return this.getLastChild(child.children[0]);
            }
            else {
                return child;
            }
        };
        Trigger.prototype.getItemNode = function () {
            this.getChildren(this.node.children);
        };
        return Trigger;
    }());
    SwitcherView.Trigger = Trigger;
    var TriggerItem = (function () {
        function TriggerItem(id, parentId, className, idName, view) {
            this.id = id;
            this.parentId = parentId;
            this.className = className;
            this.idName = idName;
            this.view = view;
            this.id = this.createTriggerItemId();
        }
        TriggerItem.fromData = function (data) {
            return new TriggerItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.view ? data.view : null);
        };
        TriggerItem.prototype.createTriggerItemId = function () {
            return ++_created_trigger_item_num;
        };
        return TriggerItem;
    }());
    SwitcherView.TriggerItem = TriggerItem;
})(SwitcherView || (SwitcherView = {}));
var SwitcherController;
(function (SwitcherController) {
    var TriggerView = SwitcherView.Trigger;
    var Switcher = (function () {
        function Switcher() {
            var _this = this;
            this._created_contents_num = 0;
            this.triggerList = [];
            this.contentsList = [];
            document.addEventListener("DOMContentLoaded", function () {
                _this.createFromTriggerElement(document.querySelectorAll('[data-ap-switcher]'));
            });
        }
        Switcher.prototype.createContentsId = function () {
            return ++this._created_contents_num;
        };
        Switcher.prototype.createFromTriggerElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.createTriggerModel(TriggerView.fromData(nodeList[i]));
            }
        };
        Switcher.prototype.createTriggerModel = function (triggerView) {
            this.create({
                id: triggerView.id,
                className: triggerView.node.className,
                idName: triggerView.node.id ? triggerView.node.id : null,
                items: triggerView.getItemNode(),
                itemLength: triggerView.node.children.length,
                selectedNumber: null,
                view: triggerView.node
            });
        };
        Switcher.prototype.create = function (data) {
        };
        Switcher.prototype.select = function (data) {
        };
        return Switcher;
    }());
    SwitcherController.Switcher = Switcher;
})(SwitcherController || (SwitcherController = {}));
var DropdownModel;
(function (DropdownModel) {
    var Dropdown = (function () {
        function Dropdown() {
        }
        return Dropdown;
    }());
    DropdownModel.Dropdown = Dropdown;
})(DropdownModel || (DropdownModel = {}));
var DropdownView;
(function (DropdownView) {
    var Dropdown = (function () {
        function Dropdown() {
        }
        return Dropdown;
    }());
    DropdownView.Dropdown = Dropdown;
})(DropdownView || (DropdownView = {}));
var DropdownController;
(function (DropdownController) {
    var Dropdown = (function () {
        function Dropdown() {
        }
        return Dropdown;
    }());
    DropdownController.Dropdown = Dropdown;
})(DropdownController || (DropdownController = {}));
var ScrollSpyModel;
(function (ScrollSpyModel) {
    var ScrollSpy = (function () {
        function ScrollSpy() {
        }
        return ScrollSpy;
    }());
    ScrollSpyModel.ScrollSpy = ScrollSpy;
})(ScrollSpyModel || (ScrollSpyModel = {}));
var ScrollSpyView;
(function (ScrollSpyView) {
    var ScrollSpy = (function () {
        function ScrollSpy() {
        }
        return ScrollSpy;
    }());
    ScrollSpyView.ScrollSpy = ScrollSpy;
})(ScrollSpyView || (ScrollSpyView = {}));
var ScrollSpyController;
(function (ScrollSpyController) {
    var ScrollSpy = (function () {
        function ScrollSpy() {
        }
        return ScrollSpy;
    }());
    ScrollSpyController.ScrollSpy = ScrollSpy;
})(ScrollSpyController || (ScrollSpyController = {}));
var SmoothScrollModel;
(function (SmoothScrollModel) {
    var SmoothScroll = (function () {
        function SmoothScroll() {
        }
        return SmoothScroll;
    }());
    SmoothScrollModel.SmoothScroll = SmoothScroll;
})(SmoothScrollModel || (SmoothScrollModel = {}));
var SmoothScrollView;
(function (SmoothScrollView) {
    var SmoothScroll = (function () {
        function SmoothScroll() {
        }
        return SmoothScroll;
    }());
    SmoothScrollView.SmoothScroll = SmoothScroll;
})(SmoothScrollView || (SmoothScrollView = {}));
var SmoothScrollController;
(function (SmoothScrollController) {
    var SmoothScroll = (function () {
        function SmoothScroll() {
        }
        return SmoothScroll;
    }());
    SmoothScrollController.SmoothScroll = SmoothScroll;
})(SmoothScrollController || (SmoothScrollController = {}));
var ToggleModel;
(function (ToggleModel) {
    var Toggle = (function () {
        function Toggle() {
        }
        return Toggle;
    }());
    ToggleModel.Toggle = Toggle;
})(ToggleModel || (ToggleModel = {}));
var ToggleView;
(function (ToggleView) {
    var Toggle = (function () {
        function Toggle() {
        }
        return Toggle;
    }());
    ToggleView.Toggle = Toggle;
})(ToggleView || (ToggleView = {}));
var ToggleController;
(function (ToggleController) {
    var Toggle = (function () {
        function Toggle() {
        }
        return Toggle;
    }());
    ToggleController.Toggle = Toggle;
})(ToggleController || (ToggleController = {}));
var AtomicPackages;
(function (AtomicPackages) {
    var ModalWindow = ModalWindowController.ModalWindow;
    var Button = ButtonController.Button;
    var Switcher = SwitcherController.Switcher;
    var Controller = (function () {
        function Controller() {
            this.model = new AtomicPackages.Model();
            this.view = new AtomicPackages.View();
            this.modal = new ModalWindow();
            this.btn = new Button();
            this.switcher = new Switcher();
        }
        return Controller;
    }());
    AtomicPackages.Controller = Controller;
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
                var controller = new AtomicPackages.Controller();
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
var SideMenuModel;
(function (SideMenuModel) {
    var SideMenu = (function () {
        function SideMenu() {
        }
        return SideMenu;
    }());
    SideMenuModel.SideMenu = SideMenu;
})(SideMenuModel || (SideMenuModel = {}));
var SideMenuView;
(function (SideMenuView) {
    var SideMenu = (function () {
        function SideMenu() {
        }
        return SideMenu;
    }());
    SideMenuView.SideMenu = SideMenu;
})(SideMenuView || (SideMenuView = {}));
var SideMenuController;
(function (SideMenuController) {
    var SideMenu = (function () {
        function SideMenu() {
        }
        return SideMenu;
    }());
    SideMenuController.SideMenu = SideMenu;
})(SideMenuController || (SideMenuController = {}));
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
