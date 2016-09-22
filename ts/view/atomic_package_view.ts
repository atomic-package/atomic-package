/*
 * Author: Daisuke Takayama
 */
/// <reference path='../_all.ts' />
/// <reference path='parts/ModalWindow.ts' />

module AtomicPackages {

  /**
   * AtomicPackage View Class
   * @public
   **/
  export class View {
    constructor(
      ) {
    }

    /**
     * Public Static Function
    **/
    public static getFirstChildLastNode(child) {
      if(child.children.length > 0) {
        return this.getFirstChildLastNode(child.children[0]);
      } else {
        return child;
      }
    }
  }

}
