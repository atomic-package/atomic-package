/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module AtomicPackageModel {
  /**
   * ModalWindow Class
   * @public
   * @param option
   **/
  export class ModalWindow {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public isOpen: boolean,
      public view: any
      ) {
      this.addIdName();
    }

    static fromData(data: any): ModalWindow {
      return new ModalWindow(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.isOpen ? data.isOpen : false,
        data.view ? data.view: null
      );
    }

    public addIdName() {
      this.view.addIdName(this.idName);
    }

    public open() {
      this.isOpen = true;
      this.view.open();
    }

    public close() {
      this.isOpen = false;
      this.view.close();
    }

    public destroy() {
      this.view.destroy();
    }
  }

  /**
   * ModalWindowBackDrop Class
   * @public
   * @param option
  **/
  export class ModalWindowBackDrop {
    constructor(
      public isShow: boolean,
      public view: any
      ){
    }

    static fromData(data: any): ModalWindowBackDrop {
      return new ModalWindowBackDrop(
        data.isShow ? data.isShow: false,
        data.view ? data.view: null
      );
    }

    public show() {
      this.isShow = true;
      this.view.show();
    }

    public hide() {
      this.isShow = false;
      this.view.hide();
    }
  }

  /**
   * ModalWindowTrigger Class
   * @public
   * @param option
   **/
  export class ModalWindowTrigger {
    constructor(
      public view: any
      ){
    }

    static fromData(data: any): ModalWindowTrigger {
      return new ModalWindowTrigger(
        data.view ? data.view: null
      );
    }

    public open() {

    }
  }

}
