const moogoose = require('mongoose');

const BookingSchema = new moogoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: moogoose.Schema.Types.ObjectId, // Referência do usuário que criou o Spot
        ref: 'User' // Se refere ao model 'User'
    },
    spot: {
        type: moogoose.Schema.Types.ObjectId, // Referência do usuário que criou o Spot
        ref: 'Spot' // Se refere ao model 'User'
    }
});

module.exports = moogoose.model('Booking', BookingSchema);