const mySQL = require('mysql');

const conn = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajarDB'
});
 
conn.connect((err) => {
    if(err) throw err;
    console.log('mySQL Terkoneksi Bos.....')
});

module.exports();

