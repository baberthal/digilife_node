/* jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');
var NestStrategy = require('passport-nest').Strategy;

/* GET /auth/nest */
router.get('/auth/nest', passport.authenticate('nest'));

router.get('/auth/nest/callback',
    passport.authenticate('nest', { }),
    function(req, res) {
      res.cookie('nest_token', req.user.accessToken);
      res.redirect('/');
    });

module.exports = router;
