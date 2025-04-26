const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js')

const UsuarioModel = Conexao.define(
    "UsuarioModel",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permissao: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'usuarios'
    }
)

module.exports = UsuarioModel;

const dados = {
    nome: "test",
    login: 'test',
    senha: 'tesxt',
    permissao: "1"
}
// const dadosNoBanco = UsuarioModel.create(dados);
// UsuarioModel.update(dados, { id: 1 })
// UsuarioModel.findAll({ attributes: ['nome'] })
// UsuarioModel.delete({ id: 1 })