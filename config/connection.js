var mysql = require('mysql');
var connection;

if (proccess.env.JAWSDB_URL){
    connection = mysql.createConnection(proccess.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '12345678',
        database: 'burger_db'
    });
}

connection.connect(function (err) {
    if (err){
        console.error('Error connectiong: ' + err.stack);
        return;
    }
    console.log('Connected as id: ' + connection.threadId);
});

module.exports = connection;