import express from 'express'
import ItensPedidoController from '../controllers/ItensPedidoController.js';

const ItensPedidoRoutes = express.Router();

ItensPedidoRoutes.get('/itenspedido', ItensPedidoController.findAll);
ItensPedidoRoutes.get('/itenspedido/:id', ItensPedidoController.findByPk);
ItensPedidoRoutes.post('/itenspedido', ItensPedidoController.create);
ItensPedidoRoutes.put('/itenspedido/:id', ItensPedidoController.update);
ItensPedidoRoutes.delete('/itenspedido/:id', ItensPedidoController.delete);

export default ItensPedidoRoutes