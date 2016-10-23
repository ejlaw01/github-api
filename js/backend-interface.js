var apiKey = require("./../.env").apiKey;

var User = function(name, location){
  this.name = name;
  this.location = location;
  this.repos = [];
};

var user;

User.prototype.getRepos = function(){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    var name = response.name;
    var location = response.location;
    var repos = [];
    user = new User(name, location, repos);
    console.log(user);
    user.repoNames();
    user.displayInfo();
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.repoNames = function(){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(repos){
    for (var i = 0; i < repos.length; i++){
      console.log(repos[i].name + " " + repos[i].description);
      user.repos.push(repos[i].name + ": " + repos[i].description);
      if (repos[i].description === null) {
        $("#repositories").append("<li>" + repos[i].name + "</li>");
      } else {
        $("#repositories").append("<li>" + repos[i].name + ": " + repos[i].description + "</li>");
      }
    }
  });
};

exports.requestModule = Request;
