const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {

    // Listando um Spot
    async index(req, res) {
        // Criando um filtro
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech }); // Retorna somente os dados relacionados a tecnologia escolhida

        return res.json(spots);
    },

    // Criando um Spot
    async store(req, res){
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        // Retorna usuário existente
        const user = await User.findById(user_id);

        if(!user){
            // Caso não exista um usuário exibe uma mensagem de erro
            return res.status(400).json({ error: 'Usuário não existe!' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()), // Percorre a string, separa com vírgula e tira os espaços em branco
            price
        })

        return res.json({spot})
    }
}