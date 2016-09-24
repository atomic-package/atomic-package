/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SideMenuView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;

  var _created_toggle_trigger_num: number  = 0,
      _created_toggle_contents_num: number = 0;

  /**
   * SideMenu View Class
   * @public
   * @param option
   **/
  export class SideMenu {
    private triggerList = [];

    /**
     * Static Function
     **/
    static fetchElements(callback) {
      document.addEventListener("DOMContentLoaded", () => {
        this.triggerList = APView.createFromTriggerElement(['[data-ap-toggle]'], Trigger);

        callback({
          triggerList: this.triggerList,
          targetList: APView.createTargetView(this.triggerList, Target)
        });
      });
    }
  }

  /**
   * SideMenu Trigger View Class
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
        data.dataset.apSide ? data.dataset.apSide : null,
        data ? data : null
      );
    }

    static fetchElements(callback): void {
      var sideMenuElements = {
        trigger: [],
        contents: []
      };

      document.addEventListener("DOMContentLoaded", () => {
        var selectors: string[] = [];

        // trigger
        sideMenuElements.trigger.push(document.querySelectorAll('[data-ap-side]'));

        // contents
        sideMenuElements.trigger.forEach((nodeList: any) => {
          nodeList.forEach((node: any) => {
            if(node.dataset.apSide) {
              selectors.push(node.dataset.apSide);
            }
          });
        });

        selectors = APModel.uniq(selectors);

        for (var i: number = 0; i < selectors.length; i++) {
          sideMenuElements.contents.push(document.querySelectorAll(selectors[i]));
        }

        callback(sideMenuElements);
      });
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
   * SideMenu Target View Class
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
