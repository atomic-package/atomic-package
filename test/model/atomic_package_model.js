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

  describe("isObject", function() {
    const testObject = { id: 2 };

    it("isObject { id: 2 }", function() {
      assert(model.isObject(testObject) === true);
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

  describe("stringToObjectCheck", function() {
    const stringObjectList = [
      "{ id: 1 }",
      "{ id: 1 }, { id: 2 }",
      "{ id: 1 }, { id: 2 }, 1, atmicPackage"
    ];

    assert(model.stringToObjectCheck(stringObjectList[0]) === true);
    assert(model.stringToObjectCheck(stringObjectList[1]) === true);
    assert(model.stringToObjectCheck(stringObjectList[2]) === true);
  });

  describe("stringToJson", function() {
    const stringObjectList = [
      "{ id: 1 }",
      "{ id: 2 }",
      "{ id: 3, className: 'class', parts: { id: 1 }}"
    ];

    const objectList = [
      { id: 1 },
      { id: 2 },
      { id: 3, className: 'class', parts: { id: 1 }}
    ];

    assert.deepEqual(model.stringToJson(stringObjectList[0]), objectList[0]);
    assert.deepEqual(model.stringToJson(stringObjectList[1]), objectList[1]);
    assert.deepEqual(model.stringToJson(stringObjectList[2]), objectList[2]);
  });

  describe("stringToArray", function() {
    const stringIdList = "[#modalWindow1, #modalWindow2, #modalWindow3]";
    const stringObjectList = "[{ atmoic: 0 }, { atmoic: 1 }, { atmoic: 2 }]";

    it("strings ids", function() {
      assert.deepEqual(model.stringToArray(stringIdList), ['#modalWindow1', '#modalWindow2', '#modalWindow3']);
    });

    it("strings objects", function() {
      assert.deepEqual(model.stringToArray(stringObjectList), [{ atmoic: 0 }, { atmoic: 1 }, { atmoic: 2 }]);
    });
  });

  describe("checkType", function() {
    const numberType = 2;
    const objectType = { id: 2 };
    const stringType = "2";
    const stringIdType = "#modalWindow";
    const stringClassType = ".modalWindow";
    const allType = "all";

    it("numberType", function() {
      assert.deepEqual(model.checkType(numberType), { id: 2 });
    });

    it("objectType", function() {
      assert.deepEqual(model.checkType(objectType), { id: 2 });
    });

    it("stringType", function() {
      assert.deepEqual(model.checkType(stringType), { id: 2 });
    });

    it("stringIdType", function() {
      assert.deepEqual(model.checkType(stringIdType), { idName: 'modalWindow' });
    });

    it("stringClassType", function() {
      assert.deepEqual(model.checkType(stringClassType), { className: 'modalWindow' });
    });

    it("allType", function() {
      assert.deepEqual(model.checkType(allType), "all");
    });
  });


  describe("search", function() {
    const dataList = [{
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
    }];

    const searchTypeList = [
      { idName: "modalWindow1" },
      { idName: "modalWindow2" },
      { className: "modalWindow" },
      { id: 1 },
      { id: 3 },
      "all",
      1,
      3,
      "1",
      "3"
    ];

    it("idName", function() {
      assert.deepEqual(model.search(dataList, searchTypeList[0]), [dataList[0]]);
      assert.deepEqual(model.search(dataList, searchTypeList[1]), [dataList[1]]);
    });

    it("className", function() {
      assert.deepEqual(model.search(dataList, searchTypeList[2]), [dataList[0],dataList[1]]);
    });

    it("id", function() {
      assert.deepEqual(model.search(dataList, searchTypeList[3]), [dataList[0]]);
      assert.deepEqual(model.search(dataList, searchTypeList[4]), [dataList[2]]);
    });

    it("all", function() {
      assert.deepEqual(model.search(dataList, searchTypeList[5]), dataList);
    });

    it("number", function() {
      assert.deepEqual(model.search(dataList, searchTypeList[6]), [dataList[0]]);
      assert.deepEqual(model.search(dataList, searchTypeList[7]), [dataList[2]]);
    });

    it("string", function() {
      assert.deepEqual(model.search(dataList, searchTypeList[8]), [dataList[0]]);
      assert.deepEqual(model.search(dataList, searchTypeList[9]), [dataList[2]]);
    });
  });

  describe("uniq", function() {
    const duplicationNumberArray = [1, 2, 1, 2, 3, 5, 5, 10];
    const duplicationStringArray = ["a", "b", "a", "b", "c", "e", "e", "j"];

    it("number", function() {
      assert.deepEqual(model.uniq(duplicationNumberArray), [1, 2, 3, 5, 10]);
    });

    it("string", function() {
      assert.deepEqual(model.uniq(duplicationStringArray), ["a", "b", "c", "e", "j"]);
    });

    it("number & string", function() {
      assert.deepEqual(model.uniq(duplicationNumberArray.concat(duplicationStringArray)), [1, 2, 3, 5, 10, "a", "b", "c", "e", "j"]);
    });
  });

  describe("flattenArray", function() {
    const multipleArray = [1, 2, [3, 4, [5]]];
  });

  describe("createTriggerModel", function() {
  });

  describe("createTargetModel", function() {
  });

});
