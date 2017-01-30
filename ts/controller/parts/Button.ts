/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Button.ts" />
/// <reference path="../../view/parts/Button.ts" />

namespace ButtonController {
  import Model   = ButtonModel.Button;
  import BtnView = ButtonView.Button;

  /**
   * Button Controller Class
   * @public
   * @param option
   **/
  export class Button {
    private model: Model;

    constructor() {
      BtnView.fetchElements((data) => {
        this.model = Model.fromData(data);
      });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
      //this.triggerList.push(Trigger.fromData(data));
    }

    public scroll(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }
  }
}
