/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module ScrollSpyModel {
  import APModel = AtomicPackages.Model;

  /**
   * ScrollSpy Model Class
   * @public
   * @param option
  **/
  export class ScrollSpy {
    constructor(
      public targetList: Target[],
      public trigger: Trigger
      ) {
      this.setTriggerCallBack();
      this.setTriggerTargetId();
    }

    /**
     * Static Function
     **/
    public static fromData(data: any): ScrollSpy {
      return new ScrollSpy(
        data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
        data.trigger ? Trigger.fromData(data) : null
      );
    }

    private setTriggerTargetId() {
      //this.trigger.setTargetId(this.targetList);
    }

    private setTriggerCallBack(): void {
//      this.trigger.view.toggle((triggerView) => {
//        this.toggleContents(trigger);
//      }, true);
    }

    private toggleContents(trigger: Trigger): void {
      for(var i: number = 0; i < this.targetList.length; i++) {
        this.targetList[i].toggle(trigger);
      }
    }
  }

  /**
   * ScrollSpy Trigger Model Class
   * @public
   * @param option
   **/
  export class Trigger {
    constructor(
      public id: number,
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
        data.target ? data.target : null,
        data.targetId ? data.targetId : 0,
        data.coordinate ? data.coordinate : 0,
        data ? data : null
      );
    }

    /**
     * Public Function
     **/
    public setTargetId(targetViewList: Target[]): void  {
//      var searchContents: Target[];
//
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
   * ScrollSpy Target Model Class
   * @public
   * @param option
   **/
  export class Target {
    constructor(
      public id: number,
      public triggerId: number,
      public className: string,
      public idName: string,
      public coordinate: number,
      public view: any
      ) {
    }

    static fromData(data: any): Target {
      return new Target(
        data.id ? data.id : 1,
        data.triggerId ? data.triggerId : null,
        data.className ? data.className : null,
        data.idName ? data.idName : null,
        data.coordinate ? data.coordinate : 0,
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    public toggle(trigger: Trigger): void {
//      if(trigger.targetId == this.id) {
//        this.view.scroll();
//      }
    }
  }
}
