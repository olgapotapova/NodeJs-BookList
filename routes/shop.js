const express = require('express');
const path = require('path');
const rootDirectory = require('../utilites/path');
const adminData = require('./admin');
const router = express.Router();


//mini app plugable to anather express app
router.get('/', (req, res) => {
    const products = adminData.products;

    res.render('shop.ejs', {
        productsMain: products,
        pageTitle: "Main Page", 
        path: '/'
    });
    //console.log(path.join(__dirname, '..', 'views', 'add-product.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    ////res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
    //res.sendFile(__dirname + '/views/add-prodact.html');
});




module.exports = router;