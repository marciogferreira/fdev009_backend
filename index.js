import express from 'express'
import UsuarioRoutes from './src/routes/UsuarioRoutes.js';
import ProdutoModel from './src/models/ProdutoModel.js';
import CategoriaModel from './src/models/CategoriaModel.js';
import ClienteRoutes from './src/routes/ClienteRoutes.js';
import PedidoRoutes from './src/routes/PedidoRoutes.js';
import ItensPedidoRoutes from './src/routes/ItensPedidoRoutes.js';
import FornecedorRoutes from './src/routes/FornecedorRoutes.js';
import ProdutoRoutes from './src/routes/ProdutoRoutes.js';
import CategoriaRoutes from './src/routes/CategoriaRoutes.js';
import criarTabelas from './src/database/Migrations.js';
import AutorizacaoRoutes from './src/routes/AutorizacaoRoutes.js';
import jwt from 'jsonwebtoken';
import cors from 'cors'
import dotenv from 'dotenv';
import PublicRoutes from './src/routes/PublicRoutes.js';
dotenv.config();

// Migration para Criação de Tabelas no Banco
// criarTabelas();

const app = express();
app.use(cors({
    origin: '*',
    methods: '*'
}))

app.use(express.json()); // Liberando Passagem de Dados via Post e Put pelo Body

app.get('/', (request, response) => {
    response.send("Hello Express FDEV009 111c")
})

app.use(AutorizacaoRoutes)
app.use(PublicRoutes)
// MIDDLEWARE - INTERMEDIARIO
app.use(async (req, res, next) => {
    const token = req.headers.token;
    try {
        await jwt.verify(token, process.env.TOKEN_KEY);
        next();
    } catch(e) {
        return res.json({
            message: 'Sem autorização. ' + e
        })
    }
})

app.use(CategoriaRoutes);
app.use(ProdutoRoutes);
app.use(FornecedorRoutes);
app.use(UsuarioRoutes);
app.use(ClienteRoutes);
app.use(PedidoRoutes);
app.use(ItensPedidoRoutes);

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

app.use((error, request, response, next) => {
    if(error) {
        return response.status(500).json({
            message: error
        })
    }
    return response;
})

app.listen(3000, () => {
    console.log("Servidor executando...")
})