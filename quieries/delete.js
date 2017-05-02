const mysql  = require('mysql');
exports.stock = (dbconn) => {
  dbconn.query('DELETE FROM users WHERE id = ?', [6], function(err, result){
    if(err) throw err;

    console.log('Record Updated ' + result.affectedRows + ' rows');
  });
};
