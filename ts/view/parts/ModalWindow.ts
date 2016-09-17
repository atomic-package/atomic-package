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


  export class ModalWindowBackDrop {
    private _SHOW_CLASS_NAME = 'show';

    private node: any;

    constructor(
      ) {
      this.createElement();
    }

    public createElement() {
      this.node = document.createElement("div");
      this.node.classList.add('modalWindowBackDrop');
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

}
