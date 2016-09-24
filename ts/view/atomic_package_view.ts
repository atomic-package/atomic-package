/*
 * Author: Daisuke Takayama
 */
/// <reference path='../_all.ts' />

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

    public static createFromTriggerElement(selectors, trigger) {
      var triggerList = [],
          triggerViewList = [];

      for (var n: number = 0; n < selectors.length; n++) {
        triggerList.push(document.querySelectorAll(selectors[n]));
      }

      triggerList.forEach((nodeList: NodeList) => {
        for (var i: number = 0; i < nodeList.length; i++) {
          triggerViewList.push(trigger.fromData(nodeList[i]));
        }
      });

      return triggerViewList;
    }

  }

}
