var AtomicPackages;
(function (AtomicPackages) {
    var Model = (function () {
        function Model() {
        }
        Model.isArray = function (data) {
            return Array.isArray(data) || typeof data !== 'object' && /^\[/.test(data);
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
        return Model;
    }());
    AtomicPackages.Model = Model;
})(AtomicPackages || (AtomicPackages = {}));
var ModalWindowView;
(function (ModalWindowView) {
    var APModel = AtomicPackages.Model;
    var _created_modal_window_num = 0;
    var _created_trigger_num = 0;
    var ModalWindow = (function () {
        function ModalWindow() {
            this.triggerList = [];
        }
        ModalWindow.fetchElements = function (callback) {
            var _this = this;
            document.addEventListener("DOMContentLoaded", function () {
                _this.triggerList = _this.createFromTriggerElement();
                callback({
                    triggerList: _this.triggerList,
                    targetList: _this.createTargetView(_this.triggerList),
                    backDrop: _this.createBackDropView()
                });
            });
        };
        ModalWindow.createFromTriggerElement = function () {
            var triggerList = [], triggerViewList = [];
            triggerList.push(document.querySelectorAll('[data-ap-modal]'));
            triggerList.push(document.querySelectorAll('[data-ap-modal-close]'));
            triggerList.forEach(function (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    triggerViewList.push(Trigger.fromData(nodeList[i]));
                }
            });
            return triggerViewList;
        };
        ModalWindow.createTargetView = function (triggerList) {
            var selectors = [], targetList = [], targetViewList = [];
            triggerList.forEach(function (trigger) {
                if (trigger.target) {
                    selectors.push(trigger.target);
                }
            });
            selectors = APModel.uniq(selectors);
            for (var i = 0; i < selectors.length; i++) {
                if (selectors[i] !== "all") {
                    targetList.push(document.querySelectorAll(selectors[i]));
                }
            }
            var createTargetList = this.createFromTargetsElement(targetList);
            createTargetList.forEach(function (createTarget) {
                targetViewList.push(createTarget);
            });
            return targetViewList;
        };
        ModalWindow.createFromTargetsElement = function (targetList) {
            var targetViewList = [];
            targetList.forEach(function (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    targetViewList.push(Target.fromData({ node: nodeList[i] }));
                }
            });
            return targetViewList;
        };
        ModalWindow.createBackDropView = function () {
            return BackDrop.fromData({});
        };
        return ModalWindow;
    }());
    ModalWindowView.ModalWindow = ModalWindow;
    var Target = (function () {
        function Target(id, idName, className, isOpen, node) {
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
        Target.fromData = function (data) {
            return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, false, data.node ? data.node : null);
        };
        Target.create = function () {
            return this.fromData({});
        };
        Target.prototype.createModalWindowId = function () {
            return ++_created_modal_window_num;
        };
        Target.prototype.open = function () {
            this.node.classList.add(this._OPEN_CLASS_NAME);
        };
        Target.prototype.close = function () {
            if (this.node.classList.contains(this._OPEN_CLASS_NAME)) {
                this.node.classList.remove(this._OPEN_CLASS_NAME);
            }
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
    ModalWindowView.Target = Target;
    var BackDrop = (function () {
        function BackDrop() {
            this._BACKDROP_ELEMENT_CLASS_NAME = 'modalWindowBackDrop';
            this._SHOW_CLASS_NAME = 'show';
            this.callBackFunction = function () { };
            this.createElement();
            this.setEventListener();
        }
        BackDrop.fromData = function (data) {
            return new BackDrop();
        };
        BackDrop.prototype.setEventListener = function () {
            var _this = this;
            this.node.addEventListener('click', function (e) {
                e.preventDefault();
                _this.click(_this.callBackFunction);
            }, false);
        };
        BackDrop.prototype.createElement = function () {
            this.node = document.createElement("div");
            this.node.classList.add(this._BACKDROP_ELEMENT_CLASS_NAME);
            document.body.appendChild(this.node);
        };
        BackDrop.prototype.show = function () {
            this.node.classList.add(this._SHOW_CLASS_NAME);
        };
        BackDrop.prototype.hide = function () {
            if (this.node.classList.contains(this._SHOW_CLASS_NAME)) {
                this.node.classList.remove(this._SHOW_CLASS_NAME);
            }
        };
        BackDrop.prototype.click = function (fn, isFirst) {
            this.callBackFunction = fn;
            if (!isFirst) {
                fn();
            }
        };
        return BackDrop;
    }());
    ModalWindowView.BackDrop = BackDrop;
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
    ModalWindowView.Trigger = Trigger;
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
    var APModel = AtomicPackages.Model;
    var TargetView = ModalWindowView.Target;
    var ModalWindow = (function () {
        function ModalWindow(backDrop, targetList, triggerList) {
            this.backDrop = backDrop;
            this.targetList = targetList;
            this.triggerList = triggerList;
            this.setTriggerCallBack();
            this.setTriggerTargetId();
            this.setBackDropCallBack();
        }
        ModalWindow.fromData = function (data) {
            return new ModalWindow(data.backDrop ? BackDrop.fromData(data.backDrop) : null, data.targetList ? APModel.createTargetModel(data.targetList, Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []);
        };
        ModalWindow.prototype.setTriggerCallBack = function () {
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
        ModalWindow.prototype.setTriggerTargetId = function () {
            for (var i = 0; i < this.triggerList.length; i++) {
                this.triggerList[i].setTargetId(this.targetList);
            }
        };
        ModalWindow.prototype.setBackDropCallBack = function () {
            var _this = this;
            this.backDrop.view.click(function () {
                _this.close('all');
            }, true);
        };
        ModalWindow.prototype.matchModal = function (searchModals) {
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
        ModalWindow.prototype.openCheck = function () {
            var isOpen = false;
            this.targetList.forEach(function (modal) {
                if (modal.isOpen) {
                    isOpen = true;
                }
            });
            return isOpen;
        };
        ModalWindow.prototype.open = function (data) {
            var searchModals = APModel.search(this.targetList, data);
            if (searchModals.length > 0) {
                var matchModals = this.matchModal(searchModals);
                matchModals.forEach(function (modal) {
                    modal.open();
                });
                this.backDrop.show();
            }
        };
        ModalWindow.prototype.close = function (data) {
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
        ModalWindow.prototype.create = function (data) {
            if (data !== void 0) {
                this.targetList.push(Target.fromData(data));
            }
            else {
                this.targetList.push(Target.fromData(TargetView.create()));
            }
        };
        ModalWindow.prototype.destroy = function (data) {
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
        ModalWindow.prototype.update = function (data) {
        };
        ModalWindow.prototype.getElements = function (data) {
            return APModel.search(this.targetList, data);
        };
        return ModalWindow;
    }());
    ModalWindowModel.ModalWindow = ModalWindow;
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
                    if (targetList[i].id === this.targetId[i]) {
                        targetList[i].open();
                    }
                }
            }
        };
        Trigger.prototype.close = function (targetList) {
            for (var i = 0; i < this.targetId.length; i++) {
                for (var n = 0; n < targetList.length; n++) {
                    if (targetList[i].id === this.targetId[i]) {
                        targetList[i].close();
                    }
                }
            }
        };
        return Trigger;
    }());
    ModalWindowModel.Trigger = Trigger;
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
    ModalWindowModel.Target = Target;
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
    ModalWindowModel.BackDrop = BackDrop;
})(ModalWindowModel || (ModalWindowModel = {}));
var ModalWindowController;
(function (ModalWindowController) {
    var Model = ModalWindowModel.ModalWindow;
    var ModalView = ModalWindowView.ModalWindow;
    var ModalWindow = (function () {
        function ModalWindow() {
            var _this = this;
            ModalView.fetchElements(function (data) {
                _this.model = Model.fromData(data);
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
    ModalWindowController.ModalWindow = ModalWindow;
})(ModalWindowController || (ModalWindowController = {}));
var ButtonModel;
(function (ButtonModel) {
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
        return Trigger;
    }());
    ButtonModel.Trigger = Trigger;
})(ButtonModel || (ButtonModel = {}));
var ButtonView;
(function (ButtonView) {
    var _created_button_trigger_num = 0;
    var Button = (function () {
        function Button() {
            this.triggerList = [];
        }
        Button.fetchElements = function (callback) {
            var _this = this;
            document.addEventListener("DOMContentLoaded", function () {
                _this.triggerList = _this.createFromTriggerElement();
                callback({
                    triggerList: _this.triggerList
                });
            });
        };
        Button.createFromTriggerElement = function () {
            var triggerList = [], triggerViewList = [];
            triggerList.push(document.querySelectorAll('[data-ap-btn]'));
            triggerList.forEach(function (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    triggerViewList.push(Trigger.fromData(nodeList[i]));
                }
            });
            return triggerViewList;
        };
        return Button;
    }());
    ButtonView.Button = Button;
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
            return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apBtn ? data.dataset.apBtn : null, data ? data : null);
        };
        Trigger.prototype.createTriggerId = function () {
            return ++_created_button_trigger_num;
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
    ButtonView.Trigger = Trigger;
})(ButtonView || (ButtonView = {}));
var ButtonController;
(function (ButtonController) {
    var Trigger = ButtonModel.Trigger;
    var BtnView = ButtonView.Button;
    var Button = (function () {
        function Button() {
            var _this = this;
            this.triggerList = [];
            BtnView.fetchElements(function (data) {
                data.triggerList.forEach(function (triggerView) {
                    _this.createTriggerModel(triggerView);
                });
                _this.setTriggerCallBack();
            });
        }
        Button.prototype.createTriggerModel = function (triggerView) {
            this.create(triggerView);
        };
        Button.prototype.setTriggerCallBack = function () {
            var _this = this;
            this.triggerList.forEach(function (trigger) {
                trigger.view.toggle(function (triggerView) {
                    _this.toggleContents(trigger);
                }, true);
            });
        };
        Button.prototype.create = function (data) {
            this.triggerList.push(Trigger.fromData(data));
        };
        Button.prototype.scroll = function (data) {
        };
        Button.prototype.resetSelected = function (data) {
        };
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
    DropdownModel.Trigger = Trigger;
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
    DropdownModel.Target = Target;
})(DropdownModel || (DropdownModel = {}));
var DropdownView;
(function (DropdownView) {
    var APModel = AtomicPackages.Model;
    var _created_dropdown_trigger_num = 0, _created_dropdown_target_num = 0;
    var Dropdown = (function () {
        function Dropdown() {
            this.triggerList = [];
        }
        Dropdown.fetchElements = function (callback) {
            var _this = this;
            document.addEventListener("DOMContentLoaded", function () {
                _this.triggerList = _this.createFromTriggerElement();
                callback({
                    triggerList: _this.triggerList,
                    targetList: _this.createTargetView(_this.triggerList)
                });
            });
        };
        Dropdown.createFromTriggerElement = function () {
            var triggerList = [], triggerViewList = [];
            triggerList.push(document.querySelectorAll('[data-ap-dropdown]'));
            triggerList.forEach(function (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    triggerViewList.push(Trigger.fromData(nodeList[i]));
                }
            });
            return triggerViewList;
        };
        Dropdown.createTargetView = function (triggerList) {
            var selectors = [], targetList = [], targetViewList = [];
            triggerList.forEach(function (trigger) {
                if (trigger.target) {
                    selectors.push(trigger.target);
                }
            });
            selectors = APModel.uniq(selectors);
            for (var i = 0; i < selectors.length; i++) {
                targetList.push(document.querySelectorAll(selectors[i]));
            }
            var createTargetList = this.createFromTargetsElement(targetList);
            createTargetList.forEach(function (createTarget) {
                targetViewList.push(createTarget);
            });
            return targetViewList;
        };
        Dropdown.createFromTargetsElement = function (targetList) {
            var targetViewList = [];
            targetList.forEach(function (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    targetViewList.push(Target.fromData({ node: nodeList[i] }));
                }
            });
            return targetViewList;
        };
        return Dropdown;
    }());
    DropdownView.Dropdown = Dropdown;
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
            return Target.fromData({
                triggerId: this.id
            });
        };
        return Trigger;
    }());
    DropdownView.Trigger = Trigger;
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
    DropdownView.Target = Target;
})(DropdownView || (DropdownView = {}));
var DropdownController;
(function (DropdownController) {
    var Trigger = DropdownModel.Trigger;
    var Target = DropdownModel.Target;
    var DropdownViewClass = DropdownView.Dropdown;
    var Dropdown = (function () {
        function Dropdown() {
            var _this = this;
            this.triggerList = [];
            this.targetList = [];
            DropdownViewClass.fetchElements(function (data) {
                data.triggerList.forEach(function (triggerView) {
                    _this.createTriggerModel(triggerView);
                });
                data.targetList.forEach(function (targetView) {
                    _this.createTargetModel(targetView);
                });
                _this.setTriggerCallBack();
                _this.setTriggerTargetId();
            });
        }
        Dropdown.prototype.createTriggerModel = function (triggerView) {
            this.create(triggerView);
        };
        Dropdown.prototype.createTargetModel = function (targetView) {
            this.createTargets(targetView);
        };
        Dropdown.prototype.setTriggerTargetId = function () {
            for (var i = 0; i < this.triggerList.length; i++) {
                this.triggerList[i].setTargetId(this.targetList);
            }
        };
        Dropdown.prototype.setTriggerCallBack = function () {
            var _this = this;
            this.triggerList.forEach(function (trigger) {
                trigger.view.toggle(function (triggerView) {
                    _this.toggleContents(trigger);
                }, true);
            });
        };
        Dropdown.prototype.toggleContents = function (trigger) {
            for (var i = 0; i < this.targetList.length; i++) {
                this.targetList[i].toggle(trigger);
            }
        };
        Dropdown.prototype.create = function (data) {
            this.triggerList.push(Trigger.fromData(data));
        };
        Dropdown.prototype.createTargets = function (data) {
            this.targetList.push(Target.fromData(data));
        };
        Dropdown.prototype.scroll = function (data) {
        };
        Dropdown.prototype.resetSelected = function (data) {
        };
        return Dropdown;
    }());
    DropdownController.Dropdown = Dropdown;
})(DropdownController || (DropdownController = {}));
var ScrollSpyModel;
(function (ScrollSpyModel) {
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
    ScrollSpyModel.Trigger = Trigger;
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
            if (trigger.targetId == this.id) {
                this.view.scroll();
            }
        };
        return Target;
    }());
    ScrollSpyModel.Target = Target;
})(ScrollSpyModel || (ScrollSpyModel = {}));
var ScrollSpyView;
(function (ScrollSpyView) {
    var _created_scroll_spy_trigger_num = 0, _created_scroll_spy_target_num = 0;
    var ScrollSpy = (function () {
        function ScrollSpy() {
        }
        ScrollSpy.fetchElements = function (callback) {
            var _this = this;
            document.addEventListener("DOMContentLoaded", function () {
                callback({
                    triggerList: _this.createTrigger(),
                    targetList: _this.createTargetView()
                });
            });
        };
        ScrollSpy.createTrigger = function () {
            if (document.querySelectorAll('[data-ap-scrollspy]')) {
            }
        };
        ScrollSpy.createTargetView = function () {
            var targetList = [], targetViewList = [];
            targetList.push(document.querySelectorAll('[data-ap-scrollspy]'));
            targetList.forEach(function (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    targetViewList.push(Target.fromData(nodeList[i]));
                }
            });
            return targetViewList;
        };
        return ScrollSpy;
    }());
    ScrollSpyView.ScrollSpy = ScrollSpy;
    var Trigger = (function () {
        function Trigger(id, option, coordinate, moveCoordinate) {
            this.id = id;
            this.option = option;
            this.coordinate = coordinate;
            this.moveCoordinate = moveCoordinate;
            this.toggleCallBackFunction = function () { };
            this.id = this.createTriggerId();
            this.setEventListener();
        }
        Trigger.fromData = function (data) {
            return new Trigger(0, data.dataset.apScrollspy ? data.dataset.apScrollspy : null, 0, 0);
        };
        Trigger.prototype.createTriggerId = function () {
            return ++_created_scroll_spy_trigger_num;
        };
        Trigger.prototype.getCoordinate = function (node) {
            var rect = node.getBoundingClientRect();
            return rect.top + window.pageYOffset;
        };
        Trigger.prototype.setEventListener = function () {
            var _this = this;
            window.addEventListener('scroll', function (e) {
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
        return Trigger;
    }());
    ScrollSpyView.Trigger = Trigger;
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
    ScrollSpyView.Target = Target;
})(ScrollSpyView || (ScrollSpyView = {}));
var ScrollSpyController;
(function (ScrollSpyController) {
    var Trigger = ScrollSpyModel.Trigger;
    var Target = ScrollSpyModel.Target;
    var SSView = ScrollSpyView.ScrollSpy;
    var ScrollSpy = (function () {
        function ScrollSpy() {
            this.targetList = [];
            SSView.fetchElements(function (data) {
            });
        }
        ScrollSpy.prototype.createTriggerModel = function (triggerView) {
            this.create(triggerView);
        };
        ScrollSpy.prototype.createTargetModel = function (targetView) {
            this.createTargets(targetView);
        };
        ScrollSpy.prototype.setTriggerTargetId = function () {
            this.trigger.setTargetId(this.targetList);
        };
        ScrollSpy.prototype.setTriggerCallBack = function () {
            var _this = this;
            this.trigger.view.toggle(function (triggerView) {
                _this.toggleContents(trigger);
            }, true);
        };
        ScrollSpy.prototype.toggleContents = function (trigger) {
            for (var i = 0; i < this.targetList.length; i++) {
                this.targetList[i].toggle(trigger);
            }
        };
        ScrollSpy.prototype.create = function (data) {
            this.trigger = Trigger.fromData(data);
        };
        ScrollSpy.prototype.createTargets = function (data) {
            this.targetList.push(Target.fromData(data));
        };
        ScrollSpy.prototype.scroll = function (data) {
        };
        ScrollSpy.prototype.resetSelected = function (data) {
        };
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
    SmoothScrollModel.Trigger = Trigger;
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
            this.triggerList = [];
        }
        SmoothScroll.fetchElements = function (callback) {
            var _this = this;
            document.addEventListener("DOMContentLoaded", function () {
                _this.triggerList = _this.createFromTriggerElement();
                callback({
                    triggerList: _this.triggerList,
                    targetList: _this.createTargetView(_this.triggerList)
                });
            });
        };
        SmoothScroll.createFromTriggerElement = function () {
            var triggerList = [], triggerViewList = [];
            triggerList.push(document.querySelectorAll('[data-ap-scroll]'));
            triggerList.forEach(function (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    triggerViewList.push(Trigger.fromData(nodeList[i]));
                }
            });
            return triggerViewList;
        };
        SmoothScroll.createTargetView = function (triggerList) {
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
            var createTargetList = this.createFromTargetsElement(targetList);
            createTargetList.forEach(function (createTarget) {
                targetViewList.push(createTarget);
            });
            return targetViewList;
        };
        SmoothScroll.createFromTargetsElement = function (targetList) {
            var targetViewList = [];
            targetList.forEach(function (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    targetViewList.push(Target.fromData({ node: nodeList[i] }));
                }
            });
            return targetViewList;
        };
        return SmoothScroll;
    }());
    SmoothScrollView.SmoothScroll = SmoothScroll;
    var Trigger = (function () {
        function Trigger(id, className, idName, target, coordinate, moveCoordinate, node) {
            this.id = id;
            this.className = className;
            this.idName = idName;
            this.target = target;
            this.coordinate = coordinate;
            this.moveCoordinate = moveCoordinate;
            this.node = node;
            this.toggleCallBackFunction = function () { };
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
        Trigger.prototype.setMoveCoordinate = function () {
            this.moveCoordinate = parseInt(this.target, 10);
            this.target = null;
        };
        Trigger.prototype.createMoveCoordinate = function () {
            return Target.fromData({
                triggerId: this.id,
                coordinate: this.coordinate + this.moveCoordinate
            });
        };
        return Trigger;
    }());
    SmoothScrollView.Trigger = Trigger;
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
    var SmoothScroll = (function () {
        function SmoothScroll() {
            var _this = this;
            this.triggerList = [];
            this.targetList = [];
            ScrollView.fetchElements(function (data) {
                data.triggerList.forEach(function (triggerView) {
                    _this.createTriggerModel(triggerView);
                });
                data.targetList.forEach(function (targetView) {
                    _this.createTargetModel(targetView);
                });
                _this.setTriggerCallBack();
                _this.setTriggerTargetId();
            });
        }
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
    var Toggle = (function () {
        function Toggle(targetList, triggerList) {
            this.targetList = targetList;
            this.triggerList = triggerList;
            this.setTriggerCallBack();
            this.setTriggerTargetId();
        }
        Toggle.fromData = function (data) {
            return new Toggle(data.targetList ? APModel.createTargetModel(data.targetList, Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []);
        };
        Toggle.prototype.setTriggerCallBack = function () {
            var _this = this;
            this.triggerList.forEach(function (trigger) {
                trigger.view.toggle(function () {
                    trigger.toggle(_this.targetList);
                }, true);
            });
        };
        Toggle.prototype.setTriggerTargetId = function () {
            for (var i = 0; i < this.triggerList.length; i++) {
                this.triggerList[i].setTargetId(this.targetList);
            }
        };
        Toggle.prototype.toggle = function (data) {
        };
        Toggle.prototype.getElements = function (data) {
            return APModel.search(this.targetList, data);
        };
        return Toggle;
    }());
    ToggleModel.Toggle = Toggle;
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
    ToggleModel.Trigger = Trigger;
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
    ToggleModel.Target = Target;
})(ToggleModel || (ToggleModel = {}));
var ToggleView;
(function (ToggleView) {
    var APModel = AtomicPackages.Model;
    var _created_toggle_trigger_num = 0, _created_toggle_contents_num = 0;
    var Toggle = (function () {
        function Toggle() {
            this.triggerList = [];
        }
        Toggle.fetchElements = function (callback) {
            var _this = this;
            document.addEventListener("DOMContentLoaded", function () {
                _this.triggerList = _this.createFromTriggerElement();
                callback({
                    triggerList: _this.triggerList,
                    targetList: _this.createTargetView(_this.triggerList)
                });
            });
        };
        Toggle.createFromTriggerElement = function () {
            var triggerList = [], triggerViewList = [];
            triggerList.push(document.querySelectorAll('[data-ap-toggle]'));
            triggerList.forEach(function (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    triggerViewList.push(Trigger.fromData(nodeList[i]));
                }
            });
            return triggerViewList;
        };
        Toggle.createTargetView = function (triggerList) {
            var selectors = [], targetList = [], targetViewList = [];
            triggerList.forEach(function (trigger) {
                if (trigger.target) {
                    selectors.push(trigger.target);
                }
            });
            selectors = APModel.uniq(selectors);
            for (var i = 0; i < selectors.length; i++) {
                if (selectors[i] !== "all") {
                    targetList.push(document.querySelectorAll(selectors[i]));
                }
            }
            var createTargetList = this.createFromTargetsElement(targetList);
            createTargetList.forEach(function (createTarget) {
                targetViewList.push(createTarget);
            });
            return targetViewList;
        };
        Toggle.createFromTargetsElement = function (targetList) {
            var targetViewList = [];
            targetList.forEach(function (nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    targetViewList.push(Target.fromData({ node: nodeList[i] }));
                }
            });
            return targetViewList;
        };
        return Toggle;
    }());
    ToggleView.Toggle = Toggle;
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
    ToggleView.Trigger = Trigger;
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
    ToggleView.Target = Target;
})(ToggleView || (ToggleView = {}));
var ToggleController;
(function (ToggleController) {
    var Model = ToggleModel.Toggle;
    var ToggleViewClass = ToggleView.Toggle;
    var Toggle = (function () {
        function Toggle() {
            var _this = this;
            ToggleViewClass.fetchElements(function (data) {
                _this.model = Model.fromData(data);
            });
        }
        Toggle.prototype.create = function (data) {
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
    var Dropdown = DropdownController.Dropdown;
    var ScrollSpy = ScrollSpyController.ScrollSpy;
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
            this.dropdown = new Dropdown();
            this.scrollSpy = new ScrollSpy();
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
                this.dropdown = controller.dropdown;
                this.scrollSpy = controller.scrollSpy;
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
