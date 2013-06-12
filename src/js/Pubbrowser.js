define([
  'jquery',
  'underscore',
  'backbone',
  'test',
], function($, _, Backbone, Test) {
  var initialize = function () {
    Test.initialize();
  };

  return {
    initialize: initialize
  };
});