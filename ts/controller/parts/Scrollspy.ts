/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/ScrollSpy.ts" />
/// <reference path="../../view/parts/ScrollSpy.ts" />

module ScrollSpyController {
  import Trigger = ScrollSpyModel.Trigger;
  import Target  = ScrollSpyModel.Target;

  import SSView      = ScrollSpyView.ScrollSpy;
  import TriggerView = ScrollSpyView.Trigger;
  import TargetView  = ScrollSpyView.Target;

  /**
   * ScrollSpy Controller Class
   * @public
   * @param option
   **/
  export class ScrollSpy {
    private trigger: Trigger;
    private targetList: Target[] = [];

    constructor() {
      SSView.fetchElements((data) => {
//        this.createTriggerModel(data.trigger);
//
//        data.targetList.forEach((targetView: TargetView) => {
//          this.createTargetModel(targetView);
//        });
//
//        this.setTriggerCallBack();
//        this.setTriggerTargetId();
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
      this.trigger.setTargetId(this.targetList);
    }

    private setTriggerCallBack(): void {
      this.trigger.view.toggle((triggerView: TriggerView) => {
        this.toggleContents(trigger);
      }, true);
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
      this.trigger = Trigger.fromData(data);
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
