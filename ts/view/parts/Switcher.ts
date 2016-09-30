/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SwitcherView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;

  var _created_trigger_num: number = 0,
      _created_trigger_item_num: number = 0;

  var _created_contents_num: number = 0,
      _created_contents_item_num: number = 0;

  /**
   * Switcher View Class
   * @public
   * @param option
   **/
  export class Switcher {
    /**
     * Static Function
    **/
//    static fetchElements(callback) {
//      document.addEventListener("DOMContentLoaded", () => {
//        var triggerList = APView.createFromTriggerElement(['[data-ap-switcher]'], Trigger);
//
//        callback({
//          triggerList: triggerList,
//          targetList: APView.createTargetView(triggerList, Target)
//        });
//      });
//    }
  }

  /**
   * Switcher Trigger View Class
   * @public
   * @param option
   **/
  export class Trigger {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public items: TriggerItem[],
      public selectedNumber: number,
      public target: any,
      public node: any
      ) {
      this.id = this.createTriggerId();
      this.items = this.getItemNode(this.node);
    }

    /**
     * Static Function
    **/
    static fromData(data: any): Trigger {
      return new Trigger(
        0,
        data.className ? data.className : null,
        data.id ? data.id : null,
        data.items ? data.items : [],
        data.selectedNumber ? data.selectedNumber : 1,
        data.dataset.apSwitcher ? data.dataset.apSwitcher : null,
        data ? data : null
      );
    }

    static fetchElements(callback): void {
      var switcherElements = {
        trigger: [],
        contents: []
      };

      document.addEventListener("DOMContentLoaded", () => {
        var selectors: string[] = [];

        // trigger
        switcherElements.trigger.push(document.querySelectorAll('[data-ap-switcher]'));

        // contents
        switcherElements.trigger.forEach((nodeList: any) => {
          nodeList.forEach((node: any) => {
            if(node.dataset.apSwitcher) {
              selectors.push(node.dataset.apSwitcher);
            }
          });
        });

        selectors = APModel.uniq(selectors);

        for (var i: number = 0; i < selectors.length; i++) {
          switcherElements.contents.push(document.querySelectorAll(selectors[i]));
        }

        callback(switcherElements);
      });
    }

    /**
     * Private Function
    **/
    private createTriggerId(): number {
      return ++_created_trigger_num;
    }

    private getChildren(node) {
      var lastChildren = [];

      for(var i: number = 0; i < node.children.length; i++) {
        lastChildren.push(
          TriggerItem.fromData({
            parentId: this.id,
            itemNumber: i + 1,
            node: APView.getFirstChildLastNode(node.children[i])
          })
        );
      }
      return lastChildren;
    }

    /**
     * Public Function
    **/
    public getItemNode(node) {
      return this.getChildren(node);
    }

    public resetSelectedClassName() {

    }
  }


  /**
   * Switcher ToggleItem View Class
   * @public
   * @param option
   **/
  export class TriggerItem {
    private selectCallBackFunction: Function = () => {};
    private resetCallBackFunction: Function = () => {};

    private _SELECT_CLASS_NAME = 'active';

    constructor(
      public id: number,
      public parentId: number,
      public className: string,
      public idName: string,
      public itemNumber: number,
      public isSelected: boolean,
      public node: any
      ) {
      this.id = this.createTriggerItemId();
      this.setEventListener();
    }

    /**
     * Static Function
    **/
    static fromData(data: any): TriggerItem {
      return new TriggerItem(
        data.id ? data.id : 1,
        data.parentId ? data.parentId : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.itemNumber ? data.itemNumber : 1,
        data.isSelected ? data.isSelected : false,
        data.node ? data.node : null
      );
    }

    /**
     * Private Function
    **/
    private createTriggerItemId(): number {
      return ++_created_trigger_item_num;
    }

    private setEventListener(): void {
      this.node.addEventListener('click', (e) => {
        e.preventDefault();

        this.select(this.selectCallBackFunction);
      }, false);
    }

    private resetSelected() {

    }

    private removeSelectClass() {
      if(this.node.classList.contains(this._SELECT_CLASS_NAME)) {
        this.node.classList.remove(this._SELECT_CLASS_NAME);
      }
    }

    private addSelectClass() {
      if(!this.node.classList.contains(this._SELECT_CLASS_NAME)) {
        this.node.classList.add(this._SELECT_CLASS_NAME);
      }
    }

    /**
     * Public Function
    **/
    public select(fn?, isFirst?): void {
      this.selectCallBackFunction = fn;

      if(!isFirst) {
        fn(this);
      }
    }

    public reset(fn?, isFirst?): void {
      this.resetCallBackFunction = fn;
    }

    public resetItem() {
      this.removeSelectClass();
    }

    public selectItem() {
      this.addSelectClass();
    }

  }


  /**
   * Switcher Contents View Class
   * @public
   * @param option
   **/
  export class Target {
    constructor(
      public id: number,
      public idName: string,
      public className: string,
      public items: ContentsItem[],
      public selectedNumber: number,
      public node: any
      ) {
      this.id = this.createContentsId();
      this.items = this.getItemNode(this.node);
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Target {
      return new Target(
        0,
        data.idName ? data.idName : data.id,
        data.className ? data.className : '',
        data.items ? data.items : [],
        data.selectedNumber ? data.selectedNumber : 1,
        data ? data : null
      );
    }

    /**
     * Private Function
    **/
    private createContentsId(): number {
      return ++_created_contents_num;
    }

    private getChildren(node) {
      var lastChildren = [];

      for(var i: number = 0; i < node.children.length; i++) {
        lastChildren.push(
          ContentsItem.fromData({
            parentId: this.id,
            itemNumber: i + 1,
            node: APView.getFirstChildLastNode(node.children[i])
          })
        );
      }
      return lastChildren;
    }

    /**
     * Public Function
    **/
    public getItemNode(node) {
      return this.getChildren(node);
    }
  }


  /**
   * Switcher ContentsItem View Class
   * @public
   * @param option
   **/
  export class ContentsItem {
    private _SELECT_CLASS_NAME = 'show';

    constructor(
      public id: number,
      public parentId: number,
      public className: string,
      public idName: string,
      public itemNumber: number,
      public isSelected: boolean,
      public node: any
      ) {
      this.id = this.createContentsItemId();
    }

    /**
     * Static Function
     **/
    static fromData(data: any): ContentsItem {
      return new ContentsItem(
        0,
        data.parentId ? data.parentId : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.itemNumber ? data.itemNumber : 1,
        data.isSelected ? data.isSelected : false,
        data.node ? data.node : null
      );
    }

    private createContentsItemId(): number {
      return ++_created_contents_item_num;
    }

    private removeSelectClass() {
      if(this.node.classList.contains(this._SELECT_CLASS_NAME)) {
        this.node.classList.remove(this._SELECT_CLASS_NAME);
      }
    }

    private addSelectClass() {
      if(!this.node.classList.contains(this._SELECT_CLASS_NAME)) {
        this.node.classList.add(this._SELECT_CLASS_NAME);
      }
    }

    /**
     * Public Function
    **/
    public resetItem() {
      this.removeSelectClass();
    }

    public selectItem() {
      this.addSelectClass();
    }

  }
}
