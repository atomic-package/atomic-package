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
      public view: any
      ) {
    }

    static fromData(data: any): Trigger {
      return new Trigger(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.items ? data.items : null,
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
      public className: string,
      public idName: string,
      public items: boolean,
      public view: any
      ) {
    }

    static fromData(data: any): TriggerItem {
      return new TriggerItem(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.isOpen ? data.isOpen : false,
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
      public view: any
      ) {
    }

    static fromData(data: any): Contents {
      return new Contents(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.items ? data.items : null,
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
      public className: string,
      public idName: string,
      public items: boolean,
      public view: any
      ) {
    }

    static fromData(data: any): ContentsItem {
      return new ContentsItem(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.isOpen ? data.isOpen : false,
        data.view ? data.view : null
      );
    }
  }
}
