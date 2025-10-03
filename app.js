const express = require('express');

const userController = require('./controllers/userController')
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get('/', userController.getUsernames)

app.get('/new', userController.createUsernameGet)
app.post('/new', userController.createUsernamePost)







app.listen('8000', ()=>{
    console.log('port 8000')
})