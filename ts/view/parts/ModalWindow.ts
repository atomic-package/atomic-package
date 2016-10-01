/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module ModalWindowView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;
  import Utility = AtomicPackages.Utility;

  var _created_modal_window_num: number = 0;
  var _created_trigger_num: number = 0;

  /**
   * ModalWindow View Class
   * @public
   * @param option
  **/
  export class ModalWindow {
    /**
     * Static Function
    **/
    static fetchElements(callback) {
      document.addEventListener("DOMContentLoaded", () => {
        var triggerList = APView.createFromTriggerElement(['[data-ap-modal]', '[data-ap-modal-close]'], Trigger);

        callback({
          triggerList: triggerList,
          targetList: APView.createTargetView(triggerList, Target),
          backDrop: this.createBackDropView()
        });
      });
    }

    public static createBackDropView() {
      return BackDrop.fromData({});
    }
  }

  /**
   * ModalWindow Target Class
   * @public
   * @param option
  **/
  export class Target {
    private callBackFunction: Function = () => {};
    private _OPEN_CLASS_NAME = 'open';

    private _DEFAULT_ID_NAME: string = 'modalWindow';
    private _DEFAULT_CLASS_NAME: string = 'modalWindow';

    constructor(
      public id: number,
      public idName: string,
      public className: string,
      public isOpen: boolean,
      public outerWidth: number,
      public outerHeight: number,
      public node: any,
      public body: any
      ) {
      this.id = this.createModalWindowId();

      if(this.idName == null) {
        this.idName = String(this._DEFAULT_ID_NAME + this.id);
        this.node.id = this.idName;
      }

      if(this.className == null) {
        this.className = this._DEFAULT_CLASS_NAME;
      }

      this.outerCheck();
      this.defaultStyle();
      this.setEventListener();

      console.log(this);
    }

    /**
     * Static Function
    **/
    static fromData(data: any): Target {
      return new Target(
        0,
        data.node && data.node.id ? data.node.id : null,
        data.node && data.node.className ? data.node.className : null,
        false,
        data.outerWidth ? data.outerWidth : 0,
        data.outerHeight ? data.outerHeight : 0,
        data.node ? data.node : null,
        data.node && data.node.children ? data.node.children[0] : null
      );
    }

    public static create() {
      return this.fromData({});
    }

    /**
     * Private Function
    **/
    private createModalWindowId(): number {
      return ++_created_modal_window_num;
    }

    private setEventListener(): void {
      this.node.addEventListener('click', (e) => {
        e.preventDefault();
        this.click(this.callBackFunction);
      }, false);

      this.body.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
      }, false);
    }

    public click(fn, isFirst?): void {
      this.callBackFunction = fn;

      if(!isFirst) {
        fn();
      }
    }

    private outerCheck() {
      if(this.outerWidth === 0 || this.outerHeight === 0) {
        this.outerWidth  = this.getStyle(this.body).outerWidth;
        this.outerHeight = this.getStyle(this.body).outerHeight;
      }
    }

    private getStyle(node) {
      var styles = (<any>node).currentStyle || (<any>document.defaultView).getComputedStyle(node, '');

      return {
        outerWidth: node.offsetWidth,
        outerHeight: node.offsetHeight
      }
    }

    private defaultStyle() {
      // modal
      (<HTMLElement>this.node).style.opacity = '0';
      (<HTMLElement>this.node).style.display = 'none';
      (<HTMLElement>this.node).style.position = 'fixed';
      (<HTMLElement>this.node).style.top = '0';
      (<HTMLElement>this.node).style.right = '0';
      (<HTMLElement>this.node).style.bottom = '0';
      (<HTMLElement>this.node).style.left = '0';
      (<HTMLElement>this.node).style.zIndex = '1010';
      (<HTMLElement>this.node).style.overflowY = 'scroll';

      // body
//      (<HTMLElement>this.body).style.left = '50%';
//      (<HTMLElement>this.body).style.top = '50%';
//      (<HTMLElement>this.body).style.marginTop = (- this.outerHeight / 1.4 ) + 'px';
//      (<HTMLElement>this.body).style.marginLeft = (- this.outerWidth / 2 ) + 'px';
      (<HTMLElement>this.body).style.position = 'relative';
      (<HTMLElement>this.body).style.marginLeft = 'auto';
      (<HTMLElement>this.body).style.marginRight = 'auto';
      (<HTMLElement>this.body).style.marginTop = '100px';
    }

    private showStyle() {
      (<HTMLElement>this.node).style.display = 'block';
      (<HTMLElement>this.node).style.opacity = '0';
      (<HTMLElement>document.querySelector('html')).style.overflow = 'hidden';
    }

    private hideStyle() {
      (<HTMLElement>this.node).style.opacity = '0';
      (<HTMLElement>this.node).style.display = 'none';
      (<HTMLElement>document.querySelector('html')).style.overflow = 'auto';
    }

    private setNodeStyle() {
//      (<HTMLElement>this.body).style.left = '50%';
//      (<HTMLElement>this.body).style.top = '50%';
//      (<HTMLElement>this.body).style.marginTop = (- this.outerHeight / 1.4 ) + 'px';
//      (<HTMLElement>this.body).style.marginLeft = (- this.outerWidth / 2 ) + 'px';
    }

    private setOpenStyle() {
      this.showStyle();
      this.outerCheck();
      this.setNodeStyle();

      //APView.loop();

      setTimeout(() => {
        this.body.classList.add('openStyle');
        setTimeout(() => {
          this.body.classList.add('anime');
          (<HTMLElement>this.node).style.opacity = '1';
          this.body.classList.remove('openStyle');
        }, 50)
      }, 50);
    }

    private setCloseStyle() {
      setTimeout(() => {
        this.body.classList.remove('anime');
        this.body.classList.add('openStyle');
        setTimeout(() => {
          this.hideStyle();
        }, 50)
      }, 50);
    }

    /**
     * Public Function
     **/
    public open() {
      this.setOpenStyle();
      //this.node.classList.add(this._OPEN_CLASS_NAME);
    }

    public close() {
      this.setCloseStyle();
//      if(this.node.classList.contains(this._OPEN_CLASS_NAME)) {
//        this.node.classList.remove(this._OPEN_CLASS_NAME);
//      }
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
   * ModalWindow BackDrop Class
   * @public
   * @param option
   **/
  export class BackDrop {
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
     * Static Function
    **/
    static fromData(data: any): BackDrop {
      return new BackDrop();
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
   * ModalWindow Trigger Class
   * @public
   * @param option
  **/
  export class Trigger {
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
      this.id = this.createTriggerId();
    }

    static fromData(data: any): Trigger {
      return new Trigger(
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
