import { DataTypes } from "sequelize";
import Conexao from "../config/conexao.js";
import CategoriaModel from "./CategoriaModel.js";
import FornecedorModel from "./FornecedorModel.js";

const ProdutoModel = Conexao.define(
    "ProdutoModel",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
            defaultValue: 0.00
        },
        preco_custo: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
            defaultValue: 0.00
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            references: {
                model: CategoriaModel,
                foreignKey: 'id'
            }
        },
        fornedor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: FornecedorModel,
                foreignKey: 'id'
            }
        }
    },
    {
        tableName: 'produtos'
    }
);


export default ProdutoModel;


// CategoriaModel.hasMany(ProdutoModel);
// ProdutoModel.belongsTo(CategoriaModel, {
//   foreignKey: 'categoria_id',
//   as: 'categoria' // <-- esse "as" precisa ser igual ao usado no include
// });