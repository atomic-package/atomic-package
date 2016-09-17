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

  export class AtomicPackageModel {
    private controller: AtomicPackageController;

    constructor(
      controller: AtomicPackageController
      ) {
    }

    public static search(dataList: any[], type): any[] {
      var key: string = Object.keys(type)[0];

      return dataList.filter((data: any) => {
        return (data[key] == type[key]);
      });
    }

    public static checkType(data: any): Type {
      switch(typeof data) {
        case 'number':
          return { id: data };
          break;
      }
    }

  }
}
