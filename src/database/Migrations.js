import Conexao from "../config/conexao.js";
import UsuarioModel from "../models/UsuarioModel.js";
import CategoriaModel from "../models/CategoriaModel.js";
import FornecedorModel from "../models/FornecedorModel.js";
import ProdutoModel from "../models/ProdutoModel.js";
import ClienteModel from "../models/ClienteModel.js";
import PedidoModel from "../models/PedidoModel.js";
import ItnesPedidoModel from "../models/ItensPedidoModel.js";

Conexao.sync({ force: false });
//kardosh