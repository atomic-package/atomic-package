/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module DropdownModel {
  import APModel = AtomicPackages.Model;

  /**
   * Dropdown Model Class
   * @public
   * @param option
  **/
  export class Dropdown {
    constructor(
    public targetList: Target[],
    public triggerList: Trigger[]
    ) {
      this.setTriggerCallBack();

      APModel.setTriggerTargetId(this.triggerList, this.targetList);
    }

    /**
     * Static Function
     **/
    public static fromData(data: any): Dropdown {
      return new Dropdown(
        data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
        data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []
      );
    }

    /**
     * Private Function
    **/
    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        trigger.view.toggle((triggerView) => {
          this.toggleContents(trigger);
        }, true);
      });
    }

    private toggleContents(trigger: Trigger): void {
      for(var i: number = 0; i < this.targetList.length; i++) {
        this.targetList[i].toggle(trigger);
      }
    }
  }

  /**
   * Dropdown Trigger Model Class
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
      var searchContents: Target[];

//      if(this.target) {
//        searchContents = APModel.search(targetViewList, this.target);
//      } else {
//        searchContents = APModel.search(targetViewList, { triggerId: this.id });
//      }
//
//      if(searchContents) {
//        this.targetId = searchContents[0].id;
//      }
    }
  }

  /**
   * Dropdown Target Model Class
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
