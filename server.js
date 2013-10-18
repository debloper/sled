#!/bin/env node
// Node application executable (as defined in package.json)

// Setup the environment variables
var HOST = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"
  , PORT = process.env.OPENSHIFT_NODEJS_PORT || 8000
  , PUB  = "public"
;

// Request dependency modules
var XPRS = require("express")
  , FILE = require("fs")
;

// Initialize application
var app = new XPRS();

app.configure(function() {
    app.use(XPRS.logger());
    app.use(app.router);
    app.use(XPRS.static(__dirname + "/" + PUB));
});

// Define routes
app.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(FILE.readFileSync(PUB + "/index.html", "utf-8"));
});

// Harness the horse
app.listen(PORT, HOST);
