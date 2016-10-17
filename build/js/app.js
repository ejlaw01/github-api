(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "5d2301e6e5affae37af1a943a0e0f1d1a150bc70";

},{}],2:[function(require,module,exports){
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
      if (repos[i].description === null) {
        $("#repositories").append("<li>" + repos[i].name + "</li>");
      } else {
        $("#repositories").append("<li>" + repos[i].name + ": " + repos[i].description + "</li>");
      }
    }
  });
};

exports.requestModule = Request;

},{"./../.env":1}],3:[function(require,module,exports){
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
      if (repos[i].description === null) {
        $("#repositories").append("<li>" + repos[i].name + "</li>");
      } else {
        $("#repositories").append("<li>" + repos[i].name + ": " + repos[i].description + "</li>");
      }
    }
  });
};

exports.requestModule = Request;

var Request = require("./../js/backend-interface.js").requestModule;

var username;

User.prototype.displayInfo = function(){
  $("#user").text(this.name);
  $("#location").text(this.location);
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

},{"./../.env":1,"./../js/backend-interface.js":2}]},{},[3]);
