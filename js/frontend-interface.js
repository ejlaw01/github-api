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
