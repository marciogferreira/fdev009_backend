import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js';

const ProdutoRoutes = express.Router();

ProdutoRoutes.get('/Produtos', ProdutoController.findAll);
ProdutoRoutes.get('/Produtos/:id', ProdutoController.findByPk);
ProdutoRoutes.post('/Produtos', ProdutoController.create);
ProdutoRoutes.put('/Produtos/:id', ProdutoController.update);
ProdutoRoutes.delete('/Produtos/:id', ProdutoController.delete);

export default ProdutoRoutes