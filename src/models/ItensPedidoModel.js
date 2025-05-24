import { DataTypes } from 'sequelize'
import Conexao from '../config/conexao.js'

const ItensPedidoModel = Conexao.define(
    "ItensPedidoModel",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pedido_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        produto_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valorunitario: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'Itens_Pedidos'
    }
)
export default ItensPedidoModel;