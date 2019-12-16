const moogoose = require('mongoose');

const UserSchema = new moogoose.Schema({
    email: String,
});

module.exports = moogoose.model('User', UserSchema);