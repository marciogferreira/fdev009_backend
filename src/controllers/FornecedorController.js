import FornecedorModel from "../models/FornecedorModel.js";

const FornecedorController = {
    findAll: async (request, response) => {
        const dados = await FornecedorModel.findAll()
        return response.json(dados);
    },
    findByPk: async (request, response) => {
        const { id } = request.params;
        const dados = await FornecedorModel.findByPk(id)
        return response.json(dados);
    },
    create: async (request, response) => {
        const dados = request.body;
        const resultado = await FornecedorModel.create(dados)
        const retorno = {
            mensagem: 'Fornecedor criado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    update: async (request, response) => {
        const dados = request.body;
        const { id } = request.params;
        const resultado = await FornecedorModel.update(dados, { where: { id: id } })
        const retorno = {
            mensagem: 'Fornecedor atualizado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    delete: async (request, response) => {
        const { id } = request.params;
        const resultado = await UsuarioModel.destroy({ where: { id: id } })
        const retorno = {
            mensagem: 'Fornecedor deletado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
}

export default FornecedorController;