const {UsersModel, PhoneNumbersModel, OperatorModel} = require('../models/model')

async function seedersUsersIntoFull () {
    try {
        const usersInfo = await UsersModel.bulkCreate([
            {
                name: 'Natalya',
                email: 'natalya@gmail.com'
            },
            {
                name: 'Tatyana',
                email: 'tatyana@gmail.com'
            },
            {
                name: 'Ivan',
                email: 'ivan@gmail.com'
            },
            {
                name: 'Tolya',
                email: 'tolya@gmail.com'
            }
        ])

        const operators = await OperatorModel.bulkCreate([
            {
                operator_type: 'A1'
            },
            {
                operator_type: 'life'
            },
            {
                operator_type: 'MTC'
            }

        ],
        { raw: true})

        const phoneNumbers = await PhoneNumbersModel.bulkCreate([
            {
                phone_number: '3584521',
                operator_id: operators[0].id,
                user_id: usersInfo[0].id
            },
            {
                phone_number: '5782221',
                operator_id: operators[1].id,
                user_id: usersInfo[1].id
            },
            {
                phone_number: '8741236',
                operator_id: operators[2].id,
                user_id: usersInfo[2].id
            },
            {
                phone_number: '1478965',
                operator_id: operators[0].id,
                user_id: usersInfo[3].id
            }
        ],
        { raw: true})
        console.log('Тестовые данные успешно заполнены')
    } catch (error) {
        console.log('Произошла ошибка при добавлении тестовых данных', error)
    }
}
seedersUsersIntoFull()