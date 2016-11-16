define([
	'underscore',
	'backbone',
	'models/TweetsModel'
], function(_, Backbone, TweetsModel){
	var TweetsCollection = Backbone.Collection.extend({
		model: TweetsModel,

		url: 'http://localhost:8080/api/tweets',

		comparator: function(m) {
			var dateObj = new Date(m.get('timestamp'));
        	return -dateObj.getTime();
    	}
	});

  	return TweetsCollection;
});