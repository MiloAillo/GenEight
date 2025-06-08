const mysql = require('mysql2')

module.exports = mysql.createConnection({
    host : 'localhost',
    user : 'mischiko',
    password : 'yangtautauaja',
    database : 'geneight'
})