const mysql  = require('mysql');
exports.stock = (dbconn) => {
  dbconn.query('', function(err, result){
    if(err) throw err;

    console.log('Table created');
  });
};
