const db = require('../config/db')
const { Sequelize } = require('sequelize')
const UsersRoomsLinkModel = require('./UsersRoomsLinkModel')

const Booking = db.define(
    'bookings',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false  
        },
        users_rooms_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UsersRoomsLinkModel,
                key: 'id'
            }
        }
    }
)

module.exports = Booking;