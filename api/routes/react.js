var express = require('express');
var reactContent = express.Router();
const fetch = require("node-fetch");

reactContent.get("/", (req, res) => {
    fetch('https://api.github.com/users/scrpatlolla')
        .then(res => res.json())
        .then(result => res.send(result))
})

module.exports = reactContent;