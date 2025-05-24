import ProdutoModel from "../models/ProdutoModel.js";

const ProdutoController = {
    findAll: async (request, response) => {
        const dados = await ProdutoModel.findAll()
        return response.json(dados);
    },
    findByPk: async (request, response) => {
        const { id } = request.params;
        const dados = await ProdutoModel.findByPk(id)
        return response.json(dados);
    },
    create: async (request, response) => {
        const dados = request.body;
        const resultado = await ProdutoModel.create(dados)
        const retorno = {
            mensagem: 'Produto criado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    update: async (request, response) => {
        const dados = request.body;
        const { id } = request.params;
        const resultado = await ProdutoModel.update(dados, { where: { id: id } })
        const retorno = {
            mensagem: 'Produto atualizado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    delete: async (request, response) => {
        const { id } = request.params;
        const resultado = await ProdutoModel.destroy({ where: { id: id } })
        const retorno = {
            mensagem: 'Produto deletado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
}

export default ProdutoController;