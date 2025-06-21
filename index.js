import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import PublicRoutes from './src/routes/PublicRoutes.js';
import PrivateRoutes from './src/routes/PrivateRoutes.js';
import criarTabelas from './src/database/Migrations.js';
import AutorizacaoRoutes from './src/routes/AutorizacaoRoutes.js';
dotenv.config();

criarTabelas();

const app = express();
app.use(cors({ origin: '*', methods: '*' }))

app.use(express.json()); // Liberando Passagem de Dados via Post e Put pelo Body

app.get('/', (request, response) => response.send("Hello Express FDEV009"))
PublicRoutes.use(AutorizacaoRoutes)
app.use(PublicRoutes)
app.use(PrivateRoutes)

const PORT =  process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor executando...")
})