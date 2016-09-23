/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SmoothScrollModel {
  import APModel = AtomicPackages.Model;

  /**
   * SmoothScroll Trigger Model Class
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

    /**
     * Public Function
     **/
    public setTargetId(targetViewList: Target[]) {
      var searchContents: Target[] = APModel.search(targetViewList, this.target);

      if(searchContents) {
        this.targetId = searchContents[0].id;
      }
    }
  }

  /**
   * Toggle Target Model Class
   * @public
   * @param option
   **/
  export class Target {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public coordinate: number,
      public view: any
      ) {
    }

    static fromData(data: any): Target {
      return new Target(
        data.id ? data.id : 1,
        data.className ? data.className : null,
        data.idName ? data.idName : null,
        data.coordinate ? data.coordinate : 0,
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    public toggle(trigger: Trigger) {
      if(trigger.targetId == this.id) {
        this.view.scroll();
      }
    }
  }
}
