const multer = require('multer') // Biblioteca que lê multi forms
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // Diretório onde será inserido as imagens dentro do projeto
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname) // Pega a extensão da imagem
            const name = path.basename(file.originalname, ext) // Pega o nome da imagem sem sua extensão
            cb(null, `${name}-${Date.now()}${ext}`); // Retorna o nome da imagem, sua extensão e a 
                                               // data atual que foi adicionada, assim cada imagem será única
        },
    }), 
};