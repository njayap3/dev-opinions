define([
  'jquery',
  'underscore',
  'backbone',
  'views/TweetsView',
  'views/UserListView'
], function($, _, Backbone, TweetsView, UserListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'showHomePage',
      'users': 'showUsers'
    },

    showHomePage: function() {
      var tweetsView = new TweetsView();
      tweetsView.render();
    },

    showUsers: function() {
      console.log("show users");
      var usersView = new UserListView();
      usersView.render();
    }

  });
  return AppRouter;
});