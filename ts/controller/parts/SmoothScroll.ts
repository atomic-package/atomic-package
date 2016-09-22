/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/SmoothScroll.ts" />
/// <reference path="../../view/parts/SmoothScroll.ts" />

module SmoothScrollController {
  import Trigger      = SmoothScrollModel.Trigger;
  import Contents     = SmoothScrollModel.Target;

  import TriggerView  = SmoothScrollView.Trigger;
  import ContentsView = SmoothScrollView.Target;

  /**
   * SmoothScroll Class
   * @public
   * @param option
   **/
  export class SmoothScroll {
    private triggerList: Trigger[] = [];
    private targetList: Contents[] = [];

    constructor() {
      TriggerView.fetchElements((data) => {
        data.trigger.forEach((nodeList: NodeList) => {
          this.createFromTriggerElement(nodeList);
        });

        data.targets.forEach((nodeList: NodeList) => {
          this.createFromContentsElement(nodeList);
        });
      });
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

    public createContents(data: any): void {
      this.targetList.push(Contents.fromData(data));
      this.setTriggerTargetId();
    }

    public scroll(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }
  }
}
