import express from 'express'
import UsuarioRoutes from './src/routes/UsuarioRoutes.js';
const app = express();

app.use(express.json()); // Liberando Passagem de Dados via Post e Put pelo Body

app.get('/', (request, response) => {
    response.send("Hello Express FDEV009 111c")
})

app.use(UsuarioRoutes);

app.listen(3000, () => {
    console.log("Servidor executando...")
})