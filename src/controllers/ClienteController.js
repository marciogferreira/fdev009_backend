import ClienteModel from "../models/ClienteModel.js";

const ClienteController = {
    findAll: async (request, response) => {
        const dados = await ClienteModel.findAll()
        return response.json(dados);
    },
    findByPk: async (request, response) => {
        const { id } = request.params;
        const dados = await ClienteModel.findByPk(id)
        return response.json(dados);
    },
    create: async (request, response) => {
        const dados = request.body;
        const resultado = await ClienteModel.create(dados)
        const retorno = {
            mensagem: 'Cliente criado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    update: async (request, response) => {
        const dados = request.body;
        const { id } = request.params;
        const resultado = await ClienteModel.update(dados, { where: { id: id } })
        const retorno = {
            mensagem: 'Cliente atualizado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    delete: async (request, response) => {
        const { id } = request.params;
        const resultado = await UsuarioModel.destroy({ where: { id: id } })
        const retorno = {
            mensagem: 'Cliente deletado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
}

export default ClienteController;