/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module TabView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;

  var _created_trigger_num: number = 0,
      _created_trigger_item_num: number = 0;

  var _created_contents_num: number = 0,
      _created_contents_item_num: number = 0;

  /**
   * Tab View Class
   * @public
   * @param option
   **/
  export class Tab {
    /**
     * Tab Function
     **/
    static fetchElements(callback) {
      document.addEventListener("DOMContentLoaded", () => {
        var triggerList = APView.createFromTriggerElement(['[data-ap-tab]'], Trigger);

        callback({
          triggerList: triggerList,
          targetList: APView.createTargetView(triggerList, Target)
        });
      });
    }
  }

  /**
   * Tab Trigger View Class
   * @public
   * @param option
   **/
  export class Trigger {
    private _SELECT_CLASS_NAME = 'active';

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
        data.selectedNumber ? data.selectedNumber : 0,
        data.dataset.apSwitcher ? data.dataset.apSwitcher : null,
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    private createTriggerId(): number {
      return ++_created_trigger_num;
    }

    private getChildren(node) {
      var childrenList = [];

      for(var i: number = 0; i < node.children.length; i++) {
        childrenList.push(
          TriggerItem.fromData({
            parentId: this.id,
            itemNumber: i + 1,
            isSelected: this.getIsSelected(i, node.children[i]),
            //node: APView.getFirstChildLastNode(node.children[i])
            node: node.children[i]
          })
        );
      }
      return childrenList;
    }

    private getIsSelected(index, node): boolean {
      if(node.classList.contains(this._SELECT_CLASS_NAME)) {
        if(this.selectedNumber === 0) {
          this.selectedNumber = index + 1;
          return true;
        }
      }
      return false;
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
   * Tab ToggleItem View Class
   * @public
   * @param option
   **/
  export class TriggerItem {
    private selectCallBackFunction: Function = () => {};
    private resetCallBackFunction: Function = () => {};

    private _SELECT_CLASS_NAME = 'active';
    private _DISABLE_CLASS_NAME = 'disable';

    constructor(
      public id: number,
      public parentId: number,
      public idName: string,
      public className: string,
      public itemNumber: number,
      public isSelected: boolean,
      public isDisable: boolean,
      public node: any
      ) {
      this.id = this.createTriggerItemId();
      this.setEventListener();
      this.checkIsDisable();
    }

    /**
     * Static Function
     **/
    static fromData(data: any): TriggerItem {
      return new TriggerItem(
        data.id ? data.id : 1,
        data.parentId ? data.parentId : 1,
        data.node && data.node.id ? data.node.id : null,
        data.node && data.node.className ? data.node.className : null,
        data.itemNumber ? data.itemNumber : 1,
        data.isSelected ? data.isSelected : false,
        data.isDisable ? data.isDisable : false,
        data.node ? data.node : null
      );
    }

    /**
     * Private Function
     **/
    private createTriggerItemId(): number {
      return ++_created_trigger_item_num;
    }

    private checkIsDisable() {
      if(this.node.classList.contains(this._DISABLE_CLASS_NAME)) {
        this.isDisable = true;
      }
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
   * Tab Target View Class
   * @public
   * @param option
   **/
  export class Target {
    constructor(
      public id: number,
      public idName: string,
      public className: string,
      public items: TargetItem[],
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
        data.node && data.node.id ? data.node.id : null,
        data.node && data.node.className ? data.node.className : null,
        data.items ? data.items : [],
        data.selectedNumber ? data.selectedNumber : 1,
        data.node ? data.node : null
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

      if(node.children) {
        for (var i: number = 0; i < node.children.length; i++) {
          lastChildren.push(
            TargetItem.fromData({
              parentId: this.id,
              itemNumber: i + 1,
              node: APView.getFirstChildLastNode(node.children[i])
            })
          );
        }
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
   * Tab TargetItem View Class
   * @public
   * @param option
   **/
  export class TargetItem {
    private _SELECT_CLASS_NAME = 'show';

    constructor(
      public id: number,
      public parentId: number,
      public idName: string,
      public className: string,
      public itemNumber: number,
      public isSelected: boolean,
      public node: any
      ) {
      this.id = this.createContentsItemId();
    }

    /**
     * Static Function
     **/
    static fromData(data: any): TargetItem {
      return new TargetItem(
        0,
        data.parentId ? data.parentId : 1,
        data.node && data.node.id ? data.node.id : null,
        data.node && data.node.className ? data.node.className : null,
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