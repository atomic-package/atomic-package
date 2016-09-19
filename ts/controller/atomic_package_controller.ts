/*
 * Author: Daisuke Takayama
 */
/// <reference path='../_all.ts' />
/// <reference path='../model/atomic_package_model.ts' />
/// <reference path='../view/atomic_package_view.ts' />
/// <reference path='parts/_all.ts' />

module AtomicPackages {
  import ModalWindow = Controller.ModalWindow;
  import Button      = Controller.Button;
  import Switcher    = Controller.Switcher;

  /**
   * AtomicPackage Controller Class
   * @public
  **/
  export class AtomicPackageController {
    private model: AtomicPackageModel;
    private view: AtomicPackageView;

    public modal: ModalWindow;
    public btn: Button;
    public switcher: Switcher;

    constructor(
      ) {
      this.model = new AtomicPackages.AtomicPackageModel();
      this.view  = new AtomicPackages.AtomicPackageView();

      this.modal    = new ModalWindow();
      this.btn      = new Button();
      this.switcher = new Switcher();

    }
  }
}
