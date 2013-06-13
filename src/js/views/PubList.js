define([
  'backbone',
  'd3',
  'models/proceedingsmodel',
  'index.html'
], function(Backbone, ignore, ProceedingsModel, index) {
  var PubListView = Backbone.View.extend({
    el: d3.select("#publist"),
    initialize: function () {
      this.proceedings = new ProceedingsModel();
      console.log(this.proceedings.data);
      this.append("p").text("Hello! The View works!");
    }
  });

  return PubListView;
});