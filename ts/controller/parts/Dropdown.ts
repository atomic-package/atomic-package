/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Dropdown.ts" />
/// <reference path="../../view/parts/Dropdown.ts" />

module DropdownController {
  import Model = DropdownModel.Dropdown;
  import DropdownViewClass = DropdownView.Dropdown;

  /**
   * SmoothScroll Controller Class
   * @public
   * @param option
   **/
  export class Dropdown {
    private model: Model;

    constructor() {
      DropdownViewClass.fetchElements((data) => {
        this.model = Model.fromData(data);
      });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
      //this.triggerList.push(Trigger.fromData(data));
    }

    public createTargets(data: any): void {
      //this.targetList.push(Target.fromData(data));
    }

    public scroll(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }
  }
}
