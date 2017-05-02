const mysql  = require('mysql');

count = (rows) => {
  return rows.length;
}

exports.selectTicker = (dbconn) => {

  dbconn.query('SELECT * FROM VSecurity LIMIT 100',function(err, records){
    if(err) throw err;

    console.log('Querying selectTicker...\n');
    console.log(records);
    console.log('\n');
  });
}

exports.selectFundamentals = (dbconn) => {

  dbconn.query('SELECT * FROM Fundamentals LIMIT 1000', function(err, records){
    if(err) throw err;

    console.log('Querying selectFundamentals...\n');
    console.log(count(records));
    console.log('\n');
    console.log(JSON.stringify(records));
    //console.log(records);
    console.log('\n');
  });
}
exports.stockFundamentals = (dbconn, ticker) => {

  dbconn.query('SELECT * FROM Fundamentals WHERE tickerSymbol = ? LIMIT 100', ticker, function(err, records){
    if(err) throw err;

    console.log('Fundamentals for $'+ ticker + ':\n');
    console.log('Records: '+ count(records));
    console.log('\n');
    console.log(JSON.stringify(records));
    //console.log(records);
    console.log('\n');
  });
}


exports.stockPrices = (dbconn, ticker) => {

  dbconn.query('SELECT * FROM Prices WHERE tickerSymbol = ? LIMIT 5000', ticker,function(err, records){
    if(err) throw err;

    console.log('Prices for $'+ ticker + ':\n');

    console.log('\n');
    console.log(JSON.stringify(records));
    console.log('\n');
    console.log('Records: '+ count(records));
  });
}
