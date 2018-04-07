// Initialise json
var json = {};

// export converter function
module.exports = (queryString) => {
    // If query string is in natural language
    if (isNaN(Number(queryString))) {
        var date = new Date(queryString);

        // Invalid string
        if (isNaN(date.getDate())) {
            return {
                unix: null,
                natural: null
            };
        }

        // Query string is valid, populate json
        json.unix = date.getTime();
        json.natural = String(date);
    }
    else {
        // If query string is a UNIX timestamp
        var timestamp = Number(queryString);

        // Populate json
        json.unix = timestamp;
        json.natural = String(new Date(timestamp));
    }

    // return json
    return json;
};