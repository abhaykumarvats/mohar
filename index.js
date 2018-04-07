// Create an instance of express
var express = require('express');
var app = express();

// Require converter module
var convert = require('./converter');

// Listen for GET requests on /
app.get('/:queryString', (req, res) => {
    // Play with the query string
    var json = convert(req.params.queryString);
    // Send response as json
    res.json(json);
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('(timestamp-ms): Listening on 3000');
});