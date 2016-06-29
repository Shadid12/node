var express = require('express');

var exp = express();
var port = process.env.PORT || 3000;

/***************************/
var Cloudant = require('cloudant');
var me = 'shadid'; // Set this to your own account
var password = 'asoc2016';
var cloudant = Cloudant({account:me, password:password});

var db = cloudant.db.use("fake_database");

cloudant.db.list(function(err, body) {
  // body is an array
  body.forEach(function(db) {
    console.log(db);
  });
});
//////****************///////


exp.get('/', function (req, res) {
  res.send('Test API');
});

// console output
exp.listen(port, function(){
  console.log("Running ");
});