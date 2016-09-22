/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Switcher.ts" />
/// <reference path="../../view/parts/Switcher.ts" />

module SwitcherController {
  import APModel = AtomicPackages.Model;

  import Trigger  = SwitcherModel.Trigger;
  import Contents = SwitcherModel.Contents;

  import TriggerView  = SwitcherView.Trigger;

  /**
   * Switcher Controller Class
   * @public
   * @param option
   **/
  export class Switcher {
    private _created_contents_num: number = 0;

    private triggerList: Trigger[] = [];
    private contentsList: Contents[] = [];

    constructor() {
      TriggerView.fetchElements((data) => {
        data.trigger.forEach((nodeList: NodeList) => {
          this.createFromTriggerElement(nodeList);
        });
      });

      //console.log(this);
    }

    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        var parent = trigger;

        trigger.items.forEach((item) => {
          item.view.select((node) => {
            parent.select(node.id);
          }, true);
        });
//
//        trigger.node.select((target) => {
//          target.select();
//        }, true);
//
//        trigger.node.reset((target) => {
//          target.reset(target);
//        }, true);
      });
    }

    /**
     * Private Function
     **/
    private createContentsId(): number {
      return ++this._created_contents_num;
    }

    private createFromTriggerElement(nodeList: NodeList): void {
      for(var i: number = 0; i < nodeList.length; i++) {
        this.createTriggerModel(TriggerView.fromData(nodeList[i]));
      }
      this.setTriggerCallBack();
    }

    private createTriggerModel(triggerView: TriggerView): void {
      this.create(triggerView);
    }

    /**
     * Public Function
    **/
    public create(data: any): void {
      this.triggerList.push(Trigger.fromData(data));
    }

    public select(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }

  }

}