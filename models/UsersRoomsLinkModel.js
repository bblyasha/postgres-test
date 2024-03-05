const pgDb = require('pg')
const db = require('../config/db')
const { DataTypes, Sequelize } = require('sequelize')
const UsersModel = require('./UsersModel')
const RoomsModel = require('./RoomsModel')

const Link = db.define(
    'links',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UsersModel,
                key: 'id'
            }
        },
        room_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: RoomsModel,
                key: 'id'
            }
        }
    }
)

module.exports = Link;