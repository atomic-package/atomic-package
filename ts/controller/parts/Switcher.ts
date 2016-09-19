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
   * Switcher Class
   * @public
   * @param option
   **/
  export class Switcher {
    private _created_contents_num: number = 0;

    private triggerList: Trigger[] = [];
    private contentsList: Contents[] = [];

    constructor() {
      document.addEventListener("DOMContentLoaded", () => {
//        this.createFromElement(document.querySelectorAll('.' + this._DEFAULT_CLASS_NAME));
        this.createFromTriggerElement(document.querySelectorAll('[data-ap-switcher]'));
//        this.createTriggerFromElement(document.querySelectorAll('[data-ap-modal-close]'));
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
    }

    private createTriggerModel(triggerView) {
      this.create({
        id: triggerView.id,
        className: triggerView.node.className,
        idName: triggerView.node.id ? triggerView.node.id : null,
        items: triggerView.getItemNode(),
        itemLength: triggerView.node.children.length,
        selectedNumber: null,
        view: triggerView.node
      });
    }

    /**
     * Public Function
    **/
    public create(data: any): void {

//      if(data !== void 0) {
//        var idNumber: number = this.createId();
//
//        this.list.push(Modal.fromData({
//          id: idNumber,
//          className: data.className ? data.className : this._DEFAULT_CLASS_NAME,
//          idName: data.idName ? data.idName : String(this._DEFAULT_ID_NAME + idNumber),
//          view: data.view ? data.view : null
//        }));
//      } else {
//        var idNumber: number = this.createId();
//
//        this.list.push(Modal.fromData({
//          id: idNumber,
//          className: this._DEFAULT_CLASS_NAME,
//          idName: String(this._DEFAULT_ID_NAME + idNumber),
//          view: null
//        }));
//      }
    }

    public select(data: any): void {
      //number, id, class
      //

    }


  }

}