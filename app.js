/*
============================================
; Title:  Kim Love Realty
; Author: Dave Wilson
; Date:   1 Oct 2018
; Description: This program entails KLR app.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");

// initialize the express application
var app = express();


// use statements
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/CSS', express.static(path.join(__dirname, 'CSS')))

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);


// route requests
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home Page"
    });
});

app.get("/index", function (request, response) {
    response.render("index", {
        title: "Home Page"
    });
});
app.get("/contact", function (request, response) {
    response.render("contact", {
        title: "Contact page"
    });
});
app.get("/about", function (request, response) {
    response.render("about", {
        title: "About page"
    });
});

// create server
http.createServer(app).listen(app.get("port"), function () {
    console.log("Application started on port " + app.get("port"));
});
