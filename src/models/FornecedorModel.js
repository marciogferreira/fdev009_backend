import { DataTypes } from 'sequelize';
import Conexao from '../config/conexao.js';
const FornecedorModel = Conexao.define(
    // nome do model
    "FornecedorModel",
    // colunas da tabela
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        tableName: 'fornecedores'
    }
)

export default FornecedorModel;