var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TweetSchema = new Schema({
    message: String,
    userId: Number,
    timestamp: Date
});

module.exports = mongoose.model('Tweet', TweetSchema);