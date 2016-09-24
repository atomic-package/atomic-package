/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SwitcherModel {
  import APModel = AtomicPackages.Model;

  /**
   * Switcher Model Class
   * @public
   * @param option
   **/
  export class Switcher {
    constructor(
      //public targetList: Target[],
      public triggerList: Trigger[]
      ) {
//      this.setTriggerCallBack();
//      this.setTriggerTargetId();
    }

    /**
     * Static Function
     **/
    public static fromData(data: any): Switcher {
      return new Switcher(
        //data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
        data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []
      );
    }
  }

  /**
   * Switcher Trigger Model Class
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
    public setTargetId(contentsViewList: Contents[]) {
      var searchContents: Contents[] = APModel.search(contentsViewList, this.target);

      if(searchContents) {
        for (var i: number = 0; i < searchContents.length; i++) {
          this.targetId.push(searchContents[i].id);
        }
      }
    }

    public resetSelected(): void {
      this.items.forEach((item: TriggerItem) => {
        item.reset();
      });
    }

    public select(itemId: number) {
      var selectItem = this.searchItem(itemId);

      this.resetSelected();
      this.setSelectedNumber(selectItem);

      selectItem.select();
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
      public itemNumber: number,
      public isSelected: boolean,
      public view: SwitcherView.TriggerItem
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
   * Switcher Contents Model Class
   * @public
   * @param option
   **/
  export class Contents {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public items: ContentsItem[],
      public selectedNumber: number,
      public view: any
      ) {
      this.items = this.createItem(this.items);
      this.items[selectedNumber - 1].select();
    }

    static fromData(data: any): Contents {
      return new Contents(
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
        itemModels.push(ContentsItem.fromData(items[i]));
      }
      return itemModels;
    }

    private selectItem(itemNumber: number) {
      this.selectedNumber = itemNumber;
      this.items[this.selectedNumber - 1].select();
    }

    public resetSelected(): void {
      this.items.forEach((item: ContentsItem) => {
        item.reset();
      });
    }

    public select(trigger: Trigger) {
      this.resetSelected();

      for(var i: number = 0; i < trigger.targetId.length; i++) {
        if(trigger.targetId[i] == this.id) {
          this.selectItem(trigger.selectedNumber);
        }
      }
    }
  }

  /**
   * Switcher Contents Item Model Class
   * @public
   * @param option
   **/
  export class ContentsItem {
    constructor(
      public id: number,
      public parentId: number,
      public className: string,
      public idName: string,
      public isShow: boolean,
      public view: any
      ) {
    }

    static fromData(data: any): ContentsItem {
      return new ContentsItem(
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
