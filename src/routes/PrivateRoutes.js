import express from 'express'
import CategoriaRoutes from './CategoriaRoutes.js';
import ProdutoRoutes from './ProdutoRoutes.js';
import FornecedorRoutes from './FornecedorRoutes.js';
import UsuarioRoutes from './UsuarioRoutes.js';
import ClienteRoutes from './ClienteRoutes.js';
import PedidoRoutes from './PedidoRoutes.js';
import ItensPedidoRoutes from './ItensPedidoRoutes.js';
import AuthMiddleware from '../middleware/AuthMiddleware.js';

const PrivateRoutes = express.Router()

PrivateRoutes.use(AuthMiddleware.handle);
PrivateRoutes.use(CategoriaRoutes);
PrivateRoutes.use(ProdutoRoutes);
PrivateRoutes.use(FornecedorRoutes);
PrivateRoutes.use(UsuarioRoutes);
PrivateRoutes.use(ClienteRoutes);
PrivateRoutes.use(PedidoRoutes);
PrivateRoutes.use(ItensPedidoRoutes);

export default PrivateRoutes;