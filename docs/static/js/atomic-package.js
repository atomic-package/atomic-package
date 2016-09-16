'use strict';
var e = eval, global = e('this');
var AtomicPackages;
(function (AtomicPackages) {
    var AtomicPackage = (function () {
        function AtomicPackage(option) {
            if (AtomicPackage._instance) {
                if (option !== void 0) {
                    AtomicPackage._instance.model = new AtomicPackages.AtomicPackageModel(option);
                    AtomicPackage._instance.view = new AtomicPackages.AtomicPackageView(AtomicPackage._instance.model);
                }
                return AtomicPackage._instance;
            }
            else {
                this.model = new AtomicPackages.AtomicPackageModel(option);
                this.view = new AtomicPackages.AtomicPackageView(this.model);
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
        (module).exports.AP = {};
    }
    (module).exports.AP = AtomicPackages.AtomicPackage;
}
if (typeof (global) !== 'undefined') {
    if (typeof global['AP'] === 'undefined') {
        global['AP'] = {};
    }
    global['AP'] = AtomicPackages.AtomicPackage;
}
var AtomicPackages;
(function (AtomicPackages) {
    var AtomicPackageModel = (function () {
        function AtomicPackageModel(option) {
        }
        return AtomicPackageModel;
    }());
    AtomicPackages.AtomicPackageModel = AtomicPackageModel;
})(AtomicPackages || (AtomicPackages = {}));
var AtomicPackages;
(function (AtomicPackages) {
    var AtomicPackageView = (function () {
        function AtomicPackageView(model) {
        }
        return AtomicPackageView;
    }());
    AtomicPackages.AtomicPackageView = AtomicPackageView;
})(AtomicPackages || (AtomicPackages = {}));
var Model;
(function (Model) {
    var Button = (function () {
        function Button() {
        }
        return Button;
    }());
    Model.Button = Button;
})(Model || (Model = {}));
var Model;
(function (Model) {
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
    Model.ModalWindow = ModalWindow;
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
