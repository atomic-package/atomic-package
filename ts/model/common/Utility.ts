/*
 * Author: Daisuke Takayama
 */
/// <reference path='../../_all.ts' />

namespace AtomicPackages {

  interface support {
    touch: boolean;
  }

  interface vendor {
    animationend: string;
    defaultEvent: string;
    transitionend: string;
    prefix: string;
    transform: string;
  }

  /**
   * Utility Class
   * @public
   * @param option
   */
  export class Utility {
    private static _instance: Utility = null;

    private _FAKE_ELEMENT: string = 'fakeelement';

    private support: support;
    public vendor: vendor;

    constructor(
      ) {
      if (Utility._instance) {
        return Utility._instance;
      } else {
        Utility._instance = this;
      }

      this.support = {
        touch: ('ontouchstart' in window)
      };

      this.vendor = {
        defaultEvent: 'click',
        transitionend: this.whichTransitionEvent(),
        animationend: this.whichAnimationEvent(),
        prefix: this.whichPrefix(),
        transform: this.whichTransform()
      };

      if (this.support.touch) {
        this.vendor.defaultEvent = 'touchend';
      }

      // Animation
      this.setRequestAnimationFrame();
      this.setCancelAnimationFrame();
    }

    /**
     * Public Static Function
    **/
    public static getInstance(): Utility {
      if (this._instance == null) {
        return new Utility();
      } else {
        return Utility._instance;
      }
    }

    /**
     * Private Function
    **/
    private createFakeElement(): HTMLElement {
      return document.createElement(this._FAKE_ELEMENT);
    }

    // RequestAnimationFrame
    private setRequestAnimationFrame() {
      window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(callback: FrameRequestCallback, element: any) {
          window.setTimeout(callback, 1000 / 60);
        };
    }

    private setCancelAnimationFrame(): void {
      window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame ||
        function (id) {
          window.clearTimeout(id);
        };
    }

    /**
     * Public Function
    **/
    public whichPrefix(): string {
      return (/webkit/i).test(navigator.appVersion) ? '-webkit-' : (/firefox/i).test(navigator.userAgent) ? '-moz-' :
        (/trident/i).test(navigator.userAgent) ? '-ms-' : 'opera' in window ? '-o-' : '';
    }

    public whichTransform() {
      var t, el: HTMLElement = this.createFakeElement();

      var transform = {
        'transform': 'transform',
        'OTransform': 'OTransform',
        'MozTransform': 'MozTransform',
        'webkitTransform': 'webkitTransform'
      };

      for (t in transform) {
        if (el.style[t] !== undefined) {
          return transform[t];
        }
      }
    }

    public whichAnimationEvent() {
      var t, el: HTMLElement = this.createFakeElement();

      var animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
      };

      for (t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    }

    public whichTransitionEvent() {
      var t, el: HTMLElement = this.createFakeElement();

      var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };

      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }
    }
  }
}
