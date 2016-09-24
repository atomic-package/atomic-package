/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/ModalWindow.ts" />
/// <reference path="../../view/parts/ModalWindow.ts" />

module ModalWindowController {
  import APModel = AtomicPackages.Model;
  import Model   = ModalWindowModel.ModalWindow;

  import ModalView   = ModalWindowView.ModalWindow;
  import Target      = ModalWindowModel.Target;

  /**
   * ModalWindow Controller Class
   * @public
   * @param option
   **/
  export class ModalWindow {
    private model: Model;

    private targetList: Target[] = [];

    constructor(
      ) {
      ModalView.fetchElements((data) => {
        this.model = Model.fromData(data);
      });
    }

    /**
     * Public Function
    **/
    public open(data: any): void {
      this.model.open(data);
    }

    public close(data: any): void {
      this.model.close(data);
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
