define([
  'jquery',
  'underscore',
  'backbone',
  'moment',
  'models/TweetsModel',
  'text!templates/TweetCard.html'
], function($, _, Backbone, moment, TweetsModel, TweetCardTemplate){

  var TweetCardView = Backbone.View.extend({

    model: new TweetsModel(),

    template: _.template(TweetCardTemplate),

    render: function(){
      var tweetData = this.model.attributes;
      var date = new Date(tweetData.timestamp);

      tweetData.timeStamp = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");

      this.$el.html(this.template(tweetData));
      return this;
    }
  });

  return TweetCardView;
});