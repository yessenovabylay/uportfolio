const express = require("express");
const app = express();

const user = require("./user.js");

app.use('/api/user', user);

module.exports = app;