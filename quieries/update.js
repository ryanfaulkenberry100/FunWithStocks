const mysql  = require('mysql');
exports.stock = (dbconn) => {
  dbconn.query('SELECT users SET email = ? WHERE id = ?', ['new@domain.com', 6], function(err, result){
    if(err) throw err;

    console.log('Record Updated ' + result.changedRows + ' rows');
  });
};
