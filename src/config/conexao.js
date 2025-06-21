import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const Conexao = new Sequelize({
    dialect: process.env.DRIVER,
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB
})

export default Conexao;