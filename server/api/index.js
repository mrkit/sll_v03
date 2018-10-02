const r = require('express').Router();

r.use('/auth', require('./auth'));
r.use('/contact', require('./contact'));

module.exports = r;