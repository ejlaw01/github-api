var apiKey = require("./../.env").apiKey;

var User = function(){
}

User.prototype.getRepos = function(){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;

var Request = require("./../js/backend-interface.js").requestModule;
var username;

$(document).ready(function(){
  $("#search").submit(function(event){
    event.preventDefault();
    username = $("#username").val();
    console.log(username);
    var user = new User();
    user.getRepos();
  });
});
