const cheerio = require('cheerio')
const express = require('express')
var app = express()
const fs = require('fs')
const axios = require("axios");


 

  app.get('/v', function(req,res) {
    
      res.send(fs.readFileSync('./html.html').toString())

  })



  app.listen(80)