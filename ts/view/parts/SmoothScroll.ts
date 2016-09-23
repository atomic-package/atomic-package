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
      var scrollElements = {
        trigger: [],
        targets: []
      };

      document.addEventListener("DOMContentLoaded", () => {
        var selectors: string[] = [];

        // trigger
        scrollElements.trigger.push(document.querySelectorAll('[data-ap-scroll]'));

        // target
        scrollElements.trigger.forEach((nodeList: any) => {
          nodeList.forEach((node: any) => {
            if(parseInt(node.dataset.apScroll, 10)) {

//              scrollElements.coordinate.push({
//                coordinate: parseInt(node.dataset.apScroll, 10),
//                triggerNode: node
//              });

            } else if(node.dataset.apScroll) {
              selectors.push(node.dataset.apScroll);
            }
          });
        });

        selectors = APModel.uniq(selectors);

        for (var i: number = 0; i < selectors.length; i++) {
          scrollElements.targets.push(document.querySelectorAll(selectors[i]));
        }

        callback(this.create(scrollElements));
      });
    }

    public static create(scrollElements) {
      var scrollView = {
        triggerList: [],
        targetList: []
      };

      scrollElements.trigger.forEach((nodeList: NodeList) => {
        scrollView.triggerList.push(this.createFromTriggerElement(nodeList));
      });

      scrollElements.targets.forEach((nodeList: NodeList) => {
        scrollView.targetList.push(this.createFromTargetsElement(nodeList));
      });
      return scrollView;
    }

    public static createFromTriggerElement(nodeList: NodeList) {
      for(var i: number = 0; i < nodeList.length; i++) {
        return Trigger.fromData(nodeList[i]);
      }
    }

    public static createFromTargetsElement(nodeList: NodeList) {
      for(var i: number = 0; i < nodeList.length; i++) {
        return Target.fromData(nodeList[i]);
      }
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
        data.idName ? data.idName : data.id,
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
