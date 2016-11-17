define([
    'jquery',
    'underscore',
    'backbone',
    'collections/TweetsCollection',
    'models/TweetsModel',
    'views/TweetCardView',
    'utils/util',
    'text!templates/tweetlist.html'
], function($, _, Backbone, TweetsCollection, TweetsModel, TweetCardView, Utilities, tweetlistTemplate){
    var TweetsView = Backbone.View.extend({
        el: $('.content-list'),

        template: _.template(tweetlistTemplate),

        events: {
            'click .posttweet': 'postTweet'
        },

        tweetsCount: 0,

        initialize: function() {
            var fetchTweets;
            //new collection
            this.initializeCollection();
            //new session user
            this.createUserSession();
            this.addEventListeners();
            
            //check for new tweets/messages
            fetchTweets = function() {
                //fetch data from server
                this.collection.fetch({
                    add: true
                });
                setTimeout(fetchTweets, 10000);
            }.bind(this);

            fetchTweets();

            //set the initial template to be always shown
            this.initialRender();
        },

        initializeCollection: function() {
            this.collection = new TweetsCollection();
            this.collection.sort();
        },

        initialRender: function() {
            var userData = this.getUserInfo();
            this.$el.html(this.template(userData));
        },

        addEventListeners: function() {
            this.collection.on('add', function() {
                if(this.tweetsCount && (this.tweetsCount != this.collection.length)) {
                    $('.newTweetsNumber').html(this.collection.length - this.tweetsCount);
                    $('.showNewTweets').removeClass('hide');
                }
                else {
                    this.render();
                    this.tweetsCount = this.collection.length;
                }
            }, this);
        },

        createUserSession: function() {
            var userIdNum;
            //set a random userId for the session
            if(!sessionStorage.getItem('devOpinions-userId')) {
                userIdNum = Utilities.getRandomInt(1, 100000);
                sessionStorage.setItem('devOpinions-userId', userIdNum);
            }
        },

        postTweet: function() {
            var message, newTweet;

            message = $('.tweetmessage').val();

            newTweet = new TweetsModel({
                message: message,
                userId: sessionStorage.getItem('devOpinions-userId'),
                timestamp: new Date()
            });

            this.tweetsCount += 1;
            this.collection.add(newTweet);

            newTweet.save(null, {
                success: function(response) {
                    console.log('Successfully SAVED blog with _id: ' + response.toJSON()._id);
                },
                error: function(error) {
                    console.log('Failed to save blog!');
                }
            });

            $('.tweetmessage').val('');
        },

        getUserInfo: function() {
            var userId = sessionStorage.getItem('devOpinions-userId'),
                data = {
                    userId: userId,
                    userEmail: userId + '@intuit.com',
                    followers: 15
                };
            return data;
        },

        render: function() {
            var container, tweetcard;

            $('#tweetslist').empty();

            container = document.createDocumentFragment();

            _.each(this.collection.toArray(), function(tweet) {
                tweetcard = new TweetCardView({model: tweet}).render().el;
                container.appendChild(tweetcard);
            }.bind(this));

            $('#tweetslist').append(container);
            return this;
        }
    });

    return TweetsView;
});