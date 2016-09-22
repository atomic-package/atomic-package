/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/SideMenu.ts" />
/// <reference path="../../view/parts/SideMenu.ts" />

module SideMenuController {
  import Trigger      = SideMenuModel.Trigger;
  import Contents     = SideMenuModel.Contents;

  import TriggerView  = SideMenuView.Trigger;
  import ContentsView = SideMenuView.Contents;

  /**
   * SideMenu Controller Class
   * @public
   * @param option
   **/
  export class SideMenu {
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

    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        trigger.view.toggle((triggerView: TriggerView) => {
          this.toggleContents(trigger);
        }, true);
      });
    }

    private toggleContents(trigger: Trigger): void {
      for(var i: number = 0; i < this.contentsList.length; i++) {
        this.contentsList[i].toggle(trigger);
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
