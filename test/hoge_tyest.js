var assert = require("power-assert");

describe('front_js ', function () {

  describe("additioner", function() {
    it("２つの引数の和を返すべし", function() {
      assert( local_util.additioner(10, 20) === 20 );    // NG
      // assert( local_util.additioner(10, 20) === 30 ); // OK
    });
  });
})

