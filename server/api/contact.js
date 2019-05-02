const r = require('express').Router(),
      Contact = require('../db').models.Contact;

r.get('/', (req, res, next) => {
    Contact.findAll()
    .then(contact => res.send(contact))
    .catch(next);
});

r.post('/', (req, res, next) => {
    const { name, email, subject, message } = req.body;

    Contact.create({ name, email, subject, message })
    .then(contact => res.send('Success!'))
    .catch(next);
});

module.exports = r;