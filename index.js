import express from 'express'
import UsuarioModel from './src/models/UsuarioModel.js';
const app = express();
app.get('/', (request, response) => {
    response.send("Hello Express FDEV009 111c")
})

app.get('/usuarios', async (request, response) => {
    const usuarios = await UsuarioModel.findAll();
    response.json(usuarios)
})

app.listen(3000, () => {
    console.log("Servidor executando...")
})