'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var express = require('express');
var Test  = require('./Test');
var Feed = require('./Feed');
var TestTypes = require('./TestTypes');


var UserSchema = new Schema({
    credentials: {
        new: {
            firstTests: {type: Boolean, default: true},
            tanks: {type: Boolean, default: true},
            date: {type: Date, default: Date.now}
        },
        feed: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Feed'
        }]
    },
    dates: {
        date: {type: Date, default: Date.now},
        tank: String
    },
    tanks: {
        name: String,
        tests: String,
        type: String
    },
    testTypes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TestTypes'
    }],
    tests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tests'
    }]
});



module.exports = mongoose.model('User', UserSchema);