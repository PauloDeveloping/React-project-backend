const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path') // Lida com caminhos na aplicação

const app = express();

mongoose.connect('mongodb+srv://paulo:paulo@react-ygpkx.mongodb.net/reactdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query = Acessar query params (para filtro)
// req.params = Acessar route params (para update e delete)
// req.body = Acessa corpo da requisição (para create e update)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))) // Retorna arquivos estáticos (PDF, IMG, etc...)
app.use(routes);

app.listen(3000);