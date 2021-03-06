(function(module) {
  var repoView = {};

  /* NOTE: Private methods declared here live only within
      the scope of the wrapping IIFE. */
  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  /* NOTE: Remember that new Handlebars template? Let's compile it!
      Save the result in this `render` variable that we will pass to
      the append method below. */
  var render = Handlebars.compile($('#repo-template').text()); /*TODO: finish this line */;

  /* NOTE: If all the data is loaded, we can prep the UI and
      render the repos. */
  repoView.index = function() {
    ui();
    $('#about ul').append(
      repos.with('name').map(render)
    );
    /* NOTE: This jQuery `append` method lets us append an entire array
        of HTML elements at once, so we can use a little FP to
        transform our data-set into DOM nodes. "repos.with"
        is a method we wrote in the repos model. */
  };

  module.repoView = repoView;
})(window);
