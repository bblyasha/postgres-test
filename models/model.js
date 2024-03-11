const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const UsersModel = require('./UsersModel')
const PhoneNumbersModel = require('./PhoneNumbersModel')
const OperatorModel = require('./OperatorModel')
const UsersRoomsLinkModel = require('./UsersRoomsLinkModel')
const RoomTypeModel = require('./RoomTypeModel')
const RoomsModel = require('./RoomsModel')
const BookingModel = require('./BookingModel')


// RoomTypeModel.sync({ force: true }).then(() => {
//     console.log('RoomTypeModel created...');
//     return UsersModel.sync({ force: true });
// }).then(() => {
//     console.log('UsersModel created...');
//     return RoomsModel.sync({ force: true });
// }).then(() => {
//     console.log('RoomsModel created...');
//     return UsersRoomsLinkModel.sync({ force: true });
// }).then(() => {
//     console.log('UsersRoomsLinkModel created...');
//     return OperatorModel.sync({ force: true })
// }).then(() => {
//     console.log('OperatorModel created...');
//     return BookingModel.sync({ force: true})
// }).then(() =>  {
//     console.log('BookingModel created...')
//     return PhoneNumbersModel.sync({ force: true})
// }).then(() => {
//     console.log('PhoneNumbersModel created...')
// })
// .catch(error => {
//     console.error('Error during synchronization:', error);
// });
// const syncDatabase = async () => {
//     try {
//       await sequelize.sync({ force: true });
//       console.log('⚡️ Tables synced');
//     } catch (error) {
//       console.error('Error syncing tables:', error);
//     }
//   };
  
// syncDatabase();

UsersModel.hasMany(PhoneNumbersModel, { foreignKey: 'user_id'})
PhoneNumbersModel.belongsTo(UsersModel, { foreignKey: 'user_id'})
OperatorModel.hasMany(PhoneNumbersModel, { foreignKey: 'operator_id'})
PhoneNumbersModel.belongsTo(OperatorModel, {foreignKey: 'operator_id'})
RoomTypeModel.hasMany(RoomsModel, {foreignKey: 'room_type_id'})
RoomsModel.belongsTo(RoomTypeModel, {foreignKey: 'room_type_id'})
UsersModel.belongsToMany(RoomsModel, {through: 'UsersRoomsLink'})
RoomsModel.belongsToMany(UsersModel, {through: 'UsersRoomsLink'})
UsersRoomsLinkModel.hasMany(BookingModel, {foreignKey: 'users_rooms_id'})
BookingModel.belongsTo(UsersRoomsLinkModel, {foreignKey: 'users_rooms_id'})


module.exports = {UsersModel, PhoneNumbersModel, OperatorModel, UsersRoomsLinkModel, 
    RoomTypeModel, RoomsModel, BookingModel}