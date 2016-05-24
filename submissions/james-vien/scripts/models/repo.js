(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX!?
       Don't forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/' + vienRepoToken.gitUser + '/repos' + '?per_page=10' + '&sort=updated' + '&since=2016-05-09T00:00:01Z',
      type: 'GET',
      headers: {'Authorization':'token ' + vienRepoToken.token},
      success: function(data, message, xhr) {
        repos.all = data;
        callback();
      }
    });
  };

  repos.with = function(attr) {
    /* DONE: This Model method filters the full repos collection based
        on a particular attribute. You could use this to filter all
        repos that have a non-zero `forks_count`, `stargazers_count`,
        or `watchers_count`. */
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
