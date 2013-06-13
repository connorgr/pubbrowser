define([
  'underscore',
  'backbone',
  'd3'
], function(_, Backbone, ignore) {
  // TODO create constructor for proceeding name for binding data to model
  // TODO Create global index for conference names. Needs to be used by multiple models and collections
  var chiFilePath = "../../../data/chi2000-2013.json";
  var PubCollection = Backbone.Collection.extend({
    model: PubModel,

    abstract: "",
    authors: [""],
    doi: "",
    title: "",
    venue: "",
    year: [""]

  });

  return PubCollection;
});