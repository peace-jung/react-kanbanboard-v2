'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';

const app = express();
const port = 4000;

/* middleware */
app.use(bodyParser.json());

/* use session */
app.use(session({
    secret: 'vsSD#JFs!dk4234jSVSUBRF928',
    resave: false,
    saveUninitialized: true
  }));

/* static files */
app.use('/', express.static(__dirname + './../dist'));

import api from './routes';
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

/* server open */
app.listen(port, () => {
    console.log('Express server on port ', port);
});