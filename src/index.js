const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use (express.urlencoded())
//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Route init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
