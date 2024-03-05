const router = require('express').Router();
const UserController = require('../controllers/usersContollers');
const {idMust, addUser, validateData} = require('../helpers/validation')


/**
 * @swagger
 * /api/users/get-user:
 *  get:
 *      summary: Get all users from databse
 *      tags:
 *        - Users
 *      description: Returns users array
 *      responses:
 *        200:
 *          description: Successful response
 */

router.get('/get-user', UserController.getAllUsers);

/**
 * @swagger
 * /api/users/get-user/{id}:
 *  get:
 *      summary: Get user by id
 *      tags:
 *        - Users
 *      description: Returns user with current id
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID.
 *      responses:
 *        200:
 *          description: Successful response
 *        400:
 *          description: Bad request.
 */

router.get('/get-user/:id', idMust, UserController.getUserById)

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *        - Users
 *     description: Creating a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"name":"Natalya","email": "natalya@mail.ru"}
 *     responses:
 *       200:
 *         description: Todo has been successfully created.
 *       400:
 *         description: Bad request.
 */

router.post('/', addUser, UserController.addUser)

/**
 * @swagger
 * /api/users/{id}:
 *   patch:
 *     summary: Updates user information with id = {id}
 *     tags:
 *        - Users
 *     description: Updates user information with id = {id}
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"name": "Kolya"}
 *     responses:
 *       200:
 *         description: Task data has been successfully updated.
 *       400:
 *         description: Bad request.
 */


router.patch('/:id', validateData, UserController.updateUser)

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user with {id}
 *     tags:
 *        - Users
 *     description: Deletes user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID.
 *     responses:
 *       200:
 *         description: User has been successfully deleted.
 *       400:
 *         description: Bad request.
 */

router.delete('/:id', idMust, UserController.deleteUser)


module.exports = router;
