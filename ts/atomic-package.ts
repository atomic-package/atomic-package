/*
 * Author: Daisuke Takayama
 */
/// <reference path='_all.ts' />

'use strict';
var e = eval, global: NodeJS.Global = e('this');

module AtomicPackages {
  export class AtomicPackage {
    private static _instance: AtomicPackage = null;

    private model: AtomicPackageModel;
    private view: AtomicPackageView;

    constructor(
      option?: any
      ) {
      if (AtomicPackage._instance) {
        if (option !== void 0) {
          AtomicPackage._instance.model = new AtomicPackages.AtomicPackageModel(option);
          AtomicPackage._instance.view = new AtomicPackages.AtomicPackageView(AtomicPackage._instance.model);
        }

        return AtomicPackage._instance;
      } else {
        this.model = new AtomicPackages.AtomicPackageModel(option);
        this.view = new AtomicPackages.AtomicPackageView(this.model);

        AtomicPackage._instance = this;
      }
    }

  }
}

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
