/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />
/// <reference path="../../model/parts/Tab.ts" />
/// <reference path="../../view/parts/Tab.ts" />

namespace TabController {
  import Model = TabModel.Tab;
  import View  = TabView.Tab;

  /**
   * Button Controller Class
   * @public
   * @param option
   **/
  export class Tab {
    private model: Model;

    constructor() {
      View.fetchElements((data) => {
        this.model = Model.fromData(data);
      });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
    }
  }
}