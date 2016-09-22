/*
 * Author: Daisuke Takayama
 */
/// <reference path='../_all.ts' />
/// <reference path='../model/atomic_package_model.ts' />
/// <reference path='../view/atomic_package_view.ts' />
/// <reference path='parts/_all.ts' />

module AtomicPackages {
  import ModalWindow  = ModalWindowController.ModalWindow;
  import Button       = ButtonController.Button;
  import Switcher     = SwitcherController.Switcher;
  import Toggle       = ToggleController.Toggle;
  import SideMenu     = SideMenuController.SideMenu;
  import SmoothScroll = SmoothScrollController.SmoothScroll;

  /**
   * AtomicPackage Controller Class
   * @public
  **/
  export class Controller {
    private model: Model;
    private view: View;

    public modal: ModalWindow;
    public btn: Button;
    public switcher: Switcher;
    public toggle: Toggle;
    public sideMenu: SideMenu;
    public smoothScroll: SmoothScroll;

    constructor(
      ) {
      this.model = new AtomicPackages.Model();
      this.view  = new AtomicPackages.View();

      this.modal        = new ModalWindow();
      this.btn          = new Button();
      this.switcher     = new Switcher();
      this.toggle       = new Toggle();
      this.sideMenu     = new SideMenu();
      this.smoothScroll = new SmoothScroll();

    }
  }
}
