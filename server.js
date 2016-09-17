var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Article = require('./models/Article.js');

var app = express();

var db ='mongodb://localhost/nytimes';

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));
app.use('/static', express.static('app'));

const PORT = process.env.PORT || 5000;

// app.use(function (req, res, next){
// 	if (req.headers['x-forwarded-proto' === 'http']) {
// 		res.redirect('http://' + req.hostname + req.url);
// 	} else {
// 		next();
// 	}
// })
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get('/api/articles', function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).limit(5)
    .exec(function(err, doc){
      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

// This is the route we will send POST requests to save each search.
app.post('/api/articles', function(req, res){
  var newSearch = new Article(req.body);
  console.log("BODY: " + req.body.location);

  // Here we'll save the location based on the JSON input. 
  // We'll use Date.now() to always get the current date time
  Article.create({"title": title}, function(err){
    if(err){
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  })
});

app.listen(PORT, function(){
	console.log('Express Server is up on port ' + PORT);
})