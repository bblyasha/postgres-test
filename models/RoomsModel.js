const pgDb = require('pg')
const db = require('../config/db')
const { Sequelize } = require('sequelize')
const RoomTypeModel = require('./RoomTypeModel')

const Room = db.define(
    'rooms',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        room_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        room_type_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: RoomTypeModel,
                key: 'id'
            }
        }
    }
)

module.exports = Room;