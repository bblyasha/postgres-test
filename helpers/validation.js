const { query, body, param, validationResult} = require('express-validator');

function validationErrors (req,res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
}

const addUser = [
    body('name')
          .notEmpty()
          .withMessage('Поле name является обязательным')
          .isString()
          .withMessage('Поле name должно быть строкой')
          .isLength({ min: 2 })
          .withMessage('Поле name должно содержать не менее 2 символов'),

    body('email')
          .notEmpty()
          .withMessage('Поле email является обязательным')
          .isString()
          .withMessage('Поле email должно быть строкой')
          .isLength({ min: 7 })
          .withMessage('Поле email должно содержать не менее 7 символов')
]

const validateData = [
    body('name')
            .optional().isString().withMessage('Поле name должно быть строкой'),
    body('email').optional().isString().withMessage('Поле email должно быть строкой'),
    param('id')
      .notEmpty()
      .withMessage('Поле id является обязательным')
      .isString()
      .withMessage('Поле id должно быть строкой')
]

const idMust = [
    param('id')
      .notEmpty()
      .withMessage('Поле id является обязательным')
      .isString()
      .withMessage('Поле id должно быть строкой')
]

module.exports = {
    idMust,
    validateData,
    addUser,
    validationErrors
}