/*
 * Author: Daisuke Takayama
 */
/// <reference path='../_all.ts' />

module AtomicPackages {
  interface Type {
    id?: number;
    className?: string;
    idName?: string;
    length?: number;
  }

  /**
   * AtomicPackage Model Class
   * @public
   **/
  export class Model {
    constructor(
      ) {
    }

    /**
     * Private Static Function
    **/
    private static isArray(data): boolean {
      return Array.isArray(data) || typeof data !== 'object' && /^\[/.test(data);
    }

    private static getSearchItems(dataList: any[], type: any) {
      if (!type) return;

      var key: string = Object.keys(type)[0];

      if(type === 'all') {
        return dataList;

      } else {
        return dataList.filter((data: any) => {
          return (data[key] == type[key]);
        });
      }
    }

    private static stringToArray(data: any): any {
      if(typeof data === 'string') {
        var splitList = data.replace(/^\[/g , '').replace(/\]$/g , '').split(","),
            newSplitList = [];

        splitList.forEach((item: any) => {
          newSplitList.push(this.stringToNumber(item));
        });

        return newSplitList;
      } else {
        return data;
      }
    }

    private static stringToNumber(data: any): any {
      if(parseInt(data, 10)) {
        return parseInt(data, 10);
      } else {
        return data;
      }
    }

    private static checkType(data: any): Type {
      switch(typeof data) {
        case 'object':
          return data;
          break;

        case 'number':
          return { id: data };
          break;

        case 'string':
          if(/^#/.test(data)) {
            return { idName: data.substr(1) };
          } else if(/^\./.test(data)) {
            return { className: data.substr(1) };
          } else if(/all/gi.test(data)) {
            return 'all';
          } else if(this.stringToNumber(data)) {
            return { id: data };
          }
          break;
      }
    }

    /**
     * Public Static Function
    **/
    public static search(dataList: any[], type: any): any[] {
      if(this.isArray(type)) {
        var keys = [],
            searchItems = [],
            resultItem = [];

        this.stringToArray(type).forEach((item: any) => {
          keys.push(this.checkType(item));
        });

        keys.forEach((key: any) => {
          searchItems = this.getSearchItems(dataList, key);

          searchItems.forEach((item: any) => {
            resultItem.push(item);
          });
        });

        return resultItem;
      } else {
        return this.getSearchItems(dataList, this.checkType(type));
      }
    }

    public static uniq(stringArr) {
      var newArr = stringArr.filter((x, i, self) => {
        return self.indexOf(x) === i;
      });
      return newArr;
    }

    public static flattenArray(array) {
      return [].concat.apply(array);
    }

    // createTriggerModel
    public static createTriggerModel(triggerView: any[], triggerClass) {
      var triggerList = [];

      triggerView.forEach((trigger) => {
        triggerList.push(triggerClass.fromData(trigger));
      });

      return triggerList;
    }

    // createTargetModel
    public static createTargetModel(targetView: any[], targetClass) {
      var targetList = [];

      targetView.forEach((target) => {
        targetList.push(targetClass.fromData(target));
      });

      return targetList;
    }

  }
}
