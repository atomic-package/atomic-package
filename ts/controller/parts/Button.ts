/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Button.ts" />
/// <reference path="../../view/parts/Button.ts" />

module ButtonController {
  import Model   = ButtonModel.Button;

  import Trigger = ButtonModel.Trigger;


  import BtnView  = ButtonView.Button;
  import TriggerView = ButtonView.Trigger;

  /**
   * Button Controller Class
   * @public
   * @param option
   **/
  export class Button {
    private triggerList: Trigger[] = [];

    constructor() {
      BtnView.fetchElements((data) => {
        data.triggerList.forEach((triggerView: TriggerView) => {
          this.createTriggerModel(triggerView);
        });

        this.setTriggerCallBack();
      });
    }

    /**
     * Private Function
     **/
    private createTriggerModel(triggerView: TriggerView): void {
      this.create(triggerView);
    }

    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        trigger.view.toggle((triggerView: TriggerView) => {
          this.toggleContents(trigger);
        }, true);
      });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
      this.triggerList.push(Trigger.fromData(data));
    }

    public scroll(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }
  }
}
