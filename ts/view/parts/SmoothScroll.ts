/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

namespace SmoothScrollView {
  import APModel = AtomicPackages.Model;
  import APView  = AtomicPackages.View;
  import Tween   = AtomicPackages.Tween;

  var _created_scroll_trigger_num: number = 0,
      _created_scroll_target_num: number  = 0;

  /**
   * SmoothScroll View Class
   * @public
   * @param option
  **/
  export class SmoothScroll {
    static fetchElements(callback): void {
      document.addEventListener("DOMContentLoaded", () => {
        var triggerList = APView.createFromTriggerElement(['[data-ap-scroll]'], Trigger);

        callback({
          triggerList: triggerList,
          //targetList: APView.createTargetView(triggerList, Target)
          targetList: this.createTargetView(triggerList)
        });
      });
    }

    public static createTargetView(triggerList) {
      var selectors: string[] = [],
          targetList = [],
          targetViewList = [];

      triggerList.forEach((trigger: any) => {
        if(parseInt(trigger.target, 10)) {
          trigger.setMoveCoordinate();
          targetViewList.push(trigger.createMoveCoordinate());

        } else if(trigger.target) {
          selectors.push(trigger.target);
        }
      });

      selectors = APModel.uniq(selectors);

      for (var i: number = 0; i < selectors.length; i++) {
        targetList.push(document.querySelectorAll(selectors[i]));
      }

      var createTargetList = APView.createFromTargetsElement(targetList, Target);

      createTargetList.forEach((createTarget: any) => {
        targetViewList.push(createTarget);
      });

      return targetViewList;
    }
  }


  /**
   * SmoothScroll Trigger View Class
   * @public
   * @param option
  **/
  export class Trigger {
    private clickCallBackFunction: Function = () => {};

    constructor(
      public id: number,
      public className: string,
      public idName: string,
      public target: any,
      public coordinate: number,
      public moveCoordinate: number,
      public node: any
      ) {
      this.id = this.createTriggerId();
      this.coordinate = this.getCoordinate(this.node);

      this.setEventListener();
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Trigger {
      return new Trigger(
        0,
        data.className ? data.className : null,
        data.id ? data.id : null,
        data.dataset.apScroll ? data.dataset.apScroll : null,
        0,
        0,
        data ? data : null
      );
    }

    /**
     * Private Function
     **/
    private createTriggerId(): number {
      return ++_created_scroll_trigger_num;
    }

    private getCoordinate(node) {
      var rect = node.getBoundingClientRect();
      return rect.top + window.pageYOffset;
    }

    private setEventListener(): void {
      this.node.addEventListener('click', (event) => {
        event.preventDefault();

        this.click(this.clickCallBackFunction);
      }, false);
    }

    /**
     * Public Function
     **/
    public click(fn?, isFirst?): void {
      this.clickCallBackFunction = fn;

      if(!isFirst) {
        fn(this);
      }
    }

    public setMoveCoordinate(): void {
      this.moveCoordinate = parseInt(this.target, 10);
      this.target = null;
    }

    public createMoveCoordinate(): Target {
      return Target.fromData({
        triggerId: this.id,
        coordinate: this.coordinate + this.moveCoordinate
      });
    }
  }

  /**
   * SmoothScroll Target View Class
   * @public
   * @param option
  **/
  export class Target {
    constructor(
      public id: number,
      public triggerId: number,
      public idName: string,
      public className: string,
      public coordinate: number,
      public node: any
      ) {
      this.id = this.createContentsId();
      if(this.node && this.coordinate == 0) {
        this.coordinate = this.getCoordinate(this.node);
      }
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Target {
      return new Target(
        0,
        data.triggerId ? data.triggerId : null,
        data.node && data.node.id ? data.node.id : null,
        data.node && data.node.className ? data.node.className : null,
        data.coordinate ? data.coordinate : 0,
        data.node ? data.node : null
      );
    }

    /**
     * Private Function
     **/
    private createContentsId(): number {
      return ++_created_scroll_target_num;
    }

    private getCoordinate(node) {
      var rect = node.getBoundingClientRect();
      return rect.top + window.pageYOffset;
    }

    private fixedScroll(scrollTarget) {
      scrollTarget.scrollTop = this.coordinate;
    }

    /**
     * Public Function
    **/
    public scroll() {
      var target = navigator.userAgent.indexOf('WebKit') < 0 ? document.documentElement : document.body;

      var tween = Tween.fromData({
        start: {
          scrollTop: window.pageYOffset
        },
        end: {
          scrollTop: this.coordinate
        },
        option: {
          duration: 500,
          easing: 'easeOutCubic',
          step: (val) => {
            target.scrollTop = val.scrollTop;
          },
          complete: () => {
            tween = null;
            this.fixedScroll(target);
          }
        }
      });
    }
  }
}
