define([
	'underscore',
	'backbone'
], function(_, Backbone){

	var TweetsModel = Backbone.Model.extend({
	    defaults: {
	    	message: "Default message",
	    	userId: 1,
	    	timestamp: Date.now()
	    }
	});
  
 	return TweetsModel;
});