/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Switcher.ts" />
/// <reference path="../../view/parts/Switcher.ts" />

module SwitcherController {
  import APModel = AtomicPackages.AtomicPackageModel;

  /**
   * Switcher Class
   * @public
   * @param option
   **/
  export class Switcher {
    private _created_switcher_num: number = 0;

    constructor() {
    }

    /**
     * Private Function
     **/
    private createId(): number {
      return ++this._created_switcher_num;
    }
  }

}