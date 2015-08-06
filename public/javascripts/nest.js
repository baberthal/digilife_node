/* jslint node: true */
'use strict';

var Firebase = require('firebase');
var Cookies = require('js-cookie');

var nestToken = Cookies.get('nest_token');
var thermostat = {};
var structure = {};

if (nestToken) {
  var dataRef = new Firebase('wss://developer-api.nest.com');
  dataRef.auth(nestToken);

  // TODO: handle errors here
} else {
  window.location.replace('/auth/nest');
}
