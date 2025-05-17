import Conexao from "../config/conexao.js";
import UsuarioModel from "../models/UsuarioModel.js";
import CategoriaModel from "../models/CategoriaModel.js";
import FornecedorModel from "../models/FornecedorModel.js";
import ProdutoModel from "../models/ProdutoModel.js";

async function generateSeeder() {
    await UsuarioModel.create({
        nome: 'admin',
        login: 'admin',
        senha: '123123',
        permissao: '1'
    })

    await CategoriaModel.create({
        nome: 'Categoria Teste'
    })
}

generateSeeder();