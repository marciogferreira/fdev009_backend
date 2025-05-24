import ItensPedidoModel from "../models/ItensPedidoModel.js";

const ItensPedidoController = {
    findAll: async (request, response) => {
        const dados = await ItensPedidoModel.findAll()
        return response.json(dados);
    },
    findByPk: async (request, response) => {
        const { id } = request.params;
        const dados = await ItensPedidoModel.findByPk(id)
        return response.json(dados);
    },
    create: async (request, response) => {
        const dados = request.body;
        const resultado = await ItensPedidoModel.create(dados)
        const retorno = {
            mensagem: 'Item do Pedido criado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    update: async (request, response) => {
        const dados = request.body;
        const { id } = request.params;
        const resultado = await ItensPedidoModel.update(dados, { where: { id: id } })
        const retorno = {
            mensagem: 'Item do Pedido atualizado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    delete: async (request, response) => {
        const { id } = request.params;
        const resultado = await ItensPedidoModel.destroy({ where: { id: id } })
        const retorno = {
            mensagem: 'Item do Pedido deletado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
}

export default ItensPedidoController;