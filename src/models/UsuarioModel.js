import { DataTypes } from 'sequelize'
import Conexao from '../config/conexao.js'

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

export default UsuarioModel;
