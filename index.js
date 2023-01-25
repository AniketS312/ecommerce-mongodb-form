const express = require('express');
const path = require('path');
const { homePage, formSubmit } = require('./controller/routes');
const app = express()
const port = process.env.port || 3000;


app.use(express.static('./assets'));
// app.use(express.urlencoded({ extended: false }))

app.get('/', homePage)
app.post('/', formSubmit)

app.listen(port)