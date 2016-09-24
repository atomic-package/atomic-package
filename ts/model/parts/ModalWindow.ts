/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module ModalWindowModel {
  import APModel = AtomicPackages.Model;

  import TargetView  = ModalWindowView.Target;
  import TriggerView = ModalWindowView.Trigger;

  /**
   * ModalWindow Model Class
   * @public
   * @param option
  **/
  export class ModalWindow {
    constructor(
      public backDrop: BackDrop,
      public targetList: Target[],
      public triggerList: Trigger[]
      ) {
      this.setTriggerCallBack();
      this.setTriggerTargetId();
      this.setBackDropCallBack();
    }

    /**
     * Static Function
    **/
    public static fromData(data: any): ModalWindow {
      return new ModalWindow(
        data.backDrop ? BackDrop.fromData(data.backDrop) : null,
        data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
        data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []
      );
    }

    /**
     * Private Function
    **/
    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        trigger.view.open((target) => {
          trigger.open(this.targetList);
          this.backDrop.show();
        }, true);

        trigger.view.close((target) => {
          trigger.close(this.targetList);
          this.backDrop.hide();
        }, true);
      });
    }

    private setTriggerTargetId() {
      for(var i: number = 0; i < this.triggerList.length; i++) {
        this.triggerList[i].setTargetId(this.targetList);
      }
    }

    private setBackDropCallBack(): void {
      this.backDrop.view.click(() => {
        this.close('all');
      }, true);
    }

    private matchModal(searchModals: Target[]): Target[] {
      var matchModals: Target[] = [];

      this.targetList.forEach((modal: Target) => {
        searchModals.forEach((searchModal: Target) => {
          if(modal == searchModal) {
            matchModals.push(modal);
          }
        });
      });
      return matchModals;
    }

    private openCheck(): boolean {
      var isOpen = false;

      this.targetList.forEach((modal: Target) => {
        if(modal.isOpen) {
          isOpen = true;
        }
      });
      return isOpen;
    }

    /**
     * Public Function
    **/
    public open(data: any): void {
      var searchModals: Target[] = APModel.search(this.targetList, data);

      if(searchModals.length > 0) {
        var matchModals: Target[] = this.matchModal(searchModals);

        matchModals.forEach((modal: Target) => {
          modal.open();
        });
        this.backDrop.show();
      }
    }

    public close(data: any): void {
      var searchModals: Target[] = APModel.search(this.targetList, data);

      if(searchModals.length > 0) {
        var matchModals: Target[] = this.matchModal(searchModals);

        matchModals.forEach((modal: Target) => {
          modal.close();
        });
      }

      if(!this.openCheck()) {
        this.backDrop.hide();
      }
    }

    public create(data: any): void {
      if(data !== void 0) {
        this.targetList.push(Target.fromData(data));
      } else {
        this.targetList.push(Target.fromData(TargetView.create()));
      }
    }

    public destroy(data: any): void {
      var searchModals = APModel.search(this.targetList, data),
          newList: Target[] = [];

      if(searchModals.length > 0) {
        this.targetList.forEach((modal: Target) => {
          searchModals.forEach((searchModal: Target) => {
            if(modal !== searchModal) {
              newList.push(modal);
            } else {
              modal.destroy();
            }
          });
        });
        this.targetList = newList;
      }
    }

    public update(data) {

    }

    public getElements(data: any): Target[] {
      return APModel.search(this.targetList, data);
    }
  }


  /**
   * ModalWindow Trigger Class
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
   * ModalWindow BackDrop Class
   * @public
   * @param option
  **/
  export class BackDrop {
    constructor(
      public isShow: boolean,
      public view: any
      ){
    }

    static fromData(data: any): BackDrop {
      return new BackDrop(
        data.isShow ? data.isShow: false,
        data ? data : null
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
