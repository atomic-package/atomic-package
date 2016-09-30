/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Switcher.ts" />
/// <reference path="../../view/parts/Switcher.ts" />

module SwitcherController {
  import Model = SwitcherModel.Switcher;

  import Trigger      = SwitcherModel.Trigger;
  import TriggerItem  = SwitcherModel.TriggerItem;
  import Target     = SwitcherModel.Target;

  import TriggerView      = SwitcherView.Trigger;
  import TriggerItemView  = SwitcherView.TriggerItem;
  import TargetView     = SwitcherView.Target;

  /**
   * Switcher Controller Class
   * @public
   * @param option
   **/
  export class Switcher {
    private model: Model;

    private triggerList: Trigger[] = [];
    private contentsList: Target[] = [];

    constructor() {
      TriggerView.fetchElements((data) => {
        data.trigger.forEach((nodeList: NodeList) => {
          this.createFromTriggerElement(nodeList);
        });

        data.contents.forEach((nodeList: NodeList) => {
          this.createFromContentsElement(nodeList);
        });
      });
    }

    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        var parent = trigger;

        trigger.items.forEach((item: TriggerItem) => {
          item.view.select((view: TriggerItemView) => {
            parent.select(view.id);
            this.selectContents(parent);
          }, true);
        });
      });
    }

    private selectContents(trigger) {
      for(var i: number = 0; i < this.contentsList.length; i++) {
        this.contentsList[i].select(trigger);
      }
    }

    /**
     * Private Function
     **/
    private createFromTriggerElement(nodeList: NodeList): void {
      for(var i: number = 0; i < nodeList.length; i++) {
        this.createTriggerModel(TriggerView.fromData(nodeList[i]));
      }
      this.setTriggerCallBack();
    }

    private createFromContentsElement(nodeList: NodeList): void {
      for(var i: number = 0; i < nodeList.length; i++) {
        this.createContentsModel(TargetView.fromData(nodeList[i]));
      }
    }

    private createTriggerModel(triggerView: TriggerView): void {
      this.create(triggerView);
    }

    private createContentsModel(targetView: TargetView): void {
      this.createTarget(targetView);
    }

    private setTriggerTargetId() {
      for(var i: number = 0; i < this.triggerList.length; i++) {
        this.triggerList[i].setTargetId(this.contentsList);
      }
    }

    /**
     * Public Function
    **/
    public create(data: any): void {
      this.triggerList.push(Trigger.fromData(data));
    }

    public createTarget(data: any): void {
      this.contentsList.push(Target.fromData(data));
      this.setTriggerTargetId();
    }

    public select(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }

  }

}