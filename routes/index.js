const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', {
    tweets: tweets,
    firstName: 'Nimit',
    name: 'Nimit Maru',
    showForm: true
  } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  renderTweets(res, {name: name}, true, name);
});

router.get('/tweets/:id', function(req, res) {
  var id = +req.params.id;
  renderTweets(res, {id: id});
})

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

function renderTweets(res, filter, showForm, name) {
  var list = tweetBank.find( filter );
  name = name || (list[0] && list[0].name) || '';
  res.render( 'index', {
    tweets: list,
    name: name,
    firstName: name.split(' ')[0],
    showForm: showForm
  } );
}


module.exports = router;
