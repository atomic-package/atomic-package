/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

namespace SmoothScrollModel {
  import APModel = AtomicPackages.Model;

  /**
   * SmoothScroll Model Class
   * @public
   * @param option
  **/
  export class SmoothScroll {
    constructor(
      public targetList: Target[],
      public triggerList: Trigger[]
      ) {
      this.setTriggerCallBack();
      this.setTriggerTargetId();
    }

    /**
     * Static Function
    **/
    public static fromData(data: any): SmoothScroll {
      return new SmoothScroll(
        data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
        data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []
      );
    }

    /**
     * Private Function
    **/
    private setTriggerTargetId() {
      for(var i: number = 0; i < this.triggerList.length; i++) {
        this.triggerList[i].setTargetId(this.targetList);
      }
    }

    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        trigger.view.click((triggerView) => {
          this.triggerClick(trigger);
        }, true);
      });
    }

    private triggerClick(trigger: Trigger): void {
      for(var i: number = 0; i < this.targetList.length; i++) {
        this.targetList[i].scroll(trigger);
      }
    }
  }

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
      public view: SmoothScrollView.Trigger
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
    public setTargetId(targetViewList: Target[]): void  {
      var searchContents: Target[];

      if(this.target) {
        searchContents = APModel.search(targetViewList, this.target);
      } else {
        searchContents = APModel.search(targetViewList, { triggerId: this.id });
      }

      if(searchContents) {
        this.targetId = searchContents[0].id;
      }
    }
  }

  /**
   * SmoothScroll Target Model Class
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
    public scroll(trigger: Trigger): void {
      if(trigger.targetId == this.id) {
        this.view.scroll();
      }
    }
  }
}
