import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const Conexao = new Sequelize({
    dialect: process.env.DRIVER || 'posgres',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 5432,
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB || '123456',
    database: process.env.DATABASE_DB || 'fdev009'
})

export default Conexao;