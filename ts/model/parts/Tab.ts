/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

namespace TabModel {
  import APModel = AtomicPackages.Model;

  /**
   * Switcher Model Class
   * @public
   * @param option
   **/
  export class Tab {
    constructor(
      public targetList: Target[],
      public triggerList: Trigger[]
      ) {
      this.setTriggerCallBack();
      this.setTriggerTargetId();
    }

    /**
     * Static Function
     **/
    public static fromData(data: any): Tab {
      return new Tab(
        data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
        data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []
      );
    }

    /**
     * Private Function
     **/
    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        var parent = trigger;

        trigger.items.forEach((item: TriggerItem) => {
          item.view.select((view) => {
            parent.select(view, this.targetList);
          }, true);
        });
      });
    }

    private setTriggerTargetId() {
      for(var i: number = 0; i < this.triggerList.length; i++) {
        this.triggerList[i].setTargetId(this.targetList);
      }
    }

    /**
     * Public Function
     **/
    public select(data: any): void {
    }

  }

  /**
   * Tab Trigger Model Class
   * @public
   * @param option
   **/
  export class Trigger {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public items: TriggerItem[],
      public itemLength: number,
      public selectedNumber: number,
      public target: any,
      public targetId: number[],
      public view: SwitcherView.Trigger
      ) {
      this.items = this.createItem(this.items);
      this.items[selectedNumber - 1].select();
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Trigger {
      return new Trigger(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.items ? data.items : null,
        data.items.length,
        data.selectedNumber ? data.selectedNumber : 1,
        data.target ? data.target : null,
        data.targetId ? data.targetId : [],
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    private createItem(items) {
      var itemModels = [];

      for(var i: number = 0; i < items.length; i++) {
        itemModels.push(TriggerItem.fromData(items[i]));
      }

      return itemModels;
    }


   private searchItem(id: number) {
     return this.items.filter((item: any) => {
       return (item.id == id);
     })[0];
   }

    private setSelectedNumber(item: TriggerItem): void {
      this.selectedNumber = item.itemNumber;
    }

    /**
     * Public Function
     **/
    public setTargetId(contentsViewList: Target[]) {
      var searchContents: Target[] = APModel.search(contentsViewList, this.target);

      if(searchContents) {
        for (var i: number = 0; i < searchContents.length; i++) {
          this.targetId.push(searchContents[i].id);
        }
      }
    }

    public select(selectItem, targetList) {
      if(selectItem.isDisable) return;

      this.selectItem(selectItem);

      for(var i: number = 0; i < this.targetId.length; i++) {
        for(var n: number = 0; n < targetList.length; n++) {
          if(targetList[n].id === this.targetId[i]) {
            targetList[n].select(selectItem.itemNumber);
          }
        }
      }
    }

    public selectItem(selectItem) {
      this.resetSelected();
      this.setSelectedNumber(selectItem);
      this.items[selectItem.itemNumber - 1].select();
    }

    public resetSelected(): void {
      this.items.forEach((item: TriggerItem) => {
        item.reset();
      });
    }
  }

  /**
   * Tab ToggleItem Class
   * @public
   * @param option
   **/
  export class TriggerItem {
    constructor(
      public id: number,
      public parentId: number,
      public className: string,
      public idName: string,
      public itemNumber: number,
      public isSelected: boolean,
      public isDisable: boolean,
      public view: TabView.TriggerItem
      ) {
    }

    static fromData(data: any): TriggerItem {
      return new TriggerItem(
        data.id ? data.id : 1,
        data.parentId ? data.parentId : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.itemNumber ? data.itemNumber : 0,
        data.isSelected ? data.isSelected : false,
        data.isDisable ? data.isDisable : false,
        data ? data : null
      );
    }

    public reset() {
      this.isSelected = false;
      this.view.resetItem();
    }

    public select() {
      this.isSelected = true;
      this.view.selectItem();
    }
  }

  /**
   * Tab Contents Model Class
   * @public
   * @param option
   **/
  export class Target {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public items: TargetItem[],
      public selectedNumber: number,
      public view: any
      ) {
      this.items = this.createItem(this.items);
      this.items[this.selectedNumber - 1].select();
    }

    static fromData(data: any): Target {
      return new Target(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.items ? data.items : null,
        data.selectedNumber ? data.selectedNumber : 1,
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    private createItem(items) {
      var itemModels = [];
      for(var i: number = 0; i < items.length; i++) {
        itemModels.push(TargetItem.fromData(items[i]));
      }
      return itemModels;
    }

    private selectItem(itemNumber: number) {
      this.selectedNumber = itemNumber;
      this.items[this.selectedNumber - 1].select();
    }

    public resetSelected(): void {
      this.items.forEach((item: TargetItem) => {
        item.reset();
      });
    }

    public select(itemNumber) {
      this.resetSelected();
      this.selectItem(itemNumber);
    }
  }

  /**
   * Tab Target Item Model Class
   * @public
   * @param option
   **/
  export class TargetItem {
    constructor(
      public id: number,
      public parentId: number,
      public className: string,
      public idName: string,
      public isShow: boolean,
      public view: any
      ) {
    }

    static fromData(data: any): TargetItem {
      return new TargetItem(
        data.id ? data.id : 1,
        data.parentId ? data.parentId : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.isShow ? data.isShow : false,
        data ? data : null
      );
    }

    public reset() {
      this.isShow = false;
      this.view.resetItem();
    }


    public select() {
      this.isShow = true;
      this.view.selectItem();
    }

  }
}