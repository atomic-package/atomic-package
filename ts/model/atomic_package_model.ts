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

    public static search(dataList: any[], type): any[] {
      var key: string = Object.keys(type)[0];

      if(type === 'all') {
        return dataList;

      } else {
        return dataList.filter((data: any) => {
          return (data[key] == type[key]);
        });
      }
    }

    public static checkType(data: any): Type {
      switch(typeof data) {
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
          }
          break;
      }
    }

  }
}
