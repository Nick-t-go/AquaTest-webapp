'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var express = require('express');


var CustomerSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: { type: Number, required: true},
    sex: {type: String, required: true}
});

CustomerSchema.path('email').validate(function(customer){

});

module.exports = mongoose.model('Customer', CustomerSchema);