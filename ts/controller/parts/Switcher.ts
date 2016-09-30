/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Switcher.ts" />
/// <reference path="../../view/parts/Switcher.ts" />

module SwitcherController {
  import Model = SwitcherModel.Switcher;
  import SwitcherViewClass = SwitcherView.Switcher;

  /**
   * Switcher Controller Class
   * @public
   * @param option
   **/
  export class Switcher {
    private model: Model;

    constructor() {
      SwitcherViewClass.fetchElements((data) => {
        this.model = Model.fromData(data);
      });
    }

    /**
     * Public Function
    **/
    public create(data: any): void {
      //this.triggerList.push(Trigger.fromData(data));
    }

    public createTarget(data: any): void {
      //this.contentsList.push(Target.fromData(data));
      //this.setTriggerTargetId();
    }

    public select(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }

  }

}