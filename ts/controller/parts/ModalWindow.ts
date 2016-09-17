/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/ModalWindow.ts" />
/// <reference path="../../view/parts/ModalWindow.ts" />

module Controller {
  import APModel = AtomicPackages.AtomicPackageModel;
  import Modal = AtomicPackageModel.ModalWindow;
  import View = AtomicPackageView.ModalWindow;
  import BackDrop = AtomicPackageModel.ModalWindowBackDrop;
  import BackDropView = AtomicPackageView.ModalWindowBackDrop;
  import Trigger = AtomicPackageModel.ModalWindowTrigger;
  import TriggerView = AtomicPackageView.ModalWindowTrigger;

  export class ModalWindow {
    private _created_modal_window_num: number = 0;
    private list: Modal[] = [];
    private backDrop: BackDrop = null;
    private triggerList: Trigger[] = [];

    private _DEFAULT_ID_NAME: string = 'modalWindow';
    private _DEFAULT_CLASS_NAME: string = 'modalWindow';

    constructor(
      ) {
      document.addEventListener("DOMContentLoaded", () => {
        this.createFromElement(document.querySelectorAll('.' + this._DEFAULT_CLASS_NAME));
        this.createTriggerFromElement(document.querySelectorAll('[data-ap-modal]'));

        console.log(this);
      });
    }

    /**
     * Private Function
    **/
    private createId(): number {
      return ++this._created_modal_window_num;
    }

    private createFromElement(nodeList: NodeList) {
      for(var i: number = 0; i < nodeList.length; i++) {
        this.create({
          className: nodeList[i].className,
          idName: nodeList[i].id ? nodeList[i].id : null,
          view: View.fromData(nodeList[i])
        });
      }

      // create BackDrop
      if(nodeList.length > 0 && this.backDrop === null) {
        this.backDrop = BackDrop.fromData({
          view: new BackDropView
        });
      }
    }

    private createTriggerFromElement(nodeList: NodeList) {
      for(var i: number = 0; i < nodeList.length; i++) {
        this.triggerList.push(Trigger.fromData({
          targetClassName: '',
          targetIdName: '',
          targetId: 0,
          view: TriggerView.fromData(nodeList[i])
        }));
      }

      this.setTriggerCallBack();

      console.log(this.triggerList);
    }

    private setTriggerCallBack() {
      this.triggerList.forEach((trigger: Trigger) => {
        trigger.view.open((target) => {
          this.open(target);
        }, true);
      });
    }

    private matchModal(searchModals: Modal[]): Modal[] {
      var matchModals: Modal[] = [];

      this.list.forEach((modal: Modal) => {
        searchModals.forEach((searchModal: Modal) => {
          if(modal == searchModal) {
            matchModals.push(modal);
          }
        });
      });
      return matchModals;
    }

    private openCheck(): boolean {
      var isOpen = false;

      this.list.forEach((modal: Modal) => {
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
      var searchModals: Modal[] = APModel.search(this.list, APModel.checkType(data));

      if(searchModals.length > 0) {
        var matchModals: Modal[] = this.matchModal(searchModals);

        matchModals.forEach((modal: Modal) => {
          modal.open();
        });

        this.backDrop.show();
      }
      //console.log(this.list);
    }

    public close(data: any): void {
      var searchModals: Modal[] = APModel.search(this.list, APModel.checkType(data));

      if(searchModals.length > 0) {
        var matchModals: Modal[] = this.matchModal(searchModals);

        matchModals.forEach((modal: Modal) => {
          modal.close();
        });
      }

      if(!this.openCheck()) {
        this.backDrop.hide();
      }
    }

    public create(data: any): void {
      if(data !== void 0) {
        var idNumber: number = this.createId();

        this.list.push(Modal.fromData({
          id: idNumber,
          className: data.className ? data.className : this._DEFAULT_CLASS_NAME,
          idName: data.idName ? data.idName : String(this._DEFAULT_ID_NAME + idNumber),
          view: data.view
        }));
      } else {
        var idNumber: number = this.createId();

        this.list.push(Modal.fromData({
          id: this.createId(),
          className: this._DEFAULT_CLASS_NAME,
          idName: String(this._DEFAULT_ID_NAME + idNumber),
          view: null
        }));
      }
      //console.log(this.list);
    }

    public destroy(data: any): void {
      var searchModals = APModel.search(this.list, APModel.checkType(data)),
          newList: Modal[] = [];

      if(searchModals.length > 0) {
        this.list.forEach((modal: Modal) => {
          searchModals.forEach((searchModal: Modal) => {
            if(modal !== searchModal) {
              newList.push(modal);
            } else {
              modal.destroy();
            }
          });
        });
        this.list = newList;
      }
    }

    public update() {

    }

    public getElement() {

    }
  }
}
