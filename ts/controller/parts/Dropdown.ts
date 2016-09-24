/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Dropdown.ts" />
/// <reference path="../../view/parts/Dropdown.ts" />

module DropdownController {
  import Model = DropdownModel.Dropdown;

  import Trigger = DropdownModel.Trigger;
  import Target  = DropdownModel.Target;

  import DropdownViewClass = DropdownView.Dropdown;
  import TriggerView = DropdownView.Trigger;
  import TargetView  = DropdownView.Target;

  /**
   * SmoothScroll Controller Class
   * @public
   * @param option
   **/
  export class Dropdown {
    private triggerList: Trigger[] = [];
    private targetList: Target[] = [];

    constructor() {
      DropdownViewClass.fetchElements((data) => {
        data.triggerList.forEach((triggerView: TriggerView) => {
          this.createTriggerModel(triggerView);
        });

        data.targetList.forEach((targetView: TargetView) => {
          this.createTargetModel(targetView);
        });

        this.setTriggerCallBack();
        this.setTriggerTargetId();
      });
    }

    /**
     * Private Function
     **/
    private createTriggerModel(triggerView: TriggerView): void {
      this.create(triggerView);
    }

    private createTargetModel(targetView: TargetView): void {
      this.createTargets(targetView);
    }

    private setTriggerTargetId() {
      for(var i: number = 0; i < this.triggerList.length; i++) {
        this.triggerList[i].setTargetId(this.targetList);
      }
    }

    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        trigger.view.toggle((triggerView: TriggerView) => {
          this.toggleContents(trigger);
        }, true);
      });
    }

    private toggleContents(trigger: Trigger): void {
      for(var i: number = 0; i < this.targetList.length; i++) {
        this.targetList[i].toggle(trigger);
      }
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
      this.triggerList.push(Trigger.fromData(data));
    }

    public createTargets(data: any): void {
      this.targetList.push(Target.fromData(data));
    }

    public scroll(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }
  }
}
