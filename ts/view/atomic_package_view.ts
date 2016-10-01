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

    /**
     * createFromTriggerElement Function
     * @publicStatic
     * @param string[], Trigger
    **/
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

    /**
     * createTargetView Function
     * @publicStatic
     * @param TriggerView[], Target
    **/
    public static createTargetView(triggerList, target) {
      var selectors: string[] = this.getTargetSelectors(triggerList),
          targetNodeList = this.getTargetNodeList(selectors),
          createTargetList = this.createFromTargetsElement(targetNodeList, target);

      return this.getTargetViewList(createTargetList);
    }

    /**
     * getTargetSelectors Function
     * @publicStatic
     * @param TriggerView[]
    **/
    public static getTargetSelectors(triggerList) {
      var selectors: string[] = [];

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
      var targetNodeList = [];

      for (var i: number = 0; i < selectors.length; i++) {
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
      var targetViewList = [];

      targetList.forEach((nodeList: NodeList) => {
        for (var i: number = 0; i < nodeList.length; i++) {
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
      var targetViewList = [];

      createTargetList.forEach((createTarget) => {
        targetViewList.push(createTarget);
      });

      return targetViewList;
    }


    public static loop() {
      var startTime = new Date().getTime();

      function step(timestamp) {
        var progress = timestamp - startTime;
        var currentTime = new Date().getTime();

        var status = (startTime - currentTime);

        console.log(status);

        if (progress < 2000) {
          requestAnimationFrame(step);
        }
      }
      requestAnimationFrame(step);
    }
  }

}
