/*
 * Author: Daisuke Takayama
 */
/// <reference path='_all.ts' />

'use strict';
var e = eval, global: NodeJS.Global = e('this');

module AtomicPackage {
  export class AtomicPackage {

  }
}

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
