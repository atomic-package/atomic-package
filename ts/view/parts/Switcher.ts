/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SwitcherView {
   var _created_trigger_num: number = 0;
   var _created_trigger_item_num: number = 0;

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
      public node: any
      ) {
      this.id = this.createTriggerId();
      this.items = this.getItemNode(this.node);
    }

    static fromData(data: any): Trigger {
      return new Trigger(
        0,
        data.className ? data.className : null,
        data.id ? data.id : null,
        data.items ? data.items : [],
        data.selectedNumber ? data.selectedNumber : 1,
        data ? data : null
      );
    }

    static fetchElements(callback) {
      var switcherElements = {
        trigger: [],
        contents: []
      };

      document.addEventListener("DOMContentLoaded", () => {
        switcherElements.trigger.push(document.querySelectorAll('[data-ap-switcher]'));
        callback(switcherElements);
      });
    }

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
            node: this.getLastChild(node.children[i])
          })
        );
      }
      return lastChildren;
    }

    private getLastChild(child) {
      if(child.children.length > 0) {
        return this.getLastChild(child.children[0]);
      } else {
        return child;
      }
    }

    public getItemNode(node) {
      return this.getChildren(node);
    }

    public resetSelectedClassName() {

    }

  }

  /**
   * Switcher ToggleItem Class
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

    private resetItem() {
      this.removeSelectClass();
    }

    private selectItem() {
      this.addSelectClass();
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

//      if(!isFirst) {
//        fn(this);
//      }
    }

  }

}