/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/ModalWindow.ts" />

module Controller {
  import APModal = AtomicPackages.AtomicPackageModel;
  import Modal = Model.ModalWindow;

  export class ModalWindow {
    private created_modal_window_num = 0;
    private list: Modal[] = [];

    constructor(
      ) {
    }

    /**
     * Private Function
    **/
    private createId(): number {
      return ++this.created_modal_window_num;
    }

    private matchModal(searchModals: Modal[]): Modal[] {
      var matchModals: Modal[] = [];

      this.list.forEach((modal: Modal, i: number) => {
        searchModals.forEach((searchModal: Modal, n: number) => {
          if(modal == searchModal) {
            matchModals.push(modal);
          }
        });
      });
      return matchModals;
    }

    /**
     * Public Function
    **/
    public open(data: any) {
      var searchModals = APModal.search(this.list, APModal.checkType(data));

      if(searchModals.length > 0) {
        var matchModals: Modal[] = this.matchModal(searchModals);

        matchModals.forEach((modal: Modal) => {
          modal.open();
        });
      }
    }

    public close(data: any) {
      var searchModals = APModal.search(this.list, APModal.checkType(data));

      if(searchModals.length > 0) {
        var matchModals: Modal[] = this.matchModal(searchModals);

        matchModals.forEach((modal: Modal) => {
          modal.close();
        });
      }
    }

    public create() {
      this.list.push(Modal.fromData({
        id: this.createId()
      }));
      console.log(this.list);
    }

    public destroy(data: any) {
      var searchModals = APModal.search(this.list, APModal.checkType(data)),
          newList: Modal[] = [];

      if(searchModals.length > 0) {
        this.list.forEach((modal: Modal, i: number) => {
          searchModals.forEach((searchModal: Modal, n: number) => {
            if(modal !== searchModal) {
              newList.push(modal);
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
