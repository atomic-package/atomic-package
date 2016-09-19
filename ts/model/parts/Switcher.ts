/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SwitcherModel {

  /**
   * Switcher Trigger Class
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
      public view: any
      ) {
    }

    static fromData(data: any): Trigger {
      return new Trigger(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.items ? data.items : null,
        data.selectedNumber ? data.selectedNumber : 1,
        data.items.length,
        data.view ? data.view : null
      );
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
        data.isSelected ? data.isSelected : false,
        data.view ? data.view : null
      );
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
