const Spot = require('../models/Spot');

module.exports = {

    // Mostra os dados
    async show(req, res){
        const { user_id } = req.headers // Busca o id do usuário logado
        
        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
}