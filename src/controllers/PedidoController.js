import PedidoModel from "../models/PedidoModel.js";

const PedidoController = {
    findAll: async (request, response) => {
        const dados = await PedidoModel.findAll()
        return response.json(dados);
    },
    findByPk: async (request, response) => {
        const { id } = request.params;
        const dados = await PedidoModel.findByPk(id)
        return response.json(dados);
    },
    create: async (request, response) => {
        const dados = request.body;
        const resultado = await PedidoModel.create(dados)
        const retorno = {
            mensagem: 'Pedido criado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    update: async (request, response) => {
        const dados = request.body;
        const { id } = request.params;
        const resultado = await UsuarioModel.update(dados, { where: { id: id } })
        const retorno = {
            mensagem: 'Pedido atualizado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    delete: async (request, response) => {
        const { id } = request.params;
        const resultado = await PedidoModel.destroy({ where: { id: id } })
        const retorno = {
            mensagem: 'Pedido deletado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
}

export default PedidoController;
