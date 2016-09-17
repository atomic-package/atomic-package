/*
 * Author: Daisuke Takayama
 */
/// <reference path='_all.ts' />
/// <reference path='controller/atomic_package_controller.ts' />

'use strict';
var e = eval, global: NodeJS.Global = e('this');

module AtomicPackages {
  export class AtomicPackage {
    private static _instance: AtomicPackage = null;

    public modal: any;
    public btn: any;

    constructor(
      option?: any
      ) {
      //var controller = new AtomicPackages.AtomicPackageController(option);
      if (AtomicPackage._instance) {
        if (option !== void 0) {
//          var controller = new AtomicPackages.AtomicPackageController(option);
//          AtomicPackage._instance.controller = new AtomicPackages.AtomicPackageController(option);
        }
        return AtomicPackage._instance;
      } else {
        var controller = new AtomicPackages.AtomicPackageController();

        this.modal = controller.modal;
        this.btn = controller.btn;

        AtomicPackage._instance = this;
      }
    }
  }
}

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
