/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/ModalWindow.ts" />
/// <reference path="../../view/parts/ModalWindow.ts" />

module ModalWindowController {
  import APModel = AtomicPackages.Model;

  import Modal        = ModalWindowModel.ModalWindow;
  import ModalView    = ModalWindowView.ModalWindow;
  import BackDrop     = ModalWindowModel.ModalWindowBackDrop;
  import BackDropView = ModalWindowView.ModalWindowBackDrop;
  import Trigger      = ModalWindowModel.ModalWindowTrigger;
  import TriggerView  = ModalWindowView.ModalWindowTrigger;

  /**
   * ModalWindow Controller Class
   * @public
   * @param option
   **/
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
        this.createTriggerFromElement(document.querySelectorAll('[data-ap-modal-close]'));
      });
    }

    /**
     * Private Function
    **/
    private createId(): number {
      return ++this._created_modal_window_num;
    }

    private createFromElement(nodeList: NodeList): void {
      for(var i: number = 0; i < nodeList.length; i++) {
        this.create({
          className: nodeList[i].className,
          idName: nodeList[i].id ? nodeList[i].id : null,
          view: ModalView.fromData(nodeList[i])
        });
      }

      // create BackDrop
      if(nodeList.length > 0 && this.backDrop === null) {
        this.backDrop = BackDrop.fromData({
          view: new BackDropView
        });
        this.setBackDropCallBack();
      }
    }

    private createTriggerFromElement(nodeList: NodeList): void {
      for(var i: number = 0; i < nodeList.length; i++) {
        this.triggerList.push(Trigger.fromData({
          view: TriggerView.fromData(nodeList[i])
        }));
      }
      this.setTriggerCallBack();
    }

    private setBackDropCallBack(): void {
      this.backDrop.view.click(() => {
        this.close('all');
      }, true);
    }

    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        trigger.view.open((target) => {
          this.open(target);
        }, true);

        trigger.view.close((target) => {
          this.close(target);
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
      var searchModals: Modal[] = APModel.search(this.list, data);

      if(searchModals.length > 0) {
        var matchModals: Modal[] = this.matchModal(searchModals);

        matchModals.forEach((modal: Modal) => {
          modal.open();
        });
        this.backDrop.show();
      }
    }

    public close(data: any): void {
      var searchModals: Modal[] = APModel.search(this.list, data);

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
          view: data.view ? data.view : null
        }));
      } else {
        var idNumber: number = this.createId();

        this.list.push(Modal.fromData({
          id: idNumber,
          className: this._DEFAULT_CLASS_NAME,
          idName: String(this._DEFAULT_ID_NAME + idNumber),
          view: null
        }));
      }
    }

    public destroy(data: any): void {
      var searchModals = APModel.search(this.list, data),
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

    public getElements(data: any): Modal[] {
      return APModel.search(this.list, data);
    }
  }
}
