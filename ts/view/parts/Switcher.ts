/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SwitcherView {
   var _created_trigger_num: number = 0;
   var _created_trigger_item_num: number = 0;

  /**
   * Switcher Trigger Class
   * @public
   * @param option
   **/
  export class Trigger {
    constructor(
      public id: number,
      public node: any
      ) {
      this.id = this.createTriggerId();
    }

    static fromData(data: any): Trigger {
      return new Trigger(
        0,
        data ? data : null
      );
    }

    private createTriggerId(): number {
      return ++_created_trigger_num;
    }

    private getChildren(children) {
      var lastChildren = [];
      for(var i: number = 0; i < children.length; i++) {
        lastChildren.push(
          TriggerItem.fromData({
            parentId: this.id,
            view: this.getLastChild(children[i])
          })
        );
      }
    }

    private getLastChild(child) {
      if(child.children.length > 0) {
        return this.getLastChild(child.children[0]);
      } else {
        return child;
      }
    }


    public getItemNode() {
      this.getChildren(this.node.children);
    }

  }

  /**
   * Switcher ToggleItem Class
   * @public
   * @param option
   **/
  export class TriggerItem {
    constructor(
      public id: number,
      public parentId: number,
      public className: string,
      public idName: string,
      public view: any
      ) {
      this.id = this.createTriggerItemId();

    }

    static fromData(data: any): TriggerItem {
      return new TriggerItem(
        data.id ? data.id : 1,
        data.parentId ? data.parentId : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.view ? data.view : null
      );
    }

    private createTriggerItemId(): number {
      return ++_created_trigger_item_num;
    }

  }

}