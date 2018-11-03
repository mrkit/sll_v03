const r = require('express').Router();

r.use('/auth', require('./auth'));
r.use('/contact', require('./contact'));
r.use('/admin', require('./admin'));
r.use('/posts', require('./posts'));

module.exports = r;