require.config({
  paths: {
    jquery: '../../components/jquery/jquery.min',
    underscore: '../../components/underscore/underscore-min',
    backbone: '../../components/backbone/backbone-min',
    d3: '../../components/d3/d3.min'
  }

});

require([
  // Load app module and pass it to definition function
  'pubbrowser',
], function(Pubbrowser) {
  Pubbrowser.initialize();
});