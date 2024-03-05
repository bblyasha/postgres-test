// config/db.js
const Sequelize = require('sequelize')
// console.log(process.env.DB_USER);
// console.log(process.env.PASSWORD);
// console.log(process.env.DIALECT)
const sequelize = new Sequelize(
    'testapp',
    'postgres',
    'bblyasha',
    {
      host: process.env.HOST,
      dialect: 'postgres',
    }
  );


module.exports = sequelize


// const {Client} = require('pg')

// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "bblyasha",
//     database: "postgres"
// })

// module.exports = client