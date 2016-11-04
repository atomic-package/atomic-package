const assert = require("power-assert");
const atomicPackage = require("../../docs/static/js/atomic-package.js");

describe('ts/model/atomic_package_model.ts', function () {
  const model = atomicPackage.AP.getModel();

  describe("isArray", function() {
    const arrayTest = [
      [1, 2, 3, 4],
      ['one', 'two', 'three'],
      "[1, 2, 3, 4]",
      "[[[]]]",
      "[,,,]",
      { "atomic": 0 },
      "[{},{},{},]"
    ];

    it("isArray Number[1, 2, 3, 4]", function() {
      assert(model.isArray(arrayTest[0]) === true);
    });

    it("isArray String['one', 'two', 'three']", function() {
      assert(model.isArray(arrayTest[1]) === true);
    });

    it("isArray String Type '[1, 2, 3, 4]'", function() {
      assert(model.isArray(arrayTest[2]) === true);
    });

    it("isArray String Type error'[[[]]]'", function() {
      assert(model.isArray(arrayTest[3]) === false);
    });

    it("isArray String Type error'[,,,]'", function() {
      assert(model.isArray(arrayTest[4]) === false);
    });

    it("isArray Object {}", function() {
      assert(model.isArray(arrayTest[5]) === false);
    });

    it("isArray String Type Object'[{},{},{},]'", function() {
      assert(model.isArray(arrayTest[6]) === true);
    });
  });


  describe("getSearchItems", function() {
    const modalWindowTargetList = [
      {
        className: "modalWindow",
        id: 1,
        idName: "modalWindow1",
        isOpen: false,
        triggerId: null,
        view: null
      },
      {
        className: "modalWindow",
        id: 2,
        idName: "modalWindow2",
        isOpen: false,
        triggerId: null,
        view: null
      },
      {
        className: "modalWindow2",
        id: 3,
        idName: "modalWindow3",
        isOpen: false,
        triggerId: null,
        view: null
      }
    ];

    const modalWindowTypeList = [
      {
        idName: "modalWindow1"
      },
      {
        idName: "modalWindow2"
      },
      {
        idName: "modalWindow3"
      },
      {
        className: "modalWindow"
      },
      {
        className: "modalWindow2"
      },
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];

    it("modalWindow targetList of type idName", function() {
      assert.deepEqual(model.getSearchItems(modalWindowTargetList, modalWindowTypeList[0]), [modalWindowTargetList[0]]);
      assert.deepEqual(model.getSearchItems(modalWindowTargetList, modalWindowTypeList[1]), [modalWindowTargetList[1]]);
      assert.deepEqual(model.getSearchItems(modalWindowTargetList, modalWindowTypeList[2]), [modalWindowTargetList[2]]);
    });


    it("modalWindow targetList of type className", function() {
      assert.deepEqual(
        model.getSearchItems(
          modalWindowTargetList,
          modalWindowTypeList[3]),
          [modalWindowTargetList[0], modalWindowTargetList[1]]
      );

      assert.deepEqual(
        model.getSearchItems(
          modalWindowTargetList,
          modalWindowTypeList[4]),
        [modalWindowTargetList[2]]
      );
    });

    it("modalWindow targetList of type id", function() {
      assert.deepEqual(model.getSearchItems(modalWindowTargetList, modalWindowTypeList[5]), [modalWindowTargetList[0]]);
      assert.deepEqual(model.getSearchItems(modalWindowTargetList, modalWindowTypeList[6]), [modalWindowTargetList[1]]);
      assert.deepEqual(model.getSearchItems(modalWindowTargetList, modalWindowTypeList[7]), [modalWindowTargetList[2]]);
    });

    it("modalWindow targetList of type all", function() {
      assert.deepEqual(model.getSearchItems(modalWindowTargetList, "all"), modalWindowTargetList);
    });

    it("modalWindow targetList of type is null", function() {
      assert.deepEqual(model.getSearchItems(modalWindowTargetList), undefined);
    });
  });

  describe("stringToNumber", function() {
    it("strings", function() {
      assert(model.stringToNumber("1") === 1);
      assert(model.stringToNumber("1000") === 1000);
      assert(model.stringToNumber("-1") === -1);
      assert(model.stringToNumber("-1000") === -1000);
    });

    it("numbers", function() {
      assert(model.stringToNumber(1) === 1);
      assert(model.stringToNumber(1000) === 1000);
      assert(model.stringToNumber(-1) === -1);
      assert(model.stringToNumber(-1000) === -1000);
    });

    it("objects", function() {
      assert.deepEqual(model.stringToNumber({}), {});
    })
  });

  describe("stringToArray", function() {
    it("strings", function() {
    });
  });
});
