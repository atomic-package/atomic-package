/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module AtomicPackageView {
  export class ModalWindow {
    private _OPEN_CLASS_NAME = 'open';

    constructor(
      public node: any
      ) {
    }

    static fromData(data: any): ModalWindow {
      return new ModalWindow(
        data ? data : null
      );
    }

    public open() {
      this.node.classList.add(this._OPEN_CLASS_NAME);
    }

    public close() {
      if(this.node.classList.contains(this._OPEN_CLASS_NAME)) {
        this.node.classList.remove(this._OPEN_CLASS_NAME);
      }
    }

    public addIdName(idName: string) {
      this.node.id = idName;
    }

    public destroy(): void {
      var DOM = document.getElementById(this.node.id);
      DOM.parentNode.removeChild(DOM);
    }

    public createElement() {

    }

  }

  /**
   * ModalWindowBackDrop Class
   * @public
   * @param option
   **/
  export class ModalWindowBackDrop {
    private _BACKDROP_ELEMENT_CLASS_NAME: string = 'modalWindowBackDrop';
    private _SHOW_CLASS_NAME: string = 'show';
    private node: any;

    constructor(
      ) {
      this.createElement();
    }

    public createElement() {
      this.node = document.createElement("div");
      this.node.classList.add(this._BACKDROP_ELEMENT_CLASS_NAME);

      document.body.appendChild(this.node);
    }

    public show() {
      this.node.classList.add(this._SHOW_CLASS_NAME);
    }

    public hide() {
      if(this.node.classList.contains(this._SHOW_CLASS_NAME)) {
        this.node.classList.remove(this._SHOW_CLASS_NAME);
      }
    }

  }

  /**
   * ModalWindowTrigger Class
   * @public
   * @param option
   **/
  export class ModalWindowTrigger {
    private callBackFunction: Function = () => {};

    constructor(
      public node: any,
      public target: any
      ) {
      this.setEventListener();
    }

    static fromData(data: any): ModalWindowTrigger {
      return new ModalWindowTrigger(
        data ? data : null,
        data.dataset.apModal ? data.dataset.apModal : data.hash
      );
    }

    private setEventListener() {
      this.node.addEventListener('click',(e) => {
        e.preventDefault();
        this.open(this.callBackFunction);
      }, false);
    }

    public open(fn, isFirst?): void {
      this.callBackFunction = fn;
      if(!isFirst) {
        fn(this.target);
      }
    }

  }

}
