var Request = require("./../js/backend-interface.js").requestModule;

var username;

User.prototype.displayInfo = function(){
  $("#user").text(this.name);
  $("#location").text(this.location);
};

$(document).ready(function(){
  $("#search").submit(function(event){
    event.preventDefault();
    $("#repositories").empty();
    username = $("#username").val();
    console.log("Input: " + username);
    var user = new User();
    user.getRepos();
  });
});
