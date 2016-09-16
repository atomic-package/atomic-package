/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module Model {
  var created_modal_window_num = 0;

  export class ModalWindow {
    constructor(
      public id: number,
      public className: string,
      public idName: string
      ) {

    }

    static fromData(data: any): ModalWindow {
      return new ModalWindow(
        data.id ? data.id : 0,
        data.className ? data.className : '',
        data.idName ? data.idName : ''
      );
    }

    private createId(): number {
      return ++created_modal_window_num;
    }
  }
}
