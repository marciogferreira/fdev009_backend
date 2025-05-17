import UsuarioModel from "../models/UsuarioModel.js";

const UsuarioController = {
    findAll: async (request, response) => {
        const dados = await UsuarioModel.findAll()
        return response.json(dados);
    },
    findByPk: async (request, response) => {
        const { id } = request.params;
        const dados = await UsuarioModel.findByPk(id)
        return response.json(dados);
    },
    create: async (request, response) => {
        const dados = request.body;
        const resultado = await UsuarioModel.create(dados)
        const retorno = {
            mensagem: 'Usuário criado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    update: async (request, response) => {
        const dados = request.body;
        const { id } = request.params;
        const resultado = await UsuarioModel.update(dados, { where: { id: id } })
        const retorno = {
            mensagem: 'Usuário atualizado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
    delete: async (request, response) => {
        const { id } = request.params;
        const resultado = await UsuarioModel.destroy({ where: { id: id } })
        const retorno = {
            mensagem: 'Usuário deletado com sucesso.',
            data: resultado
        }
        return response.json(retorno);
    },
}

export default UsuarioController;
