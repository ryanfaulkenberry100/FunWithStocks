const mysql  = require('mysql');
const dotenv = require('dotenv');
const insertSQL = require('./quieries/insert');
const selectSQL = require('./quieries/select');
const deleteSQL = require('./quieries/delete');
const updateSQL = require('./quieries/update');
const createSQL = require('./quieries/create');
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: 'APP.env' });

const dbconn = mysql.createConnection({
  host     : process.env.SQL_HOST,
  user     : process.env.SQL_USER,
  password : process.env.SQL_PASS,
  database : process.env.SQL_DB
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});

//insertSQL.stock(dbconn)
selectSQL.stock(dbconn)
//deleteSQL.stock(dbconn)
//updateSQL.stock(dbconn)
//createSQL.stock(dbconn)

dbconn.end(function(err) {
  // Function to close database connection
});
