/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module ModalWindowModel {
  import APModel = AtomicPackages.Model;

  /**
   * ModalWindow Class
   * @public
   * @param option
  **/
  export class Trigger {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public target: any,
      public targetId: number[],
      public isOpener: boolean,
      public view: any
      ) {
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Trigger {
      return new Trigger(
        data.id ? data.id : 1,
        data.className ? data.className : null,
        data.idName ? data.idName : null,
        data.target ? data.target : null,
        data.targetId ? data.targetId : [],
        data.isOpener ? data.isOpener : false,
        data ? data : null
      );
    }

    /**
     * Public Function
     **/
    public setTargetId(targetViewList: Target[]): void  {
      var searchContents: Target[];

      if(this.target) {
        searchContents = APModel.search(targetViewList, this.target);
      } else {
        searchContents = APModel.search(targetViewList, { triggerId: this.id });
      }

      if(searchContents) {
        for(var i: number = 0; i < searchContents.length; i++) {
          this.targetId.push(searchContents[i].id);
        }
      }
    }

    public open(targetList) {
      for(var i: number = 0; i < this.targetId.length; i++) {
        for(var n: number = 0; n < targetList.length; n++) {
          if(targetList[i].id === this.targetId[i]) {
            targetList[i].open();
          }
        }
      }
    }

    public close(targetList) {
      for(var i: number = 0; i < this.targetId.length; i++) {
        for(var n: number = 0; n < targetList.length; n++) {
          if(targetList[i].id === this.targetId[i]) {
            targetList[i].close();
          }
        }
      }
    }
  }

  /**
   * SmoothScroll Target Model Class
   * @public
   * @param option
   **/
  export class Target {
    constructor(
      public id: number,
      public triggerId: number,
      public className: string,
      public idName: string,
      public isOpen: boolean,
      public view: any
      ) {
    }

    static fromData(data: any): Target {
      return new Target(
        data.id ? data.id : 1,
        data.triggerId ? data.triggerId : null,
        data.className ? data.className : null,
        data.idName ? data.idName : null,
        data.isOpen ? data.isOpen : false,
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    public open() {
      if(!this.isOpen) {
        this.isOpen = true;
        this.view.open();
      }
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

}
