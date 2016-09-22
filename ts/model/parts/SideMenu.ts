/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SideMenuModel {
  import APModel = AtomicPackages.Model;

  /**
   * SideMenu Trigger Model Class
   * @public
   * @param option
   **/
  export class Trigger {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public target: any,
      public targetId: number[],
      public view: ToggleView.Trigger
      ) {
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Trigger {
      return new Trigger(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.target ? data.target : null,
        data.targetId ? data.targetId : [],
        data ? data : null
      );
    }

    /**
     * Public Function
     **/
    public setTargetId(contentsViewList: Contents[]) {
      var searchContents: Contents[] = APModel.search(contentsViewList, this.target);

      if(searchContents) {
        for (var i: number = 0; i < searchContents.length; i++) {
          this.targetId.push(searchContents[i].id);
        }
      }
    }
  }

  /**
   * SideMenu Contents Model Class
   * @public
   * @param option
   **/
  export class Contents {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public view: any
      ) {
    }

    static fromData(data: any): Contents {
      return new Contents(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    public toggle(trigger: Trigger) {
      for(var i: number = 0; i < trigger.targetId.length; i++) {
        if(trigger.targetId[i] == this.id) {
          this.view.toggle();
        }
      }
    }
  }
}
