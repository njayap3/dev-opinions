define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone, AppRouter) {

  var MyApp = function () {
    console.log("Router creation...");
    
    var appRouter = new AppRouter();
    
    Backbone.history.start({ pushState: true });

    $(".home-link").on("click", function () {
      appRouter.navigate("/", {trigger: true});
    });

    $(".follow-devs-link").on("click", function (e) {
      e.preventDefault();
      appRouter.navigate("/users", {trigger: true});
    });
  };

  return MyApp;
});