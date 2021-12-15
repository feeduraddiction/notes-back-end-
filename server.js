/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fs = require('fs');
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./data/routes/routes.js')(app, fs);
const server = app.listen(process.env.PORT || 5000, () => console.log('listening on port %s...', server.address().port));
