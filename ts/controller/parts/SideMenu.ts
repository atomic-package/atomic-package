/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/SideMenu.ts" />
/// <reference path="../../view/parts/SideMenu.ts" />

module SideMenuController {
  import Model = SideMenuModel.SideMenu;
  import SideMenuViewClass = SideMenuView.SideMenu;

  /**
   * SideMenu Controller Class
   * @public
   * @param option
  **/
  export class SideMenu {
    private model: Model;

    constructor(
      ) {
      SideMenuViewClass.fetchElements((data) => {
        this.model = Model.fromData(data);
      });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
      //this.model.triggerList.push(Trigger.fromData(data));
    }

    public select(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }
  }
}
