/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module ModalWindowView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;
  import Utility = AtomicPackages.Utility;
  import Tween   = AtomicPackages.Tween;

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
    private _DEFAULT_ID_NAME: string = 'modalWindow';
    private _DEFAULT_CLASS_NAME: string = 'modalWindow';

    constructor(
      public id: number,
      public idName: string,
      public className: string,
      public isOpen: boolean,
      public outerWidth: number,
      public outerHeight: number,
      public transform: string,
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
        data.transform ? data.transform : null,
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
      var utility = Utility.getInstance();

      if(this.outerWidth === 0 || this.outerHeight === 0) {
        this.outerWidth  = this.getStyle(this.body).outerWidth;
        this.outerHeight = this.getStyle(this.body).outerHeight;
        this.transform   = utility.whichTransform();
      }
    }

    private getStyle(node) {
      //var styles = (<any>node).currentStyle || (<any>document.defaultView).getComputedStyle(node, '');
      return {
        outerWidth: node.offsetWidth,
        outerHeight: node.offsetHeight
      }
    }

    private defaultStyle(): void {
      // modal
      (<HTMLElement>this.node).style.display   = 'none';
      (<HTMLElement>this.node).style.position  = 'fixed';
      (<HTMLElement>this.node).style.top       = '0';
      (<HTMLElement>this.node).style.right     = '0';
      (<HTMLElement>this.node).style.bottom    = '0';
      (<HTMLElement>this.node).style.left      = '0';
      (<HTMLElement>this.node).style.zIndex    = '1010';
      (<HTMLElement>this.node).style.overflowY = 'scroll';

      // body
      (<HTMLElement>this.body).style.position    = 'relative';
      (<HTMLElement>this.body).style.marginLeft  = 'auto';
      (<HTMLElement>this.body).style.marginRight = 'auto';
      (<HTMLElement>this.body).style.marginTop   = '100px';
      (<HTMLElement>this.body).style.opacity     = '0';
    }

    private showStartStyle(): void {
      // modal
      (<HTMLElement>this.node).style.display = 'block';

      // body
      (<HTMLElement>this.body).style.opacity = '0';
      (<HTMLElement>this.body).style.display = 'block';
      (<HTMLElement>this.body).style[this.transform] = 'scale(0.4)';
      (<HTMLElement>document.querySelector('html')).classList.add('apOverHidden');
    }

    private showFixedStyle() {
      // body
      (<HTMLElement>this.body).style.opacity = '1';
      (<HTMLElement>this.body).style[this.transform] = 'scale(1)';
    }

    private hideFixedStyle() {
      // modal
      (<HTMLElement>this.node).style.display = 'none';

      // body
      (<HTMLElement>this.body).style.opacity = '0';
      (<HTMLElement>this.body).style.display = 'none';
      (<HTMLElement>document.querySelector('html')).classList.remove('apOverHidden');
    }

    private setOpenStyle() {
      this.showStartStyle();
      this.outerCheck();
      this.showAnimation();
    }

    private showAnimation() {
      var tween = Tween.fromData({
        start: {
          opacity: (<HTMLElement>this.body).style.opacity,
          scale: 0.4
        },
        end: {
          opacity: 1,
          scale: 1
        },
        option: {
          duration: 200,
          easing: 'easeInOutCubic',
          step: (val) => {
            (<HTMLElement>this.body).style.opacity = val.opacity;
            (<HTMLElement>this.body).style[this.transform] = 'scale(' + val.scale + ')';
          },
          complete: () => {
            tween = null;
            this.showFixedStyle();
          }
        }
      });
    }

    private setCloseStyle() {
      this.closeAnimation();
    }

    private closeAnimation() {
      var tween = Tween.fromData({
        start: {
          opacity: 1,
          scale: 1
        },
        end: {
          opacity: 0,
          scale: 0.7
        },
        option: {
          duration: 150,
          easing: 'easeOutCubic',
          step: (val) => {
            (<HTMLElement>this.body).style.opacity = val.opacity;
            (<HTMLElement>this.body).style[this.transform] = 'scale(' + val.scale + ')';
          },
          complete: () => {
            this.hideFixedStyle();
            tween = null;
          }
        }
      });
    }

    /**
     * Public Function
    **/
    public open() {
      this.setOpenStyle();
    }

    public close() {
      this.setCloseStyle();
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
    private callBackFunction: Function = () => {};
    private node: any;

    constructor(
      ) {
      this.createElement();
      this.setEventListener();
      this.defaultStyle();
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
      this.node.addEventListener('click', (event) => {
        event.preventDefault();
        this.click(this.callBackFunction);
      }, false);
    }

    private defaultStyle(): void {
      (<HTMLElement>this.node).style.position = 'fixed';
      (<HTMLElement>this.node).style.top = '0';
      (<HTMLElement>this.node).style.display = 'none';
      (<HTMLElement>this.node).style.width = '100%';
      (<HTMLElement>this.node).style.height = '100%';
      (<HTMLElement>this.node).style.opacity = '0';
      (<HTMLElement>this.node).style.background = 'rgba(0, 0, 0, 0.6)';
    }

    private showStartStyle(): void {
      (<HTMLElement>this.node).style.display = 'block';
    }

    private showFixedStyle(): void {
      (<HTMLElement>this.node).style.opacity = '1';
    }

    private setOpenStyle() {
      this.showStartStyle();
      this.showAnimation();
    }

    private hideFixedStyle() : void {
      (<HTMLElement>this.node).style.display = 'none';
      (<HTMLElement>this.node).style.opacity = '0';
    }

    private showAnimation() {
      var tween = new Tween({
        opacity: (<HTMLElement>this.node).style.opacity
      }, {
        opacity: 1
      }, {
        duration: 200,
        easing: 'easeInOutQuad',
        step: (val) => {
          (<HTMLElement>this.node).style.opacity = val.opacity;
        },
        complete: () => {
          tween = null;
          this.showFixedStyle();
        }
      });
    }

    private closeAnimation() {
      var tween = new Tween({
        opacity: 1
      }, {
        opacity: 0
      }, {
        duration: 300,
        easing: 'easeInOutQuad',
        step: (val) => {
          (<HTMLElement>this.node).style.opacity = val.opacity;
        },
        complete: () => {
          this.hideFixedStyle();
          tween = null;
        }
      });
    }

    private setCloseStyle() {
      this.closeAnimation();
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
      this.setOpenStyle();
    }

    public hide(): void {
      this.setCloseStyle();
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
      this.node.addEventListener('click', (event) => {
        event.preventDefault();

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
