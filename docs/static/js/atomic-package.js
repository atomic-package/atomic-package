'use strict';
var e = eval, global = e('this');
var AtomicPackage;
(function (AtomicPackage_1) {
    var AtomicPackage = (function () {
        function AtomicPackage() {
        }
        return AtomicPackage;
    }());
    AtomicPackage_1.AtomicPackage = AtomicPackage;
})(AtomicPackage || (AtomicPackage = {}));
if (typeof (module) !== 'undefined') {
    if (typeof (module).exports.AP === 'undefined') {
        (module).exports.AP = {};
    }
    (module).exports.AP = AtomicPackage.AtomicPackage;
}
if (typeof (global) !== 'undefined') {
    if (typeof global['AP'] === 'undefined') {
        global['AP'] = {};
    }
    global['AP'] = AtomicPackage.AtomicPackage;
}
var AtomicPackage;
(function (AtomicPackage) {
    var AtomicPackageModel = (function () {
        function AtomicPackageModel() {
        }
        return AtomicPackageModel;
    }());
    AtomicPackage.AtomicPackageModel = AtomicPackageModel;
})(AtomicPackage || (AtomicPackage = {}));
var AtomicPackage;
(function (AtomicPackage) {
    var AtomicPackageView = (function () {
        function AtomicPackageView() {
        }
        return AtomicPackageView;
    }());
    AtomicPackage.AtomicPackageView = AtomicPackageView;
})(AtomicPackage || (AtomicPackage = {}));
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
