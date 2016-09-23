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
    constructor() {
    }

    static fetchElements(callback): void {
      document.addEventListener("DOMContentLoaded", () => {
        var triggerList = [];
        triggerList = this.createFromTriggerElement();

        callback({
          triggerList: triggerList,
          targetList: this.createTargetView(triggerList)
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

        } else if(trigger.target) {
          selectors.push(trigger.target);
        }
      });

      selectors = APModel.uniq(selectors);

      for (var i: number = 0; i < selectors.length; i++) {
        targetList.push(document.querySelectorAll(selectors[i]));
      }

      return this.createFromTargetsElement(targetList);
    }

    public static createFromTargetsElement(targetList) {
      var targetViewList = [];

      targetList.forEach((nodeList: NodeList) => {
        for (var i: number = 0; i < nodeList.length; i++) {
          targetViewList.push(Target.fromData(nodeList[i]));
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
  }

  /**
   * SmoothScroll Coordinate View Class
   * @public
   * @param option
  **/
  export class Coordinate {
    constructor(
      public id: number,
      public triggerId: number,
      public coordinate: number
      ) {
      //this.id = this.createContentsId();
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
      public idName: string,
      public className: string,
      public coordinate: number,
      public node: any
      ) {
      this.id = this.createContentsId();
      if(this.node) {
        this.coordinate = this.getCoordinate(this.node);
      }
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Target {
      return new Target(
        0,
        data.id ? data.id : null,
        data.className ? data.className : '',
        0,
        data ? data : null
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
