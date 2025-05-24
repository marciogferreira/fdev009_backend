import express from 'express'
import CategoriaController from '../controllers/CategoriaController.js';

const CategoriaRoutes = express.Router();

CategoriaRoutes.get('/Categorias', CategoriaController.findAll);
CategoriaRoutes.get('/Categorias/:id', CategoriaController.findByPk);
CategoriaRoutes.post('/Categorias', CategoriaController.create);
CategoriaRoutes.put('/Categorias/:id', CategoriaController.update);
CategoriaRoutes.delete('/Categorias/:id', CategoriaController.delete);

export default CategoriaRoutes