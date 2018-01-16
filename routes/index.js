const express = require( 'express' );
const router = express.Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get( '/users/:name', function (req, res) {
  let name = req.params.name;
  let tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets } );
});

let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: true});

router.post('/', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  let name = req.body.name;
  let text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.post('/', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  let name = req.body.name;
  let text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


module.exports = router;
