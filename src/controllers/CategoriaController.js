import CategoriaModel from "../models/CategoriaModel.js";

const CategoriaController = {
    findAll: async (request, response) => {
        const dados = await CategoriaModel.findAll()
        return response.json(dados);
    },
    findByPk: async (request, response) => {
        const { id } = request.params;
        const dados = await CategoriaModel.findByPk(id)
        return response.json(dados);
    },
    create: async (request, response) => {
        const dados = request.body;
        const resultado = await CategoriaModel.create(dados)
        const retorno = {
            mensagem: 'Categoria criado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    update: async (request, response) => {
        const dados = request.body;
        const { id } = request.params;
        const resultado = await CategoriaModel.update(dados, { where: { id: id } })
        const retorno = {
            mensagem: 'Categoria atualizada com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    delete: async (request, response) => {
        const { id } = request.params;
        const resultado = await CategoriaModel.destroy({ where: { id: id } })
        const retorno = {
            mensagem: 'Categoria deletado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
}

export default CategoriaController;
