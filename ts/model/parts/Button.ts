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
    constructor(
      public triggerList: Trigger[]
      ) {
      this.setTriggerCallBack();
      //this.setTriggerTargetId();
    }

    /**
     * Static Function
     **/
    public static fromData(data: any): Button {
      return new Button(
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
