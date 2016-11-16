define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/UserList.html'
], function($, _, Backbone, UserListTemplate){

  var UserListView = Backbone.View.extend({
    el: $('.content-list'),

    template: _.template(UserListTemplate),

    render: function() {
      this.$el.html(this.template);
      return this;
    }
  });

  return UserListView;
});