/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module ModalWindowView {
  var _created_modal_window_num: number = 0;
  var _created_trigger_num: number = 0;

  /**
   * ModalWindow Class
   * @public
   * @param option
  **/
  export class ModalWindow {
    private _OPEN_CLASS_NAME = 'open';

    private _DEFAULT_ID_NAME: string = 'modalWindow';
    private _DEFAULT_CLASS_NAME: string = 'modalWindow';

    constructor(
      public id: number,
      public idName: string,
      public className: string,
      public isOpen: boolean,
      public node: any
      ) {
      this.id = this.createModalWindowId();

      if(this.idName == null) {
        this.idName = String(this._DEFAULT_ID_NAME + this.id);
        this.node.id = this.idName;
      }

      if(this.className == null) {
        this.className = this._DEFAULT_CLASS_NAME;
      }
    }

    /**
     * Static Function
    **/
    static fromData(data: any): ModalWindow {
      return new ModalWindow(
        0,
        data.id ? data.id : null,
        data.className ? data.className : null,
        false,
        data ? data : null
      );
    }

    static fetchElements(callback) {
      var modalElements = {
        modal: [],
        trigger: []
      };

      document.addEventListener("DOMContentLoaded", () => {
        modalElements.modal.push(document.querySelectorAll('.modalWindow'));
        modalElements.trigger.push(document.querySelectorAll('[data-ap-modal]'));
        modalElements.trigger.push(document.querySelectorAll('[data-ap-modal-close]'));

        callback(modalElements);
      });
    }

    static create() {
      return this.fromData({});
    }

    /**
     * Private Function
    **/
    private createModalWindowId(): number {
      return ++_created_modal_window_num;
    }

    /**
     * Public Function
    **/
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

    private callBackFunction: Function = () => {};
    private node: any;

    constructor(
      ) {
      this.createElement();
      this.setEventListener();
    }

    /**
     * Private Function
     **/
    private setEventListener(): void {
      this.node.addEventListener('click', (e) => {
        e.preventDefault();
        this.click(this.callBackFunction);
      }, false);
    }

    /**
     * Public Function
     **/
    public createElement(): void {
      this.node = document.createElement("div");
      this.node.classList.add(this._BACKDROP_ELEMENT_CLASS_NAME);

      document.body.appendChild(this.node);
    }

    public show(): void {
      this.node.classList.add(this._SHOW_CLASS_NAME);
    }

    public hide(): void {
      if(this.node.classList.contains(this._SHOW_CLASS_NAME)) {
        this.node.classList.remove(this._SHOW_CLASS_NAME);
      }
    }

    public click(fn, isFirst?): void {
      this.callBackFunction = fn;

      if(!isFirst) {
        fn();
      }
    }
  }


  /**
   * ModalWindowTrigger Class
   * @public
   * @param option
   **/
  export class ModalWindowTrigger {
    private openCallBackFunction: Function = () => {};
    private closeCallBackFunction: Function = () => {};

    constructor(
      public id: number,
      public node: any,
      public target: any,
      public isOpener: boolean
      ) {
      this.setTarget(this.node);
      this.setEventListener();
    }

    static fromData(data: any): ModalWindowTrigger {
      return new ModalWindowTrigger(
        0,
        data ? data : null,
        null,
        true
      );
    }

    /**
     * Private Function
     **/
    private createTriggerId(): number {
      return ++_created_trigger_num;
    }

    private setTarget(node) {
      if(node.dataset.apModalClose !== undefined) {
        this.isOpener = false;

        if(node.dataset.apModalClose) {
          this.target = node.dataset.apModalClose;
        } else if((/^#./gi).test(node.hash)) {
          this.target = node.hash;
        } else {
          this.target = 'all';
        }

      } else if(node.dataset.apModal !== undefined) {
        if(node.dataset.apModal) {
          this.target = node.dataset.apModal;
        } else {
          this.target = node.hash;
        }
      }
    }

    private setEventListener(): void {
      this.node.addEventListener('click', (e) => {
        e.preventDefault();

        if(this.isOpener) {
          this.open(this.openCallBackFunction);
        } else {
          this.close(this.closeCallBackFunction);
        }
      }, false);
    }

    public open(fn, isFirst?): void {
      this.openCallBackFunction = fn;

      if(!isFirst) {
        fn(this.target);
      }
    }

    public close(fn, isFirst?): void {
      this.closeCallBackFunction = fn;

      if(!isFirst) {
        fn(this.target);
      }
    }

  }

}
