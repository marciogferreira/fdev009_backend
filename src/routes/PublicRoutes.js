import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js';
import CategoriaController from '../controllers/CategoriaController.js';
import AutorizacaoRoutes from '../routes/AutorizacaoRoutes.js';

const PublicRoutes = express.Router()

PublicRoutes.use(AutorizacaoRoutes)
PublicRoutes.get('/public/produtos', ProdutoController.findAll);
PublicRoutes.get('/public/categorias', CategoriaController.findAll);

export default PublicRoutes;