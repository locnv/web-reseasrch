/**
 * Created by locnv on 1/14/19.
 */

(function() {

  "use strict";

  let log = console.log;

  function MyFeature() {}

  MyFeature.prototype.test001 = test001;


  function test001() {
    log('Test 001');
  }

  module.exports = new MyFeature();

})();