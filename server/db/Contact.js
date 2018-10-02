const conn = require('./conn'),
      S = conn.Sequelize;

const Contact = conn.define('contact', {
    name: {
        type: S.STRING,
        allowNull: false,
    }, 
    email: {
        type: S.STRING,
        allowNull: false,
        unique: true
    },
    subject: {
        type: S.TEXT,
        allowNull: false
    },
    message: {
        type: S.TEXT,
        allowNull: false
    }
});

module.exports = Contact;