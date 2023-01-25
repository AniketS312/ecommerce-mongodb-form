const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose');
require('dotenv').config()
const productSchema = require('../model/productModel')
const mongoConnectionCode = process.env.MONGO_URL


const homePageFile = path.join(__dirname + '/../view' + '/index.html')


const homePage = function (req, res) {
    res.sendFile(homePageFile)
}


const formSubmit = function (req, res) {
    const { name, price, description, category, action } = req.body
    console.log(name, price, description, category, action);
    // mongoose.set("strictQuery", false);
    // mongoose.connect(mongoConnectionCode);
    // const Product = mongoose.model('Product', productSchema)
    // Product.create({name, price, description, category, action})
    // .then(res.redirect('/'))
    // .catch(err => console.log(err))
}

module.exports = {
    homePage, 
    formSubmit
}

