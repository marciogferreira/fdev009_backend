import { DataTypes } from 'sequelize'
import Conexao from '../config/conexao.js'

const ClienteModel = Conexao.define(
    "ClienteModel",
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
        whatsapp: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'clientes'
    }
)
export default ClienteModel;