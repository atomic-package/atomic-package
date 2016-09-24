/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module ButtonModel {
  import APModel = AtomicPackages.Model;

  /**
   * Button Model Class
   * @public
   * @param option
  **/
  export class Button {
    constructor() {

    }
  }

  /**
   * Button Trigger Model Class
   * @public
   * @param option
   **/
  export class Trigger {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public target: any,
      public targetId: number,
      public coordinate: number,
      public view: ToggleView.Trigger
      ) {
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Trigger {
      return new Trigger(
        data.id ? data.id : 1,
        data.className ? data.className : null,
        data.idName ? data.idName : null,
        data.target ? data.target : null,
        data.targetId ? data.targetId : 0,
        data.coordinate ? data.coordinate : 0,
        data ? data : null
      );
    }
  }
}
