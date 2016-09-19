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

  /**
   * Switcher Class
   * @public
   * @param option
   **/
  export class Switcher {
    private _created_switcher_num: number = 0;

    private triggerList: Trigger[] = [];
    private contentsList: Contents[] = [];

    constructor() {

    }

    /**
     * Private Function
     **/
    private createId(): number {
      return ++this._created_switcher_num;
    }

    private createFromElement(nodeList: NodeList): void {
      for(var i: number = 0; i < nodeList.length; i++) {
        this.create({
//          className: nodeList[i].className,
//          idName: nodeList[i].id ? nodeList[i].id : null,
//          view: ModalView.fromData(nodeList[i])
        });
      }
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