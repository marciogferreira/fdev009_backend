import { Sequelize } from 'sequelize';

const Conexao = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'fdev009'
})

export default Conexao;