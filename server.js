#!/bin/env node
// Node application executable (as defined in package.json)

// Setup the environment variables
var HOST = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"
,   PORT = process.env.OPENSHIFT_NODEJS_PORT || 8000
;

// Request dependency modules
var XPRS = require("express");

// Initialize application
var app = new XPRS();

app.configure(function() {
    app.use(XPRS.logger());
    app.use(app.router);
    app.use(XPRS.static(__dirname + '/public'));
});

// Define routes
app.get('/', function(req, res) {
    res.end(Date(Date.now()), "utf-8");
});

// Harness the horse
app.listen(PORT);
