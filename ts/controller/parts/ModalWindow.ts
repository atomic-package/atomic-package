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
      this.model.create(data);
    }

    public destroy(data: any): void {
      this.model.destroy(data);
    }

    public update(data: any) {
      this.model.update(data);
    }

    public getElements(data: any) {
      return this.model.getElements(data);
    }
  }
}
