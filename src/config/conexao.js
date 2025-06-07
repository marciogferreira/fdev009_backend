import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const Conexao = new Sequelize({
    dialect: process.env.DRIVER,
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

export default Conexao;