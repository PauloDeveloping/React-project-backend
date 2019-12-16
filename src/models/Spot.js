const moogoose = require('mongoose');

const SpotSchema = new moogoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: moogoose.Schema.Types.ObjectId, // Referência do usuário que criou o Spot
        ref: 'User' // Se refere ao model 'User'
    }
}, {
    toJSON: {
        virtuals: true, // Toda vez que um Spot for convertido em JSON, calcule os virtuals automáticamente
    },
});

SpotSchema.virtual('thumbnail_url').get(function() { // Não existe no banco, mas é algo virtual salvado pelo JavaScript
    return `http://localhost:3000/files/${this.thumbnail}`
})

module.exports = moogoose.model('Spot', SpotSchema);