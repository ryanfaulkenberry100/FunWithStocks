const mysql  = require('mysql');

count = (rows) => {
  return rows.length;
}

exports.selectTicker = (dbconn) => {

  dbconn.query('SELECT * FROM VSecurity LIMIT 500',function(err, records){
    if(err) throw err;

    console.log('Querying selectTicker...\n');
    console.log(records);
    console.log('\n');
  });
};

exports.selectFundamentalsYear = (dbconn, year) => {

  dbconn.query('SELECT * FROM Fundamentals WHERE ForYear= ? LIMIT 1000', year,function(err, records){
    if(err) throw err;

    console.log('Querying selectFundamentals...\n');
    console.log('\n');
    console.log(JSON.stringify(records));
    //console.log(records);
    console.log('\n');
    console.log(count(records));
  });
}

exports.selectAllStocks = (dbconn) => {

  dbconn.query('SELECT * FROM Fundamentals LIMIT 10000', function(err, records){
    if(err) throw err;

    console.log('Querying All Stocks...\n');
    console.log('\n');
    console.log(JSON.stringify(records));
    //console.log(records);
    console.log('\n');
    console.log(count(records));
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

exports.stockSecurities = (dbconn, ticker) => {

  dbconn.query('SELECT * FROM Securities WHERE tickerSymbol = ? LIMIT 2', ticker, function(err, records){
    if(err) throw err;

    console.log('Securities for $'+ ticker + ':\n');
    console.log('Records: '+ count(records));
    console.log('\n');
    console.log(JSON.stringify(records));
    //console.log(records);
    console.log('\n');
  });
}

exports.stockSecuritiesBySector = (dbconn, sector) => {

  dbconn.query('SELECT * FROM Securities WHERE Sector = ? LIMIT 200', sector, function(err, records){
    if(err) throw err;

    console.log('Securities for '+ sector + ':\n');
    console.log('Records: '+ count(records));
    console.log('\n');
    console.log(JSON.stringify(records));
    //console.log(records);
    console.log('\n');
  });
}

exports.stockTotalsBySector = (dbconn, sector) => {

  dbconn.query('SELECT * FROM VStockTotals WHERE Sector = ? LIMIT 500', sector, function(err, records){
    if(err) throw err;

    console.log('Securities & Fundamentals for '+ sector + ':\n');
    console.log('Records: '+ count(records));
    console.log('\n');
    console.log(JSON.stringify(records));
    //console.log(records);
    console.log('\n');
  });
}

exports.stockTotalsByTicker = (dbconn, ticker) => {

  dbconn.query('SELECT * FROM VStockTotals WHERE tickerSymbol = ? LIMIT 2', ticker, function(err, records){
    if(err) throw err;

    console.log('Securities & Fundamentals for $'+ ticker + ':\n');
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

exports.stockMaxPrice = (dbconn, ticker) => {

  dbconn.query('SELECT MAX(high) FROM Prices WHERE tickerSymbol = ? LIMIT 1', ticker,function(err, records){
    if(err) throw err;

    console.log('Highest Prices for $'+ ticker + ':\n');

    console.log('\n');
    console.log(JSON.stringify(records));
    console.log('\n');
    console.log('Records: '+ count(records));
  });
}

exports.stockMinPrice = (dbconn, ticker) => {

  dbconn.query('SELECT MIN(low) FROM Prices WHERE tickerSymbol = ? LIMIT 1', ticker,function(err, records){
    if(err) throw err;

    console.log('Lowest Prices for $'+ ticker + ':\n');

    console.log('\n');
    console.log(JSON.stringify(records));
    console.log('\n');
    console.log('Records: '+ count(records));
  });
}

exports.stockAvgPrice = (dbconn, ticker) => {

  dbconn.query('SELECT AVG(close) FROM Prices WHERE tickerSymbol = ? LIMIT 1', ticker,function(err, records){
    if(err) throw err;

    console.log('Average Prices for $'+ ticker + ':\n');

    console.log('\n');
    console.log(JSON.stringify(records));
    console.log('\n');
    console.log('Records: '+ count(records));
  });
}

exports.stockAvgVolume = (dbconn, ticker) => {

  dbconn.query('SELECT AVG(volume) FROM Prices WHERE tickerSymbol = ? LIMIT 1', ticker,function(err, records){
    if(err) throw err;

    console.log('Average Value for $'+ ticker + ':\n');

    console.log('\n');
    console.log(JSON.stringify(records));
    console.log('\n');
    console.log('Records: '+ count(records));
  });
}

exports.marketMinVolume = (dbconn) => {

  dbconn.query('SELECT date,volume FROM Prices WHERE volume = (select MIN(volume) from Prices WHERE volume > 0)', function(err, records){
    if(err) throw err;

    console.log('Lowest Volume for Market' + ':\n');

    console.log('\n');
    console.log(JSON.stringify(records));
    console.log('\n');
    console.log('Records: '+ count(records));
  });
}

exports.marketMaxVolume = (dbconn) => {

  dbconn.query('SELECT date,volume FROM Prices WHERE volume = (select MAX(volume) from Prices)', function(err, records){
    if(err) throw err;

    console.log('Highest Volume for Market' + ':\n');

    console.log('\n');
    console.log(JSON.stringify(records));
    console.log('\n');
    console.log('Records: '+ count(records));
  });
}

exports.marketAvgVolume = (dbconn) => {

  dbconn.query('SELECT AVG(volume) FROM Prices LIMIT 1', function(err, records){
    if(err) throw err;

    console.log('Average Volume for Market' + ':\n');

    console.log('\n');
    console.log(JSON.stringify(records));
    console.log('\n');
    console.log('Records: '+ count(records));
  });
}

exports.sectorAvgVolume = (dbconn, sector) => {

  dbconn.query('SELECT AVG(volume) FROM Prices WHERE Sector = ? LIMIT 1', sector, function(err, records){
    if(err) throw err;

    console.log('Average Volume for ' + sector + ':\n');

    console.log('\n');
    console.log(JSON.stringify(records));
    console.log('\n');
    console.log('Records: '+ count(records));
  });
}
