const r = require('express').Router();

r.use('/auth', require('./auth'));

module.exports = r;