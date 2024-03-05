const UserService = require('../services/usersServices')
const {UsersModel} = require('../models/model');
const { use } = require('../routes');
const usersServices = require('../services/usersServices');
const {validationErrors} = require('../helpers/validation')

class UserController {
    async getAllUsers(req,res) {
        try {
            const users = await UserService.getUsers()
            res.send(users)
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
    async getUserById(req,res) {
        try {
            validationErrors(req,res)
            const userId = req.params.id
            const user = await UserService.getUsersById(userId)
            res.send(user)
        } catch (error) {
            res.status(500).send('Internal Server Error');
        } 
    }

    async addUser(req,res) {
        try {
            validationErrors(req,res)
            const userData = req.body
            const user = usersServices.createUser(userData)
            res.status(200).send('User was created')
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }    
    async updateUser(req,res) {
        try {
            validationErrors(req,res)
            const userId = req.params.id
            const newData = req.body
            const user = await UserService.updateUser(userId, newData)
            res.status(200).send('User was updated')
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
    async deleteUser(req,res) {
        try {
            validationErrors(req,res)
            const userId = req.params.id
            const user = await UserService.deleteUser(userId)
            res.status(200).send('User was deleted')
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new UserController