var AtomicPackages;
(function (AtomicPackages) {
    var AtomicPackageModel = (function () {
        function AtomicPackageModel(controller) {
        }
        AtomicPackageModel.search = function (dataList, type) {
            var key = Object.keys(type)[0];
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        };
        AtomicPackageModel.checkType = function (data) {
            switch (typeof data) {
                case 'number':
                    return { id: data };
                    break;
            }
        };
        return AtomicPackageModel;
    }());
    AtomicPackages.AtomicPackageModel = AtomicPackageModel;
})(AtomicPackages || (AtomicPackages = {}));
var AtomicPackages;
(function (AtomicPackages) {
    var AtomicPackageView = (function () {
        function AtomicPackageView(controller) {
        }
        return AtomicPackageView;
    }());
    AtomicPackages.AtomicPackageView = AtomicPackageView;
})(AtomicPackages || (AtomicPackages = {}));
var Model;
(function (Model) {
    var ModalWindow = (function () {
        function ModalWindow(id, className, idName, isOpen) {
            this.id = id;
            this.className = className;
            this.idName = idName;
            this.isOpen = isOpen;
        }
        ModalWindow.fromData = function (data) {
            return new ModalWindow(data.id ? data.id : 1, data.className ? data.className : '', data.idName ? data.idName : '', data.isOpen ? data.isOpen : false);
        };
        ModalWindow.prototype.open = function () {
            this.isOpen = true;
        };
        ModalWindow.prototype.close = function () {
            this.isOpen = false;
        };
        return ModalWindow;
    }());
    Model.ModalWindow = ModalWindow;
})(Model || (Model = {}));
var Controller;
(function (Controller) {
    var APModal = AtomicPackages.AtomicPackageModel;
    var Modal = Model.ModalWindow;
    var ModalWindow = (function () {
        function ModalWindow() {
            this.created_modal_window_num = 0;
            this.list = [];
        }
        ModalWindow.prototype.createId = function () {
            return ++this.created_modal_window_num;
        };
        ModalWindow.prototype.matchModal = function (searchModals) {
            var matchModals = [];
            this.list.forEach(function (modal, i) {
                searchModals.forEach(function (searchModal, n) {
                    if (modal == searchModal) {
                        matchModals.push(modal);
                    }
                });
            });
            return matchModals;
        };
        ModalWindow.prototype.open = function (data) {
            var searchModals = APModal.search(this.list, APModal.checkType(data));
            if (searchModals.length > 0) {
                var matchModals = this.matchModal(searchModals);
                matchModals.forEach(function (modal) {
                    modal.open();
                });
            }
        };
        ModalWindow.prototype.close = function (data) {
            var searchModals = APModal.search(this.list, APModal.checkType(data));
            if (searchModals.length > 0) {
                var matchModals = this.matchModal(searchModals);
                matchModals.forEach(function (modal) {
                    modal.close();
                });
            }
        };
        ModalWindow.prototype.create = function () {
            this.list.push(Modal.fromData({
                id: this.createId()
            }));
            console.log(this.list);
        };
        ModalWindow.prototype.destroy = function (data) {
            var searchModals = APModal.search(this.list, APModal.checkType(data)), newList = [];
            if (searchModals.length > 0) {
                this.list.forEach(function (modal, i) {
                    searchModals.forEach(function (searchModal, n) {
                        if (modal !== searchModal) {
                            newList.push(modal);
                        }
                    });
                });
                this.list = newList;
            }
        };
        ModalWindow.prototype.update = function () {
        };
        ModalWindow.prototype.getElement = function () {
        };
        return ModalWindow;
    }());
    Controller.ModalWindow = ModalWindow;
})(Controller || (Controller = {}));
var Controller;
(function (Controller) {
    var Button = (function () {
        function Button() {
        }
        return Button;
    }());
    Controller.Button = Button;
})(Controller || (Controller = {}));
var AtomicPackages;
(function (AtomicPackages) {
    var ModalWindow = Controller.ModalWindow;
    var Button = Controller.Button;
    var AtomicPackageController = (function () {
        function AtomicPackageController(option) {
            this.model = new AtomicPackages.AtomicPackageModel(this);
            this.view = new AtomicPackages.AtomicPackageView(this);
            this.modal = new ModalWindow();
            this.btn = new Button();
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
                if (option !== void 0) {
                }
                return AtomicPackage._instance;
            }
            else {
                var controller = new AtomicPackages.AtomicPackageController(option);
                this.modal = controller.modal;
                this.btn = controller.btn;
                AtomicPackage._instance = this;
                console.log(this);
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
var Model;
(function (Model) {
    var Button = (function () {
        function Button() {
        }
        return Button;
    }());
    Model.Button = Button;
})(Model || (Model = {}));
var View;
(function (View) {
    var created_modal_window_num = 0;
    var ModalWindow = (function () {
        function ModalWindow(id, className, idName) {
            this.id = id;
            this.className = className;
            this.idName = idName;
        }
        ModalWindow.fromData = function (data) {
            return new ModalWindow(data.id ? data.id : 0, data.className ? data.className : '', data.idName ? data.idName : '');
        };
        ModalWindow.prototype.createId = function () {
            return ++created_modal_window_num;
        };
        return ModalWindow;
    }());
    View.ModalWindow = ModalWindow;
})(View || (View = {}));
