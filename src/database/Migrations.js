import Conexao from "../config/conexao.js";
import UsuarioModel from "../models/UsuarioModel.js";
import CategoriaModel from "../models/CategoriaModel.js";

Conexao.sync({ force: false });
