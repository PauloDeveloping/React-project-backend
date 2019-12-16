const User = require('../models/User');

module.exports = {
    // Criando uma sessão
    async store(req, res){ 
        const { email } = req.body;

        // Caso encontre um usuário ele retorna em formato JSON
        let user = await User.findOne({ email })

        // Se ele não encontrar um usuário ele cadastra
        if (!user){
            const user = await User.create({ email });
        }

        return res.json(user);
    }
};