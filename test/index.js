/**
 * Created by locnv on 1/14/19.
 */

(function() {

  "use strict";

  let log = console.log;

  function MyFeature() {}

  MyFeature.prototype.test001 = test001;
  MyFeature.prototype.test002 = test001;


  function test001() {
    log('Test 001');
    log('Test 001 - update 1');
  }

  function test002() {
    log('Test 002');
  }

  module.exports = new MyFeature();

})();