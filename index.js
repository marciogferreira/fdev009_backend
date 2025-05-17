import express from 'express'
import UsuarioRoutes from './src/routes/UsuarioRoutes.js';
import ProdutoModel from './src/models/ProdutoModel.js';
import CategoriaModel from './src/models/CategoriaModel.js';
const app = express();

app.use(express.json()); // Liberando Passagem de Dados via Post e Put pelo Body

app.get('/', (request, response) => {
    response.send("Hello Express FDEV009 111c")
})

app.use(UsuarioRoutes);

app.get('/produtos', async (request, response) => {
    const produtos = await ProdutoModel.findAll({
        attributes: ['nome', 'categoria_id'],
        include: [
            {
                model: CategoriaModel,
                as: 'categoria' // deve bater com o alias definido no belongsTo
            }
        ]
        
    });
    response.json(produtos);
})

app.listen(3000, () => {
    console.log("Servidor executando...")
})