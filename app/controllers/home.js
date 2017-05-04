const mysql  = require('mysql');

const dbconn = mysql.createConnection({
  host     : process.env.SQL_HOST,
  user     : process.env.SQL_USER,
  password : process.env.SQL_PASS,
  database : process.env.SQL_DB
});


/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'FunWithStocks',
    github:'https://github.com/ryanfaulkenberry100/FunWithStocks',
    kaggle: 'https://www.kaggle.com/dgawlik/nyse'
  });
};

exports.market = (req, res) => {
  res.render('market', {
    title: 'Market'
  });
};

exports.sectoravg = (req, res) => {
  res.render('sectoravg', {
    title: 'Sector Avg Volumes'
  });
};

exports.sectormax = (req, res) => {
  res.render('sectormax', {
    title: 'Sector Max Volumes'
  });
};

exports.sectormin = (req, res) => {
  res.render('sectormin', {
    title: 'Sector Min Volumes'
  });
};

exports.queries = (req, res) => {
  res.render('queries', {
    title: 'SQL Statements'
  });
};

exports.stocksearch = (req, res) => {
  res.render('stocksearch', {
    title: 'Find Stock by Ticker'
  });
};

exports.stockinfo = (req, res) => {
  const v = req.body.ticker.toUpperCase();
  dbconn.connect(function(err){
    if(err){
      console.log('Database connection error');
    }else{
      console.log('Database connection successful');
    }
  });
  dbconn.query('SELECT * FROM VStockTotals WHERE tickerSymbol = ? LIMIT 2', v, function(err, records){
    if(err) throw err;

    console.log('Securities & Fundamentals for $'+ v + ':\n');
    let data = JSON.stringify(records);
    jsondata = JSON.parse(data);
    console.log(JSON.stringify(data));
    data = jsondata[0]
    console.log(jsondata[0].tickerSymbol);
    console.log('\n');
    res.render('stockinfo', {
      title: data.tickerSymbol,
      company: data.SecurityName,
      symbol: data.tickerSymbol,
      sector: data.Sector,
      revenue: data.TotalRevenue,
      assets: data.TotalAssets,
      income: data.Income
    });
  });

  dbconn.end(function(err) {
    // Function to close database connection
  });
};
