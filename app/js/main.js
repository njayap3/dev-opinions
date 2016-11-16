require.config({
	baseUrl: '/app/js/',

	paths: {
	    jquery: '../../bower_components/jquery/dist/jquery',
	    underscore: '../../bower_components/underscore/underscore',
	    backbone: '../../bower_components/backbone/backbone',
	    text: '../../bower_components/text/text',
	    moment: '../../bower_components/moment/moment'
  	}
});

require([
	'myapp'
], function (MyApp){
	console.log("Calling app..");
	MyApp();

});