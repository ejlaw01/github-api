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
    user = new User(name, location);
    console.log(user);
    user.repoNames();
    user.displayInfo();
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.repoNames = function(){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(repos){
    debugger;
    for (var i = 0; i < repos.length; i++){
      console.log(repos[i].name + " " + repos[i].description);
      user.repos.push(repos[i].name + ": " + repos[i].description);
      $("#repositories").append("<li>" + repos[i].name + "</li>");
    }
  });
};

exports.requestModule = Request;

var Request = require("./../js/backend-interface.js").requestModule;

var username;

User.prototype.displayInfo = function(){
  $("#user").text(this.name);
  $("#location").text(this.location);
  // for (var i = 0; i < this.repos.length; i++) {
  //   $("#repositories").append("<li>" + this.repos[i] + "</li>");
  // }
};

$(document).ready(function(){
  $("#search").submit(function(event){
    event.preventDefault();
    username = $("#username").val();
    console.log("Input: " + username);
    var user = new User();
    user.getRepos();
  });
});
