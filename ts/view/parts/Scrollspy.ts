/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module ScrollSpyView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;

  var _created_scroll_spy_trigger_num: number  = 0,
      _created_scroll_spy_target_num: number = 0;

  /**
   * ScrollSpy View Class
   * @public
   * @param option
   **/
  export class ScrollSpy {
    static fetchElements(callback): void {
      document.addEventListener("DOMContentLoaded", () => {
        callback({
          triggerList: this.createTrigger(),
          targetList: this.createTargetView()
        });
      });
    }

    public static createTrigger() {
      if(document.querySelectorAll('[data-ap-scrollspy]')) {
        //
      }
    }

    public static createTargetView() {
      var targetList = [],
          targetViewList = [];

      // とりあえず [data-ap-scrollspy]のみ取得
      targetList.push(document.querySelectorAll('[data-ap-scrollspy]'));

      targetList.forEach((nodeList: NodeList) => {
        for (var i: number = 0; i < nodeList.length; i++) {
          targetViewList.push(Target.fromData(nodeList[i]));
        }
      });

      return targetViewList;
    }
  }


  /**
   * ScrollSpy Trigger View Class
   * @public
   * @param option
   **/
  export class Trigger {
    private toggleCallBackFunction: Function = () => {};

    constructor(
      public id: number,
      public option: any,
      public coordinate: number,
      public moveCoordinate: number
      ) {
      this.id = this.createTriggerId();
      //this.coordinate = this.getCoordinate(this.node);

      this.setEventListener();
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Trigger {
      return new Trigger(
        0,
        data.dataset.apScrollspy ? data.dataset.apScrollspy : null,
        0,
        0
      );
    }

    /**
     * Private Function
     **/
    private createTriggerId(): number {
      return ++_created_scroll_spy_trigger_num;
    }

    private getCoordinate(node) {
      var rect = node.getBoundingClientRect();
      return rect.top + window.pageYOffset;
    }

    private setEventListener(): void {
      window.addEventListener('scroll', (e) => {
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
  }

  /**
   * ScrollSpy Target View Class
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
      return ++_created_scroll_spy_target_num;
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
