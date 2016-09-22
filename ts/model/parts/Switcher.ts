/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SwitcherModel {
  import APModel = AtomicPackages.Model;

  import TriggerView  = SwitcherView.Trigger;

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
      public view: TriggerView
      ) {
      this.items = this.createItem(this.items);
      this.items[selectedNumber - 1].select();
    }

    static fromData(data: any): Trigger {
      return new Trigger(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.items ? data.items : null,
        data.items.length,
        data.selectedNumber ? data.selectedNumber : 1,
        data ? data : null
      );
    }

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

    private setSelectedNumber(item) {
      this.selectedNumber = item.itemNumber;
    }

    public resetSelected() {
      this.items.forEach((item: TriggerItem) => {
        item.reset();
      });
    }

    public select(id: number) {
      var selectItem = this.searchItem(id);

      this.resetSelected();
      this.setSelectedNumber(selectItem);

      selectItem.select();

      console.log(this);
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
      public view: any
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
   * Switcher Contents Class
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
    }

    static fromData(data: any): Contents {
      return new Contents(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.items ? data.items : null,
        data.selectedNumber ? data.selectedNumber : 1,
        data.view ? data.view : null
      );
    }
  }

  /**
   * Switcher Contents Item Class
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
        data.view ? data.view : null
      );
    }
  }
}
