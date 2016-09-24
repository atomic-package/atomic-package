/*
 * Author: Daisuke Takayama
 */
/// <reference path='../_all.ts' />

module AtomicPackages {
  import APModel = AtomicPackages.Model;

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

    // trigger
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

    // target
    public static createTargetView(triggerList, target) {
      var selectors: string[] = [],
          targetList = [],
          targetViewList = [];

      triggerList.forEach((trigger: any) => {
        if(trigger.target) {
          selectors.push(trigger.target);
        }
      });

      selectors = APModel.uniq(selectors);

      for (var i: number = 0; i < selectors.length; i++) {
        if(selectors[i] !== "all") {
          targetList.push(document.querySelectorAll(selectors[i]));
        }
      }

      var createTargetList = this.createFromTargetsElement(targetList, target);

      createTargetList.forEach((createTarget: any) => {
        targetViewList.push(createTarget);
      });

      return targetViewList;
    }

    public static createFromTargetsElement(targetList, target) {
      var targetViewList = [];

      targetList.forEach((nodeList: NodeList) => {
        for (var i: number = 0; i < nodeList.length; i++) {
          targetViewList.push(target.fromData({ node: nodeList[i] }));
        }
      });

      return targetViewList;
    }

  }

}
