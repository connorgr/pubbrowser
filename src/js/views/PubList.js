define([
  'underscore',
  'backbone',
  'd3',
  'collections/PubCollection',
  // TODO fix this include'text!index.html'
], function(_, Backbone, ignore, PubCollection, index) {
  var PubListView = Backbone.View.extend({
    el: d3.select("#publist"),
    initialize: function () {
      this.pubCollection = new PubCollection();
      console.log(this.pubCollection.data);
      this.append("p").text("Hello! The View works!");
    }
  });

  return PubListView;
});