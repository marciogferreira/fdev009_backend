import Conexao from "../config/conexao.js";
import UsuarioModel from "../models/UsuarioModel.js";
import CategoriaModel from "../models/CategoriaModel.js";
import FornecedorModel from "../models/FornecedorModel.js";
import ProdutoModel from "../models/ProdutoModel.js";
import ClienteModel from "../models/ClienteModel.js";
import PedidoModel from "../models/PedidoModel.js";
import ItensPedidoModel from "../models/ItensPedidoModel.js";

async function criarDadosIniciais() {
  try {
    // Fornecedores
    const fornecedores = [
      { nome: 'Pixel' },
      { nome: 'Iwtraining' }
    ];

    for (const fornecedor of fornecedores) {
      const existente = await FornecedorModel.findOne({ where: { nome: fornecedor.nome } });
      if (!existente) {
        await FornecedorModel.create(fornecedor);
        console.log(`✅ Fornecedor (${fornecedor.nome}) criado!`);
      } else {
        console.log(`⚠️ Fornecedor (${fornecedor.nome}) já existe.`);
      }
    }

    // Categorias
    const categorias = [
      { id: 1, nome: "Lanches" },
      { id: 2, nome: "Roupas" },
      { id: 3, nome: "Acessórios" },
      { id: 4, nome: "Cama, mesa e banho" }
    ];

    for (const cat of categorias) {
      const existe = await CategoriaModel.findByPk(cat.id);
      if (!existe) {
        await CategoriaModel.create(cat);
      }
    }

    // Produtos
    const produtos = [
      {
        nome: "hambúrguer",
        image: "produto1.png",
        descricao: "hambúrguer artesanal",
        preco: 6.50,
        preco_custo: 3.25,
        quantidade: 30,
        categoria_id: 1,
        fornecedor_id: 1
      },
      {
        nome: "blusa unissex",
        image: "produto2.png",
        descricao: "Blusa preta",
        preco: 50.00,
        preco_custo: 25.00,
        quantidade: 1,
        categoria_id: 2,
        fornecedor_id: 2
      },
      {
        nome: "fone de ouvido",
        image: "produto3.png",
        descricao: "Fones",
        preco: 15.00,
        preco_custo: 10.00,
        quantidade: 0,
        categoria_id: 3,
        fornecedor_id: 2
      },
      {
        nome: "toalha",
        image: "produto3.png",
        descricao: "Toalha de banho",
        preco: 45.00,
        preco_custo: 25.00,
        quantidade: 0,
        categoria_id: 4,
        fornecedor_id: 1
      }
    ];

    for (const produto of produtos) {
      const existente = await ProdutoModel.findOne({ where: { nome: produto.nome } });
      if (!existente) {
        await ProdutoModel.create(produto);
        console.log(`✅ Produto '${produto.nome}' inserido!`);
      }
    }

    // Usuários admin
    const usuarios = [
      {
        id: 1,
        nome: "Pixel",
        login: "Pixel1",
        senha: "123", // ⚠️ Use bcrypt em produção
        permissao: 1
      },
      {
        id: 2,
        nome: "Iwtraining",
        login: "Iwtraining2",
        senha: "1234", // ⚠️ Use bcrypt em produção
        permissao: 2
      }
    ];

    for (const usuario of usuarios) {
      const usuarioExistente = await UsuarioModel.findByPk(usuario.id);
      if (!usuarioExistente) {
        await UsuarioModel.create(usuario);
        console.log(`✅ Usuário '${usuario.nome}' criado!`);
      } else {
        await UsuarioModel.update(usuario, { where: { id: usuario.id } });
        console.log(`🛠️ Usuário '${usuario.nome}' atualizado!`);
      }
    }

  } catch (e) {
    console.error("❌ Erro ao criar dados:", e);
  } finally {
    await Conexao.close();
  }
}

async function criarTabelas() {
  // ⚠️ ATENÇÃO: force: true apaga e recria todas as tabelas!
  await Conexao.sync({ force: false });
  criarDadosIniciais()
}

export default criarTabelas;