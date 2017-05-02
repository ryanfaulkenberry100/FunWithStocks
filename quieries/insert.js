const mysql  = require('mysql');
exports.stock = (dbconn) => {
  const record = { firstname: 'Rahul', lastname: 'Kumar', email: 'abc@domain.com' };

  dbconn.query('INSERT INTO users SET ?', record, function(err,res){
    if(err) throw err;

    console.log('Last record insert id:', res.insertId);
  });
};
