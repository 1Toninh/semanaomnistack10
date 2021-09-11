const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-3spgx.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes);


// MÉTODOS HTTP: GET(buscar), POST(criar), PUT(editar), DELETE(apagar)
// Tipos de parâmetros
// Query Params: req.query (Filtros, ordenação, paginação,...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção) Uso: PUT E DELETE
// Body: request.body (Dados para criação ou alteração de um registro) Uso: POST, PUT


app.listen('3333');