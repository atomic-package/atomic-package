/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Toggle.ts" />
/// <reference path="../../view/parts/Toggle.ts" />

namespace ToggleController {
  import Model           = ToggleModel.Toggle;
  import ToggleViewClass = ToggleView.Toggle;

  /**
   * Toggle Class
   * @public
   * @param option
   **/
  export class Toggle {
    private model: Model;

    constructor(
    ) {
      ToggleViewClass.fetchElements((data) => {
        this.model = Model.fromData(data);
      });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
      //this.model.triggerList.push(Trigger.fromData(data));
    }

    public select(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }
  }

}
