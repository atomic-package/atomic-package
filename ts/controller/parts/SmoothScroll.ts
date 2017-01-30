/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/SmoothScroll.ts" />
/// <reference path="../../view/parts/SmoothScroll.ts" />

namespace SmoothScrollController {
  import Model = SmoothScrollModel.SmoothScroll;
  import ScrollView  = SmoothScrollView.SmoothScroll;

  /**
   * SmoothScroll Controller Class
   * @public
   * @param option
   **/
  export class SmoothScroll {
    private model: Model;

    constructor() {
      ScrollView.fetchElements((data) => {
        this.model = Model.fromData(data);
      });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
      //this.triggerList.push(Trigger.fromData(data));
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
