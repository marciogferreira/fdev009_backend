import { Sequelize } from 'sequelize';

const Conexao = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'PE07Fdro@',
    database: 'fdev009'
})


// const Conexao = new Sequelize({
//     dialect: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'PE07Fdro',
//     database: 'fdev009'
// })

export default Conexao;