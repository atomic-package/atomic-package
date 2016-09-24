/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module ToggleView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;

  var _created_toggle_trigger_num: number  = 0,
      _created_toggle_contents_num: number = 0;

  /**
   * Toggle View Class
   * @public
   * @param option
   **/
  export class Toggle {
    private triggerList = [];

    /**
     * Static Function
    **/
    static fetchElements(callback) {
      document.addEventListener("DOMContentLoaded", () => {
        this.triggerList = this.createFromTriggerElement();

        callback({
          triggerList: this.triggerList,
          targetList: this.createTargetView(this.triggerList)
        });
      });
    }

    public static createFromTriggerElement() {
      var triggerList = [],
          triggerViewList = [];

      triggerList.push(document.querySelectorAll('[data-ap-toggle]'));

      triggerList.forEach((nodeList: NodeList) => {
        for (var i: number = 0; i < nodeList.length; i++) {
          triggerViewList.push(Trigger.fromData(nodeList[i]));
        }
      });

      return triggerViewList;
    }

    public static createTargetView(triggerList) {
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

      var createTargetList = this.createFromTargetsElement(targetList);

      createTargetList.forEach((createTarget: any) => {
        targetViewList.push(createTarget);
      });

      return targetViewList;
    }

    public static createFromTargetsElement(targetList) {
      var targetViewList = [];

      targetList.forEach((nodeList: NodeList) => {
        for (var i: number = 0; i < nodeList.length; i++) {
          targetViewList.push(Target.fromData({ node: nodeList[i] }));
        }
      });

      return targetViewList;
    }

  }

  /**
   * Toggle Trigger View Class
   * @public
   * @param option
  **/
  export class Trigger {
    private toggleCallBackFunction: Function = () => {};

    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public target: any,
      public node: any
      ) {
      this.id = this.createTriggerId();
      this.setEventListener();
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Trigger {
      return new Trigger(
        0,
        data.className ? data.className : null,
        data.id ? data.id : null,
        data.dataset.apToggle ? data.dataset.apToggle : null,
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    private createTriggerId(): number {
      return ++_created_toggle_trigger_num;
    }

    private setEventListener(): void {
      this.node.addEventListener('click', (e) => {
        e.preventDefault();

        this.toggle(this.toggleCallBackFunction);
      }, false);
    }

    /**
     * Public Function
    **/
    public toggle(fn?, isFirst?): void {
      this.toggleCallBackFunction = fn;

      if(!isFirst) {
        fn(this);
      }
    }

    public getItemNode(node) {
      //return this.getChildren(node);
    }

    public resetSelectedClassName() {

    }
  }

  /**
   * Toggle Target View Class
   * @public
   * @param option
   **/
  export class Target {
    private _DEFAULT_TOGGLE_CLASS_NAME = 'active';

    constructor(
      public id: number,
      public idName: string,
      public className: string,
      public toggleClassName: string,
      public node: any
      ) {
      this.id = this.createContentsId();

      if(!this.toggleClassName) {
        this.toggleClassName = this._DEFAULT_TOGGLE_CLASS_NAME;
      }
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Target {
      return new Target(
        0,
        data.node && data.node.id ? data.node.id : null,
        data.node && data.node.className ? data.node.className : null,
        data.toggleClassName ? data.toggleClassName : null,
        data.node ? data.node : null
      );
    }

    /**
     * Private Function
    **/
    private createContentsId(): number {
      return ++_created_toggle_contents_num;
    }

    private toggleClass() {
      if(this.node.classList.contains(this.toggleClassName)) {
        this.node.classList.remove(this.toggleClassName);
      } else {
        this.node.classList.add(this.toggleClassName);
      }
    }

    /**
     * Public Function
     **/
    public getItemNode(node) {
      //return this.getChildren(node);
    }

    public toggle() {
      this.toggleClass();
    }
  }

}