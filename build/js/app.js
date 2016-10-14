(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "5d2301e6e5affae37af1a943a0e0f1d1a150bc70";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/backend-interface.js":2}]},{},[3]);
