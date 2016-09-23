/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module DropdownView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;

  var _created_dropdown_trigger_num: number  = 0,
      _created_dropdown_target_num: number = 0;

  /**
   * Dropdown View Class
   * @public
   * @param option
  **/
  export class Dropdown {
    private triggerList = [];

    static fetchElements(callback): void {
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

      // とりあえず [data-ap-dropdown]のみ取得
      triggerList.push(document.querySelectorAll('[data-ap-dropdown]'));

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
        targetList.push(document.querySelectorAll(selectors[i]));
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
   * Dropdown Trigger View Class
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
        data.dataset.apDropdown ? data.dataset.apDropdown : null,
        data ? data : null
      );
    }

    /**
     * Private Function
    **/
    private createTriggerId(): number {
      return ++_created_dropdown_trigger_num;
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

    public createMoveCoordinate() {
      return Target.fromData({
        triggerId: this.id
      });
    }
  }

  /**
   * Dropdown Target View Class
   * @public
   * @param option
   **/
  export class Target {
    constructor(
      public id: number,
      public triggerId: number,
      public idName: string,
      public className: string,
      public node: any
      ) {
      this.id = this.createContentsId();
    }

    /**
     * Static Function
    **/
    static fromData(data: any): Target {
      return new Target(
        0,
        data.triggerId ? data.triggerId : null,
        data.node && data.node.id ? data.node.id : null,
        data.node && data.node.className ? data.node.className : null,
        data.node ? data.node : null
      );
    }

    /**
     * Private Function
    **/
    private createContentsId(): number {
      return ++_created_dropdown_target_num;
    }

    /**
     * Public Function
     **/
    public getItemNode(node) {
      //return this.getChildren(node);
    }

    public scroll() {
    }
  }
}
