const db = require('../config/db')
const { Sequelize } = require('sequelize')
const UsersModel = require('./UsersModel')
const OperatorModel = require('./OperatorModel')

const PhoneNumber = db.define(
    'numbers',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        phone_number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        operator_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: OperatorModel,
                key: 'id'
            }
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UsersModel,
                key: 'id'
            }
        }
    }
)

module.exports = PhoneNumber;