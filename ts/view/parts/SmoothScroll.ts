/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SmoothScrollView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;

  var _created_scroll_trigger_num: number  = 0,
      _created_scroll_target_num: number = 0;

  /**
   * SmoothScroll View Class
   * @public
   * @param option
  **/
  export class SmoothScroll {
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

      // とりあえず [data-ap-scroll]のみ取得
      triggerList.push(document.querySelectorAll('[data-ap-scroll]'));

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
        if(parseInt(trigger.target, 10)) {
          trigger.setMoveCoordinate();
          targetViewList.push(trigger.createMoveCoordinate());

        } else if(trigger.target) {
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
   * SmoothScroll Trigger View Class
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
      public coordinate: number,
      public moveCoordinate: number,
      public node: any
      ) {
      this.id = this.createTriggerId();
      this.coordinate = this.getCoordinate(this.node);

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
        data.dataset.apScroll ? data.dataset.apScroll : null,
        0,
        0,
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    private createTriggerId(): number {
      return ++_created_scroll_trigger_num;
    }

    private getCoordinate(node) {
      var rect = node.getBoundingClientRect();
      return rect.top + window.pageYOffset;
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

    public setMoveCoordinate() {
      this.moveCoordinate = parseInt(this.target, 10);
      this.target = null;
    }

    public createMoveCoordinate() {
      return Target.fromData({
        triggerId: this.id,
        coordinate: this.coordinate + this.moveCoordinate
      });
    }
  }

  /**
   * SmoothScroll Target View Class
   * @public
   * @param option
  **/
  export class Target {
    constructor(
      public id: number,
      public triggerId: number,
      public idName: string,
      public className: string,
      public coordinate: number,
      public node: any
      ) {
      this.id = this.createContentsId();
      if(this.node && this.coordinate == 0) {
        this.coordinate = this.getCoordinate(this.node);
      }
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
        data.coordinate ? data.coordinate : 0,
        data.node ? data.node : null
      );
    }

    /**
     * Private Function
     **/
    private createContentsId(): number {
      return ++_created_scroll_target_num;
    }

    private getCoordinate(node) {
      var rect = node.getBoundingClientRect();
      return rect.top + window.pageYOffset;
    }

    /**
     * Public Function
     **/
    public getItemNode(node) {
      //return this.getChildren(node);
    }

    public scroll() {
      window.scrollTo(0, this.coordinate);
    }
  }
}
