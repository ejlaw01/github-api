
$(document).ready(function(){
  $("#search").submit(function(event){
    event.preventDefault();
    username = $("#username").val();
    console.log(username);
  });
});
