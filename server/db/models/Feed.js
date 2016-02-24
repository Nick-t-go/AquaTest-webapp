'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var FeedSchema = new Schema({
    action: String,
    category: String,
    date: Date,
    detail: String,
    subCat: Number
});


module.exports = mongoose.model('Feed', FeedSchema);


