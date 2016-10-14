var apiKey = require("./../.env");
// var username = require("./../js.frontend-interface.js");

var User = function(){
}

User.prototype.getRepos = function(){
  $.get('https://api.github.com/users/' + username + '?access_token=5d2301e6e5affae37af1a943a0e0f1d1a150bc70').then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
