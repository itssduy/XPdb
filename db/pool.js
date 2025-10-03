const { Pool } = require ('pg');

//All of the following properties should be read from environment variables
module.exports = new Pool({
    host: 'localhost', // wherever the db is hosted
    user: 'duy',
    database: 'top_users',
    password: '',
    port: 5432 // default port
})
