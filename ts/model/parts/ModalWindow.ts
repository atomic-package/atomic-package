/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module Model {
  export class ModalWindow {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public isOpen: boolean
      ) {
    }

    static fromData(data: any): ModalWindow {
      return new ModalWindow(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.isOpen ? data.isOpen : false
      );
    }

    public open() {
      this.isOpen = true;
    }

    public close() {
      this.isOpen = false;
    }
  }
}
