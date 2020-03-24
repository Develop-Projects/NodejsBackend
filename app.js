// Import express from the node-modules
const express = require('express');

// Import body-parser
const bodyParser = require('body-parser');

// create the express server
const app = express();

/* Cors middleware */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

// Connect to the routes


// Export the module
module.exports = app;