const pgDb = require('pg')
const db = require('../config/db')
const { Sequelize } = require('sequelize')

const Operator = db.define(
    'operators',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        operator_type: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)

module.exports = Operator;