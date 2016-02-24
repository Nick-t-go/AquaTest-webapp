'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var TestTypesSchema = new Schema({
    name: String,
    max: Number,
    step: Number,
    type: String,
    value: Number
});


module.exports = mongoose.model('TestTypes', TestTypesSchema);

