/*
 * Author: Daisuke Takayama
 */
/// <reference path='_all.ts' />
/// <reference path='controller/atomic_package_controller.ts' />

'use strict';
var e = eval, global: NodeJS.Global = e('this');

module AtomicPackages {

  /**
   * AtomicPackage Main Class
   * @public
  **/
  export class AtomicPackage {
    private static _instance: AtomicPackage = null;

    public modal: any;
    public btn: any;
    public switcher: any;

    constructor(
      option?: any
      ) {
      if (AtomicPackage._instance) {
        return AtomicPackage._instance;

      } else {
        var controller = new AtomicPackages.Controller();

        this.modal    = controller.modal;
        this.btn      = controller.btn;
        this.switcher = controller.switcher;

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
