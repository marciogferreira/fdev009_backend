import express from 'express'
import FornecedorController from '../controllers/FornecedorController.js';

const FornecedorRoutes = express.Router();

FornecedorRoutes.get('/Fornecedors', FornecedorController.findAll);
FornecedorRoutes.get('/Fornecedors/:id', FornecedorController.findByPk);
FornecedorRoutes.post('/Fornecedors', FornecedorController.create);
FornecedorRoutes.put('/Fornecedors/:id', FornecedorController.update);
FornecedorRoutes.delete('/Fornecedors/:id', FornecedorController.delete);

export default FornecedorRoutes