//packages
var express = require('express');
var app = express();  // define app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Tweet = require('./app/db-models/tweet');

// configure app to use bodyParser to get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

//set up mongodb connection
mongoose.connect('mongodb://localhost:27017/devopinons');

//default port
var port = process.env.PORT || 8080;
// get an instance of the express Router
var router = express.Router();

//middleware to use for all requests
router.use(function(req, res, next) {
    // do logging, validations, throw error...also defines the route order unlike express3.0
    console.log('Something is happening.');
    next();
});

//route accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/tweets')

    //create a tweet (accessed at POST http://localhost:8080/api/tweets)
    .post(function(req, res) {
    	var tweet = new Tweet();
        tweet.message = req.body.message;
        tweet.userId = req.body.userId;
        tweet.timestamp = req.body.timestamp;

        tweet.save(function(err) {
            if (err) {
            	res.send(err);
            }

            res.json({ message: 'Tweet created!' });
        });
        
    })
    .get(function(req, res) {
        Tweet.find(function(err, tweets) {
            if (err) {
                res.send(err);
            }
            res.json(tweets);
        });
    });

/*router.route('/tweets/:tweet_id')

    //get tweet with that id (accessed at GET http://localhost:8080/api/tweets/:tweet_id)
    .get(function(req, res) {
        Tweet.findById(req.params.tweet_id, function(err, tweet) {
            if (err) {
                res.send(err);
            }
            res.json(tweet);
        });
    });*/

// all routes will be prefixed with /api
app.use('/api', router);

//listen on the port
app.listen(port);
console.log('Server listening on port: ' + port);