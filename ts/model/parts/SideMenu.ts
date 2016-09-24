/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

module SideMenuModel {
  import APModel = AtomicPackages.Model;

  /**
   * SideMenu Model Class
   * @public
   * @param option
  **/
  export class SideMenu {
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
    public static fromData(data: any): SideMenu {
      return new SideMenu(
        data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
        data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []
      );
    }

    /**
     * Private Function
     **/
    private setTriggerCallBack(): void {
      this.triggerList.forEach((trigger: Trigger) => {
        trigger.view.toggle(() => {
          trigger.toggle(this.targetList);
        }, true);
      });
    }

    private setTriggerTargetId() {
      for(var i: number = 0; i < this.triggerList.length; i++) {
        this.triggerList[i].setTargetId(this.targetList);
      }
    }

    /**
     * Public Function
     **/
    public toggle(data: any): void {
    }

    public getElements(data: any): Target[] {
      return APModel.search(this.targetList, data);
    }
  }

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
    public setTargetId(contentsViewList: Target[]) {
      var searchContents: Target[] = APModel.search(contentsViewList, this.target);

      if(searchContents) {
        for (var i: number = 0; i < searchContents.length; i++) {
          this.targetId.push(searchContents[i].id);
        }
      }
    }

    public toggle(targetList) {
      for(var i: number = 0; i < this.targetId.length; i++) {
        for(var n: number = 0; n < targetList.length; n++) {
          if(targetList[i].id === this.targetId[i]) {
            targetList[i].toggle();
          }
        }
      }
    }
  }

  /**
   * SideMenu Target Model Class
   * @public
   * @param option
  **/
  export class Target {
    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public view: any
      ) {
    }

    static fromData(data: any): Target {
      return new Target(
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
      this.view.toggle();
    }
  }
}
