const assert = require("power-assert");
const atomicPackage = require("../dist/js/atomic-package.js");

describe('modalWindow ', function () {

  const MODAL_DOM = [
    '<div class="modalWindow" id="modalWindow">',
    '<div class="modalBody">',
    '<p class="btn primary"><a href="#" data-ap-modal-close>クローズ</a></p>',
    '<div>コンテンツ</div>',
    '</div>',
    '</div>'
  ].join('');

  const modal = atomicPackage.AP.modal;

  describe("open", function() {
    it("ModalWindow open", function() {
      console.log(modal);
    });
  });

});
