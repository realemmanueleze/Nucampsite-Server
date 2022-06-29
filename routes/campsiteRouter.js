const express = require('express');
const campsiteRouter = express.Router();

const Campsite = require('../models/campsite');

campsiteRouter.route('/')
.get((req, res, next) => {
    Campsite.find()
    .then(campsites => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campsites);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Campsite.create(req.body)
    .then(campsites => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campsites);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /campsites/${req.params.campsiteId}/comments`);
})
.delete((req, res, next) => {
    Campsite.deleteMany()
    .then(campsites => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campsites);
    })
    .catch(err => next(err));
});

campsiteRouter.route('/:campsiteId')
.get((req, res, next) => {
    Campsite.findById(req.param.campsiteId)
    .then(campsite => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campsite);
    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}/comments/${req.params.commentId}`);
})
.put((req, res, next) => {
    Campsite.findByIdAndUpdate(req.param.campsiteId)
    .then(campsite => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campsite);
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Campsite.findByIdAndDelete(req.param.campsiteId)
    .then(campsite => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campsite);
    })
    .catch(err => next(err));
});


module.exports = campsiteRouter;

