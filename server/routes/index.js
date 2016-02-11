'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var Customer = require('../models');

router.get('/', function(req, res, next){
    Customer.find()
        .then(function(customers){
        if(!customers) next();

        res.json(customers);
    })
        .then(null, next)
});


router.post('/', function(req, res, next){
    Customer.create(req.body)
        .then(function(customer){
            res.json(customer)
        })
        .then(null, next)
});

router.use('/:id', function(req, res, next){
    Customer.findById(req.params.id).exec({})
        .then(function(customer){
           req.customer = customer;
            next();
        })
        .then(null, next);
});

router.get('/:id', function(req, res, next){
    if(!req.customer) next();
    res.json(req.customer)
});

router.put('/:id', function(req, res, next){
    if(!req.customer) next();

    req.customer = _.assign(req.customer, req.body);
    console.log(req.customer)

    req.customer.save()
        .then(function(customer) {

            res.json(customer);
        })
        .then(null, next);
});

router.delete('/id', function(req, res, next){
    if (!req.customer) next();

    req.customer.remove()
        .then(function(customer){
            res.json(customer);
        })
        .then(null, function(err){
            console.log(err);
            next(err);
        });
});

module.exports = router;
