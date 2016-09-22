/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Switcher.ts" />
/// <reference path="../../view/parts/Switcher.ts" />

module SwitcherController {
  import APModel = AtomicPackages.Model;

  import Trigger  = SwitcherModel.Trigger;
  import TriggerItem  = SwitcherModel.TriggerItem;
  import Contents = SwitcherModel.Contents;

  import TriggerView  = SwitcherView.Trigger;
  import TriggerItemView  = SwitcherView.TriggerItem;
  import ContentsView  = SwitcherView.Contents;

  /**
   * Switcher Controller Class
   * @public
   * @param option
   **/
  export class Switcher {
    private triggerList: Trigger[] = [];
    private contentsList: Contents[] = [];

    constructor() {
      TriggerView.fetchElements((data) => {
        data.trigger.forEach((nodeList: NodeList) => {
          this.createFromTriggerElement(nodeList);
        });

        data.contents.forEach((nodeList: NodeList) => {
          this.createFromContentsElement(nodeList);
        });
      });
      console.log(this);
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
        this.createContentsModel(ContentsView.fromData(nodeList[i]));
      }
    }

    private createTriggerModel(triggerView: TriggerView): void {
      this.create(triggerView);
    }

    private createContentsModel(contentsView: ContentsView): void {
      this.createContents(contentsView);
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

    public createContents(data: any): void {
      this.contentsList.push(Contents.fromData(data));
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