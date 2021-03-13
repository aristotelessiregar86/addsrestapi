const mySQL = require('mysql');

const conn = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajarDB'
})

