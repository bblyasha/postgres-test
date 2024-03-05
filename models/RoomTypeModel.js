const pgDb = require('pg')
const db = require('../config/db')
const { Sequelize } = require('sequelize')

const RoomType = db.define(
    'types',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        room_type: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)

module.exports = RoomType;