const express = require('express');
const partnerRouter = express.Router();

const Partner = require('../models/partner');

partnerRouter.route('/')
.get((req, res, next) => {
    Partner.find()
    .then(partners => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(partners);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Partner.create(req.body)
    .then(partners => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(partners);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /partners/${req.params.partnerId}/comments`);
})
.delete((req, res, next) => {
    Partner.deleteMany()
    .then(partners => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(partners);
    })
    .catch(err => next(err));
});

partnerRouter.route('/:partnerId')
.get((req, res, next) => {
    Partner.findById(req.param.partnerId)
    .then(partner => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(partner);
    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.partnerId}/comments/${req.params.commentId}`);
})
.put((req, res, next) => {
    Partner.findByIdAndUpdate(req.param.partnerId)
    .then(partner => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(partner);
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Partner.findByIdAndDelete(req.param.partnerId)
    .then(partner => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(partner);
    })
    .catch(err => next(err));
});

module.exports = partnerRouter;