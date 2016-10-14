var apiKey = require("./../.env").apiKey;

// var Request = function(){
// }

var User = function(name, location, numberOfRepos){
  this.name = name;
  this.location = location;
  this.numberOfRepos = numberOfRepos;
  this.repos = [];
};

var user;

User.prototype.getRepos = function(){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    var name = response.name;
    var location = response.location;
    var numberOfRepos = response.public_repos;
    user = new User(name, location, numberOfRepos);
    console.log(user);
    user.repoNames();
    user.displayInfo();
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.repoNames = function(){
  debugger;
  $.get('https://api.github.com/users/' + username + '/repos').then(function(repos){
    var numberOfRepos = user.numberOfRepos;
    for (var i = 0; i < numberOfRepos; i++){
      console.log(repos[i].name + " " + repos[i].description);
      user.repos.push(repos[i].name + ": " + repos[i].description);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

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
