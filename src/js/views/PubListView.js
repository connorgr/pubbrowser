define([
  'underscore',
  'backbone',
  'd3',
  'collections/PubCollection',
  //'text!index.html'
  // TODO fix this include'text!index.html'
], function(_, Backbone, ignore, PubCollection){//, index) {
  var PubListView = Backbone.View.extend({
    // use d3.select().node() to store the actual element
    el: d3.select("#publist").node(),
    render: function () {
      this.pubCollection = new PubCollection();

      // access via selecting again
      d3.select(this.el).append('p').text("Hello! The View works!");
      // TODO Append text
      //el.append("p").text("Hello! The View works!");
    }
  });

  return PubListView;
});
