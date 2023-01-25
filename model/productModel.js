const mongoose = require('mongoose');

     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  
    //  Reference Schemea
     const productSchema = new mongoose.Schema({
      name: {type: String, unique: true, required: true},
      price: {type: Number, required: true},
      description: {type: String, required: true},
      category: {type: String, required: true},
      featured: {type: Boolean, default: false},
    })


    module.exports = productSchema;

