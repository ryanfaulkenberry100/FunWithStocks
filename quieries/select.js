const mysql  = require('mysql');
exports.stock = (dbconn) => {
  dbconn.query('SELECT * FROM Fundamentals',function(err, records){
    if(err) throw err;

    console.log('Data received from Db:n');
    console.log(records);
  });
};
