const mysql  = require('mysql');

exports.deleteFundamentals = (dbconn) => {

  dbconn.query('SELECT * FROM Fundamentals WHERE ForYear != ?', 2016,function(err, records){
    if(err) throw err;

    console.log('Querying selectFundamentals...\n');
    console.log(count(records));
    console.log('\n');
    console.log(JSON.stringify(records));
    //console.log(records);
    console.log('\n');
  });
}
