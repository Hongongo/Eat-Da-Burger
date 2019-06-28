var connection = require('./connection');

var orm = {
    selectAll: function (cb) {
        console.log('****** ORM select ******');
        var queryAll = 'SELECT * FROM burgers;';
        connection.query(queryAll, function (err, result) {
            if (err){throw err;}
            cb(result);
        });
    },
    insertOne: function(burger_name, cb){
        console.log('****** ORM INSERT ******');
        var queryInsert = 'INSERT INTO burgers(burger_name, devoured) VALUES(?, false);';
        connection.query(queryInsert, [burger_name], function (err, result) {
            if (err){throw err;}
            cb(result);
        });
    },
    updateOne: function (tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
        console.log('****** ORM update ******');
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal],
            function (err, res) {
                if (err){throw err;}
                cb(res);
            });
    }
};

module.exports = orm;