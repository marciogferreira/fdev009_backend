import express from 'express'
import PedidoController from '../controllers/PedidoController.js';

const PedidoRoutes = express.Router();

PedidoRoutes.get('/pedidos', PedidoController.findAll);
PedidoRoutes.get('/pedidos/:id', PedidoController.findByPk);
PedidoRoutes.post('/pedidos', PedidoController.create);
PedidoRoutes.put('/pedidos/:id', PedidoController.update);
PedidoRoutes.delete('/pedidos/:id', PedidoController.delete);

export default PedidoRoutes