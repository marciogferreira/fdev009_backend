import express from 'express'
import ClienteController from '../controllers/ClienteController.js';

const ClienteRoutes = express.Router();

ClienteRoutes.get('/clientes', ClienteController.findAll);
ClienteRoutes.get('/clientes/:id', ClienteController.findByPk);
ClienteRoutes.post('/clientes', ClienteController.create);
ClienteRoutes.put('/clientes/:id', ClienteController.update);
ClienteRoutes.delete('/clientes/:id', ClienteController.delete);

export default ClienteRoutes