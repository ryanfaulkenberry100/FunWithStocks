'use strict';

const async = require('async');
const request = require('request');

/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
  res.render('api/index', {
    title: 'API End Point'
  });
};
