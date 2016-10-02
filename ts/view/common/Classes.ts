/*
 * Author: Daisuke Takayama
 */

module ViewClasses {
  var _created_trigger_num: number = 0;
  var _created_target_num: number = 0;

  /**
   * Trigger View Class
   * @public
   * @param option
   **/
  export class Trigger {
    private callBackFunction: Function = () => {};

    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public target: any,
      public node: any
      ) {
      this.id = this.createTriggerId();
      //this.setEventListener();
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Trigger {
      return new Trigger(
        0,
        data.className ? data.className : null,
        data.id ? data.id : null,
        data.dataset.apToggle ? data.dataset.apToggle : null,
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    private createTriggerId(): number {
      return ++_created_trigger_num;
    }

//    private setEventListener(): void {
//      this.node.addEventListener('click', (e) => {
//        e.preventDefault();
//
//        this.click(this.callBackFunction);
//      }, false);
//    }
//
//    /**
//     * Public Function
//     **/
//    public click(fn?, isFirst?): void {
//      this.callBackFunction = fn;
//
//      if(!isFirst) {
//        fn(this);
//      }
//    }

    public getItemNode() {
      return this.node;
    }
  }

  /**
   * Target View Class
   * @public
   * @param option
   **/
  export class Target {
    constructor(
      public id: number,
      public idName: string,
      public className: string,
      public node: any
    ) {
      this.id = this.createContentsId();
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Target {
      return new Target(
        0,
        data.node && data.node.id ? data.node.id : null,
        data.node && data.node.className ? data.node.className : null,
        data.node ? data.node : null
      );
    }

    /**
     * Private Function
     **/
    private createContentsId(): number {
      return ++_created_target_num;
    }
  }



}
