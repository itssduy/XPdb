const express = require('express');
const userController = require('./controllers/userController')
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));


app.get('/', userController.getUsernames)

app.get('/new', userController.createUsernameGet)
app.post('/new', userController.createUsernamePost)


app.get('/:search', userController.searchUsernameGET);






app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})