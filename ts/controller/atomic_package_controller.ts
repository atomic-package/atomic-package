/*
 * Author: Daisuke Takayama
 */
/// <reference path='../_all.ts' />
/// <reference path='../model/atomic_package_model.ts' />
/// <reference path='../view/atomic_package_view.ts' />
/// <reference path='parts/ModalWindow.ts' />
/// <reference path='parts/Button.ts' />

module AtomicPackages {
  import ModalWindow = Controller.ModalWindow;
  import Button = Controller.Button;

  export class AtomicPackageController {
    private model: AtomicPackageModel;
    private view: AtomicPackageView;

    public modal: Controller.ModalWindow;
    public btn: Controller.Button;

    constructor(
      ) {
      this.model = new AtomicPackages.AtomicPackageModel(this);
      this.view = new AtomicPackages.AtomicPackageView(this);

      this.modal = new ModalWindow();
      this.btn = new Button();

    }
  }
}
