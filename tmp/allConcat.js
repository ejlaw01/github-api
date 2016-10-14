var apiKey = require("./../.env").apiKey;

// var Request = function(){
// }

var User = function(name, location){
  this.name = name;
  this.location = location;
}

var user;

User.prototype.getRepos = function(){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    var name = response.name;
    var location = response.location;
    user = new User(name, location);
    console.log(user);
    user.displayInfo();
    user.repoNames();
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.repoNames = function(){
  $.get('https://api.github.com/users/' + username + '/repos').then(function(repos){
    var numberOfRepos = parseInt(repos.length);
    console.log(repos);
    for (var i = 0; i < numberOfRepos; i++){
      console.log(repos[i].name);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

// User.prototype.getRepos = function(){
//   $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
//     console.log(response);
//     var name = response.name;
//     var location = response.location;
//     user = new User(name, location);
//     console.log(user);
//     console.log(user.);
//     user.displayInfo();
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

// exports.requestModule = Request;
// exports.userModule = User;

var Request = require("./../js/backend-interface.js").requestModule;
// var User = require("./../js/backend-interface.js").userModule;

var username;

User.prototype.displayInfo = function(){
  $("#user").text(this.name);
  $("#location").text(this.location);
}

$(document).ready(function(){
  $("#search").submit(function(event){
    event.preventDefault();
    username = $("#username").val();
    console.log("Input: " + username);
    var user = new User();
    user.getRepos();
  });
});
