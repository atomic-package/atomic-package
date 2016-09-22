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
        data.dataset.apScroll ? data.dataset.apScroll : null,
        data ? data : null
      );
    }

    static fetchElements(callback): void {
      var toggleElements = {
        trigger: [],
        targets: []
      };

      document.addEventListener("DOMContentLoaded", () => {
        var selectors: string[] = [];

        // trigger
        toggleElements.trigger.push(document.querySelectorAll('[data-ap-scroll]'));

        // target
        toggleElements.trigger.forEach((nodeList: any) => {
          nodeList.forEach((node: any) => {
            if(node.dataset.apScroll) {
              selectors.push(node.dataset.apScroll);
            }
          });
        });

        selectors = APModel.uniq(selectors);

        for (var i: number = 0; i < selectors.length; i++) {
          toggleElements.targets.push(document.querySelectorAll(selectors[i]));
        }

        callback(toggleElements);
      });
    }

    /**
     * Private Function
     **/
    private createTriggerId(): number {
      return ++_created_scroll_trigger_num;
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
   * SmoothScroll Contents View Class
   * @public
   * @param option
   **/
  export class Target {

    constructor(
      public id: number,
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
        data.idName ? data.idName : data.id,
        data.className ? data.className : '',
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    private createContentsId(): number {
      return ++_created_scroll_target_num;
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
