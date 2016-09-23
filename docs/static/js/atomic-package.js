var AtomicPackages;
(function (AtomicPackages) {
    var Model = (function () {
        function Model() {
        }
        Model.isArray = function (data) {
            return Array.isArray(data) || /^\[/.test(data);
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
        Model.uniq = function (stringArr) {
            var newArr = stringArr.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            });
            return newArr;
        };
        Model.flattenArray = function (array) {
            return [].concat.apply(array);
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
            this.id = this.createTriggerId();
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
        View.getFirstChildLastNode = function (child) {
            if (child.children.length > 0) {
                return this.getFirstChildLastNode(child.children[0]);
            }
            else {
                return child;
            }
        };
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
    var APModel = AtomicPackages.Model;
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
                itemModels.push(TriggerItem.fromData(items[i]));
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
        Trigger.prototype.resetSelected = function () {
            this.items.forEach(function (item) {
                item.reset();
            });
        };
        Trigger.prototype.select = function (itemId) {
            var selectItem = this.searchItem(itemId);
            this.resetSelected();
            this.setSelectedNumber(selectItem);
            selectItem.select();
        };
        return Trigger;
    }());
    SwitcherModel.Trigger = Trigger;
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
    SwitcherModel.TriggerItem = TriggerItem;
    var Contents = (function () {
        function Contents(id, className, idName, items, selectedNumber, view) {
            this.id = id;
            this.className = className;
            this.idName = idName;
            this.items = items;
            this.selectedNumber = selectedNumber;
            this.view = view;
            this.items = this.createItem(this.items);
            this.items[selectedNumber - 1].select();
        }
        Contents.fromData = function (data) {
            return new Contents(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.items ? data.items : null, data.selectedNumber ? data.selectedNumber : 1, data ? data : null);
        };
        Contents.prototype.createItem = function (items) {
            var itemModels = [];
            for (var i = 0; i < items.length; i++) {
                itemModels.push(ContentsItem.fromData(items[i]));
            }
            return itemModels;
        };
        Contents.prototype.selectItem = function (itemNumber) {
            this.selectedNumber = itemNumber;
            this.items[this.selectedNumber - 1].select();
        };
        Contents.prototype.resetSelected = function () {
            this.items.forEach(function (item) {
                item.reset();
            });
        };
        Contents.prototype.select = function (trigger) {
            this.resetSelected();
            for (var i = 0; i < trigger.targetId.length; i++) {
                if (trigger.targetId[i] == this.id) {
                    this.selectItem(trigger.selectedNumber);
                }
            }
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
            return new ContentsItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.isShow ? data.isShow : false, data ? data : null);
        };
        ContentsItem.prototype.reset = function () {
            this.isShow = false;
            this.view.resetItem();
        };
        ContentsItem.prototype.select = function () {
            this.isShow = true;
            this.view.selectItem();
        };
        return ContentsItem;
    }());
    SwitcherModel.ContentsItem = ContentsItem;
})(SwitcherModel || (SwitcherModel = {}));
var SwitcherView;
(function (SwitcherView) {
    var APModel = AtomicPackages.Model;
    var APView = AtomicPackages.View;
    var _created_trigger_num = 0, _created_trigger_item_num = 0;
    var _created_contents_num = 0, _created_contents_item_num = 0;
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
        Trigger.fetchElements = function (callback) {
            var switcherElements = {
                trigger: [],
                contents: []
            };
            document.addEventListener("DOMContentLoaded", function () {
                var selectors = [];
                switcherElements.trigger.push(document.querySelectorAll('[data-ap-switcher]'));
                switcherElements.trigger.forEach(function (nodeList) {
                    nodeList.forEach(function (node) {
                        if (node.dataset.apSwitcher) {
                            selectors.push(node.dataset.apSwitcher);
                        }
                    });
                });
                selectors = APModel.uniq(selectors);
                for (var i = 0; i < selectors.length; i++) {
                    switcherElements.contents.push(document.querySelectorAll(selectors[i]));
                }
                callback(switcherElements);
            });
        };
        Trigger.prototype.createTriggerId = function () {
            return ++_created_trigger_num;
        };
        Trigger.prototype.getChildren = function (node) {
            var lastChildren = [];
            for (var i = 0; i < node.children.length; i++) {
                lastChildren.push(TriggerItem.fromData({
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
    SwitcherView.Trigger = Trigger;
    var TriggerItem = (function () {
        function TriggerItem(id, parentId, className, idName, itemNumber, isSelected, node) {
            this.id = id;
            this.parentId = parentId;
            this.className = className;
            this.idName = idName;
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
            return new TriggerItem(data.id ? data.id : 1, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.itemNumber ? data.itemNumber : 1, data.isSelected ? data.isSelected : false, data.node ? data.node : null);
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
    SwitcherView.TriggerItem = TriggerItem;
    var Contents = (function () {
        function Contents(id, idName, className, items, selectedNumber, node) {
            this.id = id;
            this.idName = idName;
            this.className = className;
            this.items = items;
            this.selectedNumber = selectedNumber;
            this.node = node;
            this.id = this.createContentsId();
            this.items = this.getItemNode(this.node);
        }
        Contents.fromData = function (data) {
            return new Contents(0, data.idName ? data.idName : data.id, data.className ? data.className : '', data.items ? data.items : [], data.selectedNumber ? data.selectedNumber : 1, data ? data : null);
        };
        Contents.prototype.createContentsId = function () {
            return ++_created_contents_num;
        };
        Contents.prototype.getChildren = function (node) {
            var lastChildren = [];
            for (var i = 0; i < node.children.length; i++) {
                lastChildren.push(ContentsItem.fromData({
                    parentId: this.id,
                    itemNumber: i + 1,
                    node: APView.getFirstChildLastNode(node.children[i])
                }));
            }
            return lastChildren;
        };
        Contents.prototype.getItemNode = function (node) {
            return this.getChildren(node);
        };
        return Contents;
    }());
    SwitcherView.Contents = Contents;
    var ContentsItem = (function () {
        function ContentsItem(id, parentId, className, idName, itemNumber, isSelected, node) {
            this.id = id;
            this.parentId = parentId;
            this.className = className;
            this.idName = idName;
            this.itemNumber = itemNumber;
            this.isSelected = isSelected;
            this.node = node;
            this._SELECT_CLASS_NAME = 'show';
            this.id = this.createContentsItemId();
        }
        ContentsItem.fromData = function (data) {
            return new ContentsItem(0, data.parentId ? data.parentId : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.itemNumber ? data.itemNumber : 1, data.isSelected ? data.isSelected : false, data.node ? data.node : null);
        };
        ContentsItem.prototype.createContentsItemId = function () {
            return ++_created_contents_item_num;
        };
        ContentsItem.prototype.removeSelectClass = function () {
            if (this.node.classList.contains(this._SELECT_CLASS_NAME)) {
                this.node.classList.remove(this._SELECT_CLASS_NAME);
            }
        };
        ContentsItem.prototype.addSelectClass = function () {
            if (!this.node.classList.contains(this._SELECT_CLASS_NAME)) {
                this.node.classList.add(this._SELECT_CLASS_NAME);
            }
        };
        ContentsItem.prototype.resetItem = function () {
            this.removeSelectClass();
        };
        ContentsItem.prototype.selectItem = function () {
            this.addSelectClass();
        };
        return ContentsItem;
    }());
    SwitcherView.ContentsItem = ContentsItem;
})(SwitcherView || (SwitcherView = {}));
var SwitcherController;
(function (SwitcherController) {
    var Trigger = SwitcherModel.Trigger;
    var Contents = SwitcherModel.Contents;
    var TriggerView = SwitcherView.Trigger;
    var ContentsView = SwitcherView.Contents;
    var Switcher = (function () {
        function Switcher() {
            var _this = this;
            this.triggerList = [];
            this.contentsList = [];
            TriggerView.fetchElements(function (data) {
                data.trigger.forEach(function (nodeList) {
                    _this.createFromTriggerElement(nodeList);
                });
                data.contents.forEach(function (nodeList) {
                    _this.createFromContentsElement(nodeList);
                });
            });
        }
        Switcher.prototype.setTriggerCallBack = function () {
            var _this = this;
            this.triggerList.forEach(function (trigger) {
                var parent = trigger;
                trigger.items.forEach(function (item) {
                    item.view.select(function (view) {
                        parent.select(view.id);
                        _this.selectContents(parent);
                    }, true);
                });
            });
        };
        Switcher.prototype.selectContents = function (trigger) {
            for (var i = 0; i < this.contentsList.length; i++) {
                this.contentsList[i].select(trigger);
            }
        };
        Switcher.prototype.createFromTriggerElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.createTriggerModel(TriggerView.fromData(nodeList[i]));
            }
            this.setTriggerCallBack();
        };
        Switcher.prototype.createFromContentsElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.createContentsModel(ContentsView.fromData(nodeList[i]));
            }
        };
        Switcher.prototype.createTriggerModel = function (triggerView) {
            this.create(triggerView);
        };
        Switcher.prototype.createContentsModel = function (contentsView) {
            this.createContents(contentsView);
        };
        Switcher.prototype.setTriggerTargetId = function () {
            for (var i = 0; i < this.triggerList.length; i++) {
                this.triggerList[i].setTargetId(this.contentsList);
            }
        };
        Switcher.prototype.create = function (data) {
            this.triggerList.push(Trigger.fromData(data));
        };
        Switcher.prototype.createContents = function (data) {
            this.contentsList.push(Contents.fromData(data));
            this.setTriggerTargetId();
        };
        Switcher.prototype.select = function (data) {
        };
        Switcher.prototype.resetSelected = function (data) {
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
    var APModel = AtomicPackages.Model;
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
            var searchContents = APModel.search(targetViewList, this.target);
            if (searchContents) {
                this.targetId = searchContents[0].id;
            }
        };
        return Trigger;
    }());
    SmoothScrollModel.Trigger = Trigger;
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
    SmoothScrollModel.Target = Target;
})(SmoothScrollModel || (SmoothScrollModel = {}));
var SmoothScrollView;
(function (SmoothScrollView) {
    var APModel = AtomicPackages.Model;
    var _created_scroll_trigger_num = 0, _created_scroll_target_num = 0;
    var SmoothScroll = (function () {
        function SmoothScroll() {
        }
        SmoothScroll.fetchElements = function (callback) {
            var _this = this;
            var scrollElements = {
                trigger: [],
                targets: []
            };
            document.addEventListener("DOMContentLoaded", function () {
                var selectors = [];
                scrollElements.trigger.push(document.querySelectorAll('[data-ap-scroll]'));
                scrollElements.trigger.forEach(function (nodeList) {
                    nodeList.forEach(function (node) {
                        if (parseInt(node.dataset.apScroll, 10)) {
                        }
                        else if (node.dataset.apScroll) {
                            selectors.push(node.dataset.apScroll);
                        }
                    });
                });
                selectors = APModel.uniq(selectors);
                for (var i = 0; i < selectors.length; i++) {
                    scrollElements.targets.push(document.querySelectorAll(selectors[i]));
                }
                callback(_this.create(scrollElements));
            });
        };
        SmoothScroll.create = function (scrollElements) {
            var _this = this;
            var scrollView = {
                trigger: [],
                targets: []
            };
            scrollElements.trigger.forEach(function (nodeList) {
                scrollView.trigger.push(_this.createFromTriggerElement(nodeList));
            });
            scrollElements.targets.forEach(function (nodeList) {
                scrollView.targets.push(_this.createFromTargetsElement(nodeList));
            });
            return scrollView;
        };
        SmoothScroll.createFromTriggerElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                return Trigger.fromData(nodeList[i]);
            }
        };
        SmoothScroll.createFromTargetsElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                return Target.fromData(nodeList[i]);
            }
        };
        return SmoothScroll;
    }());
    SmoothScrollView.SmoothScroll = SmoothScroll;
    var Trigger = (function () {
        function Trigger(id, className, idName, target, coordinate, node) {
            this.id = id;
            this.className = className;
            this.idName = idName;
            this.target = target;
            this.coordinate = coordinate;
            this.node = node;
            this.toggleCallBackFunction = function () { };
            this.id = this.createTriggerId();
            this.coordinate = this.getCoordinate(this.node);
            this.setEventListener();
        }
        Trigger.fromData = function (data) {
            return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apScroll ? data.dataset.apScroll : null, 0, data ? data : null);
        };
        Trigger.fetchElements = function (callback) {
            var scrollElements = {
                trigger: [],
                targets: [],
                coordinate: []
            };
            document.addEventListener("DOMContentLoaded", function () {
                var selectors = [];
                scrollElements.trigger.push(document.querySelectorAll('[data-ap-scroll]'));
                scrollElements.trigger.forEach(function (nodeList) {
                    nodeList.forEach(function (node) {
                        if (parseInt(node.dataset.apScroll, 10)) {
                            scrollElements.coordinate.push({
                                coordinate: parseInt(node.dataset.apScroll, 10),
                                triggerNode: node
                            });
                        }
                        else if (node.dataset.apScroll) {
                            selectors.push(node.dataset.apScroll);
                        }
                    });
                });
                selectors = APModel.uniq(selectors);
                for (var i = 0; i < selectors.length; i++) {
                    scrollElements.targets.push(document.querySelectorAll(selectors[i]));
                }
                callback(scrollElements);
            });
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
    SmoothScrollView.Trigger = Trigger;
    var Coordinate = (function () {
        function Coordinate(id, triggerId, coordinate) {
            this.id = id;
            this.triggerId = triggerId;
            this.coordinate = coordinate;
        }
        return Coordinate;
    }());
    SmoothScrollView.Coordinate = Coordinate;
    var Target = (function () {
        function Target(id, idName, className, coordinate, node) {
            this.id = id;
            this.idName = idName;
            this.className = className;
            this.coordinate = coordinate;
            this.node = node;
            this.id = this.createContentsId();
            if (this.node) {
                this.coordinate = this.getCoordinate(this.node);
            }
        }
        Target.fromData = function (data) {
            return new Target(0, data.idName ? data.idName : data.id, data.className ? data.className : '', 0, data ? data : null);
        };
        Target.prototype.createContentsId = function () {
            return ++_created_scroll_target_num;
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
    SmoothScrollView.Target = Target;
})(SmoothScrollView || (SmoothScrollView = {}));
var SmoothScrollController;
(function (SmoothScrollController) {
    var Trigger = SmoothScrollModel.Trigger;
    var Target = SmoothScrollModel.Target;
    var ScrollView = SmoothScrollView.SmoothScroll;
    var TriggerView = SmoothScrollView.Trigger;
    var TargetView = SmoothScrollView.Target;
    var SmoothScroll = (function () {
        function SmoothScroll() {
            var _this = this;
            this.triggerList = [];
            this.targetList = [];
            ScrollView.fetchElements(function (data) {
                console.log(data);
            });
            TriggerView.fetchElements(function (data) {
                data.trigger.forEach(function (nodeList) {
                    _this.createFromTriggerElement(nodeList);
                });
                data.targets.forEach(function (nodeList) {
                    _this.createFromTargetsElement(nodeList);
                });
                console.log(data);
            });
            console.log(this);
        }
        SmoothScroll.prototype.createFromTriggerElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.createTriggerModel(TriggerView.fromData(nodeList[i]));
            }
            this.setTriggerCallBack();
        };
        SmoothScroll.prototype.createFromTargetsElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.createTargetModel(TargetView.fromData(nodeList[i]));
            }
        };
        SmoothScroll.prototype.createFromCoordinate = function (coordinate) {
        };
        SmoothScroll.prototype.createTriggerModel = function (triggerView) {
            this.create(triggerView);
        };
        SmoothScroll.prototype.createTargetModel = function (targetView) {
            this.createTargets(targetView);
        };
        SmoothScroll.prototype.setTriggerTargetId = function () {
            for (var i = 0; i < this.triggerList.length; i++) {
                this.triggerList[i].setTargetId(this.targetList);
            }
        };
        SmoothScroll.prototype.setTriggerCallBack = function () {
            var _this = this;
            this.triggerList.forEach(function (trigger) {
                trigger.view.toggle(function (triggerView) {
                    _this.toggleContents(trigger);
                }, true);
            });
        };
        SmoothScroll.prototype.toggleContents = function (trigger) {
            for (var i = 0; i < this.targetList.length; i++) {
                this.targetList[i].toggle(trigger);
            }
        };
        SmoothScroll.prototype.create = function (data) {
            this.triggerList.push(Trigger.fromData(data));
        };
        SmoothScroll.prototype.createTargets = function (data) {
            this.targetList.push(Target.fromData(data));
            this.setTriggerTargetId();
        };
        SmoothScroll.prototype.scroll = function (data) {
        };
        SmoothScroll.prototype.resetSelected = function (data) {
        };
        return SmoothScroll;
    }());
    SmoothScrollController.SmoothScroll = SmoothScroll;
})(SmoothScrollController || (SmoothScrollController = {}));
var ToggleModel;
(function (ToggleModel) {
    var APModel = AtomicPackages.Model;
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
        return Trigger;
    }());
    ToggleModel.Trigger = Trigger;
    var Contents = (function () {
        function Contents(id, className, idName, view) {
            this.id = id;
            this.className = className;
            this.idName = idName;
            this.view = view;
        }
        Contents.fromData = function (data) {
            return new Contents(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data ? data : null);
        };
        Contents.prototype.toggle = function (trigger) {
            for (var i = 0; i < trigger.targetId.length; i++) {
                if (trigger.targetId[i] == this.id) {
                    this.view.toggle();
                }
            }
        };
        return Contents;
    }());
    ToggleModel.Contents = Contents;
})(ToggleModel || (ToggleModel = {}));
var ToggleView;
(function (ToggleView) {
    var APModel = AtomicPackages.Model;
    var _created_toggle_trigger_num = 0, _created_toggle_contents_num = 0;
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
        Trigger.fetchElements = function (callback) {
            var toggleElements = {
                trigger: [],
                contents: []
            };
            document.addEventListener("DOMContentLoaded", function () {
                var selectors = [];
                toggleElements.trigger.push(document.querySelectorAll('[data-ap-toggle]'));
                toggleElements.trigger.forEach(function (nodeList) {
                    nodeList.forEach(function (node) {
                        if (node.dataset.apToggle) {
                            selectors.push(node.dataset.apToggle);
                        }
                    });
                });
                selectors = APModel.uniq(selectors);
                for (var i = 0; i < selectors.length; i++) {
                    toggleElements.contents.push(document.querySelectorAll(selectors[i]));
                }
                callback(toggleElements);
            });
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
    ToggleView.Trigger = Trigger;
    var Contents = (function () {
        function Contents(id, idName, className, toggleClassName, node) {
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
        Contents.fromData = function (data) {
            return new Contents(0, data.idName ? data.idName : data.id, data.className ? data.className : '', data.toggleClassName ? data.toggleClassName : null, data ? data : null);
        };
        Contents.prototype.createContentsId = function () {
            return ++_created_toggle_contents_num;
        };
        Contents.prototype.toggleClass = function () {
            if (this.node.classList.contains(this.toggleClassName)) {
                this.node.classList.remove(this.toggleClassName);
            }
            else {
                this.node.classList.add(this.toggleClassName);
            }
        };
        Contents.prototype.getItemNode = function (node) {
        };
        Contents.prototype.toggle = function () {
            this.toggleClass();
        };
        return Contents;
    }());
    ToggleView.Contents = Contents;
})(ToggleView || (ToggleView = {}));
var ToggleController;
(function (ToggleController) {
    var Trigger = ToggleModel.Trigger;
    var Contents = ToggleModel.Contents;
    var TriggerView = ToggleView.Trigger;
    var ContentsView = ToggleView.Contents;
    var Toggle = (function () {
        function Toggle() {
            var _this = this;
            this.triggerList = [];
            this.contentsList = [];
            TriggerView.fetchElements(function (data) {
                data.trigger.forEach(function (nodeList) {
                    _this.createFromTriggerElement(nodeList);
                });
                data.contents.forEach(function (nodeList) {
                    _this.createFromContentsElement(nodeList);
                });
            });
        }
        Toggle.prototype.createFromTriggerElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.createTriggerModel(TriggerView.fromData(nodeList[i]));
            }
            this.setTriggerCallBack();
        };
        Toggle.prototype.createFromContentsElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.createContentsModel(ContentsView.fromData(nodeList[i]));
            }
        };
        Toggle.prototype.createTriggerModel = function (triggerView) {
            this.create(triggerView);
        };
        Toggle.prototype.createContentsModel = function (contentsView) {
            this.createContents(contentsView);
        };
        Toggle.prototype.setTriggerTargetId = function () {
            for (var i = 0; i < this.triggerList.length; i++) {
                this.triggerList[i].setTargetId(this.contentsList);
            }
        };
        Toggle.prototype.setTriggerCallBack = function () {
            var _this = this;
            this.triggerList.forEach(function (trigger) {
                trigger.view.toggle(function (triggerView) {
                    _this.toggleContents(trigger);
                }, true);
            });
        };
        Toggle.prototype.toggleContents = function (trigger) {
            for (var i = 0; i < this.contentsList.length; i++) {
                this.contentsList[i].toggle(trigger);
            }
        };
        Toggle.prototype.create = function (data) {
            this.triggerList.push(Trigger.fromData(data));
        };
        Toggle.prototype.createContents = function (data) {
            this.contentsList.push(Contents.fromData(data));
            this.setTriggerTargetId();
        };
        Toggle.prototype.select = function (data) {
        };
        Toggle.prototype.resetSelected = function (data) {
        };
        return Toggle;
    }());
    ToggleController.Toggle = Toggle;
})(ToggleController || (ToggleController = {}));
var SideMenuModel;
(function (SideMenuModel) {
    var APModel = AtomicPackages.Model;
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
        return Trigger;
    }());
    SideMenuModel.Trigger = Trigger;
    var Contents = (function () {
        function Contents(id, className, idName, view) {
            this.id = id;
            this.className = className;
            this.idName = idName;
            this.view = view;
        }
        Contents.fromData = function (data) {
            return new Contents(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data ? data : null);
        };
        Contents.prototype.toggle = function (trigger) {
            for (var i = 0; i < trigger.targetId.length; i++) {
                if (trigger.targetId[i] == this.id) {
                    this.view.toggle();
                }
            }
        };
        return Contents;
    }());
    SideMenuModel.Contents = Contents;
})(SideMenuModel || (SideMenuModel = {}));
var SideMenuView;
(function (SideMenuView) {
    var APModel = AtomicPackages.Model;
    var _created_toggle_trigger_num = 0, _created_toggle_contents_num = 0;
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
        Trigger.fetchElements = function (callback) {
            var sideMenuElements = {
                trigger: [],
                contents: []
            };
            document.addEventListener("DOMContentLoaded", function () {
                var selectors = [];
                sideMenuElements.trigger.push(document.querySelectorAll('[data-ap-side]'));
                sideMenuElements.trigger.forEach(function (nodeList) {
                    nodeList.forEach(function (node) {
                        if (node.dataset.apSide) {
                            selectors.push(node.dataset.apSide);
                        }
                    });
                });
                selectors = APModel.uniq(selectors);
                for (var i = 0; i < selectors.length; i++) {
                    sideMenuElements.contents.push(document.querySelectorAll(selectors[i]));
                }
                callback(sideMenuElements);
            });
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
    SideMenuView.Trigger = Trigger;
    var Contents = (function () {
        function Contents(id, idName, className, toggleClassName, node) {
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
        Contents.fromData = function (data) {
            return new Contents(0, data.idName ? data.idName : data.id, data.className ? data.className : '', data.toggleClassName ? data.toggleClassName : null, data ? data : null);
        };
        Contents.prototype.createContentsId = function () {
            return ++_created_toggle_contents_num;
        };
        Contents.prototype.toggleClass = function () {
            if (this.node.classList.contains(this.toggleClassName)) {
                this.node.classList.remove(this.toggleClassName);
            }
            else {
                this.node.classList.add(this.toggleClassName);
            }
        };
        Contents.prototype.getItemNode = function (node) {
        };
        Contents.prototype.toggle = function () {
            this.toggleClass();
        };
        return Contents;
    }());
    SideMenuView.Contents = Contents;
})(SideMenuView || (SideMenuView = {}));
var SideMenuController;
(function (SideMenuController) {
    var Trigger = SideMenuModel.Trigger;
    var Contents = SideMenuModel.Contents;
    var TriggerView = SideMenuView.Trigger;
    var ContentsView = SideMenuView.Contents;
    var SideMenu = (function () {
        function SideMenu() {
            var _this = this;
            this.triggerList = [];
            this.contentsList = [];
            TriggerView.fetchElements(function (data) {
                data.trigger.forEach(function (nodeList) {
                    _this.createFromTriggerElement(nodeList);
                });
                data.contents.forEach(function (nodeList) {
                    _this.createFromContentsElement(nodeList);
                });
            });
        }
        SideMenu.prototype.createFromTriggerElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.createTriggerModel(TriggerView.fromData(nodeList[i]));
            }
            this.setTriggerCallBack();
        };
        SideMenu.prototype.createFromContentsElement = function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                this.createContentsModel(ContentsView.fromData(nodeList[i]));
            }
        };
        SideMenu.prototype.createTriggerModel = function (triggerView) {
            this.create(triggerView);
        };
        SideMenu.prototype.createContentsModel = function (contentsView) {
            this.createContents(contentsView);
        };
        SideMenu.prototype.setTriggerTargetId = function () {
            for (var i = 0; i < this.triggerList.length; i++) {
                this.triggerList[i].setTargetId(this.contentsList);
            }
        };
        SideMenu.prototype.setTriggerCallBack = function () {
            var _this = this;
            this.triggerList.forEach(function (trigger) {
                trigger.view.toggle(function (triggerView) {
                    _this.toggleContents(trigger);
                }, true);
            });
        };
        SideMenu.prototype.toggleContents = function (trigger) {
            for (var i = 0; i < this.contentsList.length; i++) {
                this.contentsList[i].toggle(trigger);
            }
        };
        SideMenu.prototype.create = function (data) {
            this.triggerList.push(Trigger.fromData(data));
        };
        SideMenu.prototype.createContents = function (data) {
            this.contentsList.push(Contents.fromData(data));
            this.setTriggerTargetId();
        };
        SideMenu.prototype.select = function (data) {
        };
        SideMenu.prototype.resetSelected = function (data) {
        };
        return SideMenu;
    }());
    SideMenuController.SideMenu = SideMenu;
})(SideMenuController || (SideMenuController = {}));
var AtomicPackages;
(function (AtomicPackages) {
    var ModalWindow = ModalWindowController.ModalWindow;
    var Button = ButtonController.Button;
    var Switcher = SwitcherController.Switcher;
    var Toggle = ToggleController.Toggle;
    var SideMenu = SideMenuController.SideMenu;
    var SmoothScroll = SmoothScrollController.SmoothScroll;
    var Controller = (function () {
        function Controller() {
            this.model = new AtomicPackages.Model();
            this.view = new AtomicPackages.View();
            this.modal = new ModalWindow();
            this.btn = new Button();
            this.switcher = new Switcher();
            this.toggle = new Toggle();
            this.sideMenu = new SideMenu();
            this.smoothScroll = new SmoothScroll();
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
                this.toggle = controller.toggle;
                this.sideMenu = controller.sideMenu;
                this.scroll = controller.smoothScroll;
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
