/**
 * Module dependencies.
 */
const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const path = require('path');
const expressValidator = require('express-validator');
const sass = require('node-sass-middleware');
const multer = require('multer');
const exphbs = require("express-handlebars");
const mysql  = require('mysql');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: 'APP.env' });

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');
const apiController = require('./controllers/api');


/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MYSQL.
 */

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));


/**
 * Primary app routes.
 */

app.get('/', homeController.index);
app.get('/market', homeController.market);
app.get('/sectoravg', homeController.sectoravg);
app.get('/sectormax', homeController.sectormax);
app.get('/sectormin', homeController.sectormin);
app.get('/stock', homeController.stocksearch);
app.get('/sql', homeController.queries);
app.post('/stock', homeController.stockinfo);
 /**
  * Error Handler.
  */
 app.use(errorHandler());


 /**
 * Start Express server.
 */

app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});


module.exports = app;
