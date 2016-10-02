/*
 * Author: Daisuke Takayama
 */


module AtomicPackages {
  /**
   * Tween Class
   * @public
   * @param option
   **/
  export class Tween {
    private timer = null;
    private isPlaying: boolean = false;
    private _startTime: number = Date.now();
    public _loopHandler: any;

    private setting = {
      duration: 200,
      easing: 'linear',
      step: function() {},
      complete: function() {}
    };

    constructor(
      public start: any,
      public end: any,
      public option: any
      ) {
      this._loopHandler = () => {
        this.update();
      };

      this.setting = this._extend(this.setting, option);

      this.init();

      console.log(this);
    }

    /**
     * Static Function
     **/
    static fromData(data: any): Tween {
      return new Tween(
        data.start ? data.start : null,
        data.end ? data.end : null,
        data.option ? data.option : null
      );
    }

    private _extend(arg) {
      if (arguments.length < 2) {
        return arg;
      }

      if (!arg) {
        arg = {};
      }

      for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          if (arguments[i][key] !== null && typeof(arguments[i][key]) === "object") {
            arg[key] = this._extend(arg[key],arguments[i][key]);
          } else {
            arg[key] = arguments[i][key];
          }
        }
      }
      return arg;
    }

    /**
     * public Function
    **/
    public init(): void {
      this.play();
    }

    public play(): void {
      this.isPlaying = true;
      this.timer = window.requestAnimationFrame(this._loopHandler);
    }

    public stop() {
      this.isPlaying = false;

      if (this.timer) {
        this.timer = null;
        window.cancelAnimationFrame(this._loopHandler);
      }
      return this;
    }

    public update() {
      var now = Date.now(),
          elapsedTime = now - this._startTime,
          val = {};

      for(var key in this.end) {
        var start = this.start[key],
            variation = this.end[key] - start,
            eased = Tween.Easing[this.setting.easing](elapsedTime, start, variation, this.setting.duration);

        val[key] = eased;
      }

      this.setting.step.apply(this, [val]);

      if(this.setting.duration <= elapsedTime) {
        this.stop();
        this.setting.complete.apply(this, []);
      } else {
        this.timer = window.requestAnimationFrame(this._loopHandler);
      }
    }

    /**
     * Easing
    **/
    public static Easing = {
      linear: function (t, b, c, d) {
        return c * t / d + b;
      },
      easeInQuad: function (t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOutQuad: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOutQuad: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
      }
    };
  }
}
