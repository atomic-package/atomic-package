/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/ScrollSpy.ts" />
/// <reference path="../../view/parts/ScrollSpy.ts" />

namespace ScrollSpyController {
  import Model = ScrollSpyModel.ScrollSpy;
  import SSView      = ScrollSpyView.ScrollSpy;

  /**
   * ScrollSpy Controller Class
   * @public
   * @param option
   **/
  export class ScrollSpy {
    private model: Model;

    constructor() {
      SSView.fetchElements((data) => {
        this.model = Model.fromData(data);
      });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
      //this.trigger = Trigger.fromData(data);
    }

    public createTargets(data: any): void {
      //this.targetList.push(Target.fromData(data));
    }

    public scroll(data: any): void {
      //number, id, class
      //
    }

    public resetSelected(data: any) {

    }
  }
}
