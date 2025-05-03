import { DataTypes } from 'sequelize';
import Conexao from '../config/conexao.js';
const CategoriaModel = Conexao.define(
    // nome do model
    "CategoriaModel",
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
        tableName: 'categorias'
    }
)

export default CategoriaModel;