'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

/* middleware */
app.use(bodyParser.json());

/* static files */
app.use('/', express.static(__dirname + './../dist'));

import api from './routes';
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

/* server open */
app.listen(port, () => {
    console.log('Express is listening on port', port);
});