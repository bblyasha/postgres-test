const {UsersModel} = require('../models/model')

class UserService {
    #COLLECTION = 'users'
    async getUsers() {
    try {
        const users = await UsersModel.findAll();
        return users
    } catch (error) {
        console.error('Error getting users:', error);
    }
  };
  
    async getUsersById(id) {
    try {
        const user = await UsersModel.findByPk(id);
        return user
    } catch (error) {
        console.error('Error getting user:', error);
    }
  };

    async createUser(info) {
        const newUser = await UsersModel.create(info)    
        return newUser.dataValues
    }

    async updateUser(id, updatedData) {
        try {
            await UsersModel.update(updatedData, { where: { id }})
        } catch (error) {
            console.log('Error updating user:', error)
        }
    }
    
    async deleteUser (id) {
        try {
            const deletedUser = await UsersModel.destroy({ where: { id } });
            return deletedUser
        } catch (error) {
            console.error('Error deleting user:', error);
        }
  };
}

module.exports = new UserService