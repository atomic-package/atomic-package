/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/ModalWindow.ts" />
/// <reference path="../../view/parts/ModalWindow.ts" />

module ModalWindowController {
  import APModel = AtomicPackages.Model;

  import ModalView   = ModalWindowView.ModalWindow;

  import Target      = ModalWindowModel.Target;
  import TargetView  = ModalWindowView.Target;
  import Trigger     = ModalWindowModel.Trigger;
  import TriggerView = ModalWindowView.Trigger;

  //import BackDrop     = ModalWindowModel.ModalWindowBackDrop;
  import BackDropView = ModalWindowView.ModalWindowBackDrop;

  /**
   * ModalWindow Controller Class
   * @public
   * @param option
   **/
  export class ModalWindow {
    private targetList: Target[] = [];
    //private backDrop: BackDrop = null;
    private triggerList: Trigger[] = [];

    constructor(
      ) {
      ModalView.fetchElements((data) => {
        data.triggerList.forEach((triggerView: TriggerView) => {
          this.createTriggerModel(triggerView);
        });

        data.targetList.forEach((targetView: TargetView) => {
          this.createTargetModel(targetView);
        });

        this.setTriggerCallBack();
        this.setTriggerTargetId();
      });
    }

    /**
     * Private Function
    **/
    private createTriggerModel(triggerView: TriggerView): void {
      this.triggerList.push(Trigger.fromData(triggerView));
    }

    private createTargetModel(targetView: TargetView): void {
      this.targetList.push(Target.fromData(targetView));
    }

    private setTriggerTargetId() {
      for(var i: number = 0; i < this.triggerList.length; i++) {
        this.triggerList[i].setTargetId(this.targetList);
      }
    }

//    private createFromElement(nodeList: NodeList): void {
//      for(var i: number = 0; i < nodeList.length; i++) {
//        this.createModalModel(ModalView.fromData(nodeList[i]));
//      }
//
//      // create BackDrop
//      if(nodeList.length > 0 && this.backDrop === null) {
//        this.backDrop = BackDrop.fromData({
//          view: new BackDropView
//        });
//        this.setBackDropCallBack();
//      }
//    }


//    private setBackDropCallBack(): void {
//      this.backDrop.view.click(() => {
//        this.close('all');
//      }, true);
//    }

    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        trigger.view.open((target) => {
          trigger.open(this.targetList);
        }, true);

        trigger.view.close((target) => {
          trigger.close(this.targetList);
        }, true);
      });
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

//        matchModals.forEach((modal: Target) => {
//          modal.open();
//        });
//        this.backDrop.show();
      }
    }

    public close(data: any): void {
      var searchModals: Target[] = APModel.search(this.targetList, data);

      if(searchModals.length > 0) {
        var matchModals: Target[] = this.matchModal(searchModals);

//        matchModals.forEach((modal: Target) => {
//          modal.close();
//        });
      }

//      if(!this.openCheck()) {
//        this.backDrop.hide();
//      }
    }

    public create(data: any): void {
//      if(data !== void 0) {
//        this.targetList.push(Target.fromData(data));
//      } else {
//        //this.targetList.push(Modal.fromData(ModalView.create()));
//      }
    }

    public destroy(data: any): void {
      var searchModals = APModel.search(this.targetList, data),
          newList: Target[] = [];

//      if(searchModals.length > 0) {
//        this.targetList.forEach((modal: Target) => {
//          searchModals.forEach((searchModal: Target) => {
//            if(modal !== searchModal) {
//              newList.push(modal);
//            } else {
//              modal.destroy();
//            }
//          });
//        });
//        this.targetList = newList;
//      }
    }

    public update() {

    }

    public getElements(data: any): Target[] {
      return APModel.search(this.targetList, data);
    }
  }
}
