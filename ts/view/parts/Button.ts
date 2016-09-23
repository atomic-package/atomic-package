/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module ButtonView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;

  var _created_button_trigger_num: number = 0;

  /**
   * Button View Class
   * @public
   * @param option
   **/
  export class Button {
    private triggerList = [];

    static fetchElements(callback): void {
      document.addEventListener("DOMContentLoaded", () => {
        this.triggerList = this.createFromTriggerElement();

        callback({
          triggerList: this.triggerList
        });
      });
    }

    public static createFromTriggerElement() {
      var triggerList = [],
          triggerViewList = [];

      // とりあえず [data-ap-btn]のみ取得
      triggerList.push(document.querySelectorAll('[data-ap-btn]'));

      triggerList.forEach((nodeList: NodeList) => {
        for (var i: number = 0; i < nodeList.length; i++) {
          triggerViewList.push(Trigger.fromData(nodeList[i]));
        }
      });

      return triggerViewList;
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
        data.dataset.apBtn ? data.dataset.apBtn : null,
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    private createTriggerId(): number {
      return ++_created_button_trigger_num;
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
}
