/**
 * @author Daisuke Takayama
 **/
/// <reference path='../_all.ts' />
/// <reference path='common/Tween.ts' />

namespace AtomicPackages {
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

    /**
     * createFromTriggerElement Function
     * @publicStatic
     * @param string[], Trigger
    **/
    public static createFromTriggerElement(selectors: string[], trigger) {
      let triggerList = [],
          triggerViewList = [];

      selectors.forEach((selector: string) => {
        triggerList.push(document.querySelectorAll(selector));
      });

      triggerList.forEach((nodeList: NodeList) => {
        for (let i: number = 0; i < nodeList.length; i++) {
          triggerViewList.push(trigger.fromData(nodeList[i]));
        }
      });

      return triggerViewList;
    }

    /**
     * createTargetView Function
     * @publicStatic
     * @param TriggerView[], Target
    **/
    public static createTargetView(triggerList, target) {
      let selectors: string[] = this.getTargetSelectors(triggerList),
          targetNodeList      = this.getTargetNodeList(selectors),
          createTargetList    = this.createFromTargetsElement(targetNodeList, target);

      return this.getTargetViewList(createTargetList);
    }

    /**
     * getTargetSelectors Function
     * @publicStatic
     * @param TriggerView[]
    **/
    public static getTargetSelectors(triggerList) {
      let selectors: string[] = [];

      triggerList.forEach((trigger: any) => {
        if(trigger.target) {
          selectors.push(trigger.target);
        }
      });

      return APModel.uniq(selectors);
    }

    /**
     * getTargetNodeList Function
     * @publicStatic
     * @param string[]
    **/
    public static getTargetNodeList(selectors) {
      let targetNodeList = [];

      for (let i: number = 0; i < selectors.length; i++) {
        if(selectors[i] !== "all") {
          targetNodeList.push(document.querySelectorAll(selectors[i]));
        }
      }

      return targetNodeList;
    }

    /**
     * createFromTargetsElement Function
     * @publicStatic
     * @param nodeList[], Target
    **/
    public static createFromTargetsElement(targetList, target) {
      let targetViewList = [];

      targetList.forEach((nodeList: NodeList) => {
        for (let i: number = 0; i < nodeList.length; i++) {
          targetViewList.push(target.fromData({ node: nodeList[i] }));
        }
      });

      return targetViewList;
    }

    /**
     * getTargetViewList Function
     * @publicStatic
     * @param targetView[]
    **/
    public static getTargetViewList(createTargetList) {
      let targetViewList = [];

      createTargetList.forEach((createTarget) => {
        targetViewList.push(createTarget);
      });

      return targetViewList;
    }
  }
}
