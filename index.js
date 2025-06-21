import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import PublicRoutes from './src/routes/PublicRoutes.js';
import PrivateRoutes from './src/routes/PrivateRoutes.js';
dotenv.config();

const app = express();
app.use(cors({ origin: '*', methods: '*' }))

app.use(express.json()); // Liberando Passagem de Dados via Post e Put pelo Body
app.get('/', (request, response) => response.send("Hello Express FDEV009"))
app.use(PublicRoutes)
app.use(PrivateRoutes)

app.listen(3000, () => {
    console.log("Servidor executando...")
})