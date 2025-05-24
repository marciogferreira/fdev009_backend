import { DataTypes } from 'sequelize'
import Conexao from '../config/conexao.js'

const PedidoModel = Conexao.define(
    "PedidoModel",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pagamento: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'pedidos'
    }
)
export default PedidoModel;