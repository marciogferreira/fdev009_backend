import express from 'express'
import UsuarioController from '../controllers/UsuarioController.js';

const UsuarioRoutes = express.Router();

UsuarioRoutes.get('/usuarios', UsuarioController.findAll);
UsuarioRoutes.get('/usuarios/:id', UsuarioController.findByPk);
UsuarioRoutes.post('/usuarios', UsuarioController.create);
UsuarioRoutes.put('/usuarios/:id', UsuarioController.update);
UsuarioRoutes.delete('/usuarios/:id', UsuarioController.delete);

export default UsuarioRoutes