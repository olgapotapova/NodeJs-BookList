const path = require('path');
const rootDirectory = require('../utilites/path');
const express = require('express');
const router = express.Router();
const products = [];


//mini app plugable to anather express app
router.get('/add-product', (req, res) => {
    res.render('add-product.ejs', {
        pageTitle: "Add Product",
        path: '/admin/add-product'

    });

        //console.log(path.join(__dirname, '..', 'views', 'add-product.html'));
        //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
   //// res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
        //res.sendFile(__dirname + '/views/add-prodact.html');//standard option for a folder at the same level
});


router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title});
    //res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
    ////res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    res.redirect('/');
});


exports.router = router;
exports.products = products;
//module.exports = router;