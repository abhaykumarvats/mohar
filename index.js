// Create an instance of express
var express = require('express');
var app = express();

// Require converter module
var convert = require('./converter');

// Assign port number
var PORT = process.env.PORT || 3000;

// Listen for requests on /
app.get('/', (req, res) => {
    // Redirect to repo page
    res.redirect('https://github.com/abhaykv04/mohar');
});

// Listen for GET requests on /<queryString>
app.get('/:queryString', (req, res) => {
    // Play with the query string
    var json = convert(req.params.queryString);
    // Send response as json
    res.json(json);
});

// Listen on port 3000
app.listen(PORT, () => {
    console.log('(mohar): Listening on port', PORT);
});