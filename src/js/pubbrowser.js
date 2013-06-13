define([
  'jquery',
  'underscore',
  'backbone',
  'test',
  'router'
], function($, _, Backbone, Test, PubListView, Router) {
  var initialize = function () {
    //Router.initialize();
    Test.initialize();
  };

  return {
    initialize: initialize
  };
});