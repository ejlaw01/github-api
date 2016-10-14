var Request = require("./../js/backend-interface.js").requestModule;
// var User = require("./../js/backend-interface.js").userModule;

var username;

User.prototype.displayInfo = function(){
  $("#user").text(this.name);
  $("#location").text(this.location);
  debugger;
  for (var i = 0; i < this.repos.length; i++) {
    $("#repositories").append("<li>" + this.repos[i] + "</li>");
  }
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
