'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TestSchema = new Schema({
    date: Date,
    tanks: String,
    test: String,
    val: Number
});



module.exports = mongoose.model('Test', TestSchema);


