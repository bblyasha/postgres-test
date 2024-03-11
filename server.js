const express = require('express')
const app = express()
require('dotenv').config()
const sequelize = require('./config/db')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const router = require('./routes/index')

app.use(express.json())
app.use('/api', router)

const swaggerOptions = {
  swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title:  "Users API",
        description: "API for getting, creating, updating, deleting users in database"
      }
  },
  apis: ["./routes/usersRoutes.js"]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerDocs))


const PORT = process.env.PORT || 3005
// app.listen(PORT, () => {
//     console.log(`Server started at ${PORT}`)
// })
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('DB connected!')
//   })
//   .catch(err => console.log('error: ', err.message))

sequelize
 .authenticate()
 .then(() => {
   console.log('DB connected!');
   app.listen(PORT, () => {
     console.log(`Server started at ${PORT}`);
   });
 })
 .catch(err => console.log('Error connecting to the database: ', err.message));



