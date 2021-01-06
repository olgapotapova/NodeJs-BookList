const path = require('path');
const rootDirectory = require('../utilites/path');
const express = require('express');
const router = express.Router();


//mini app plugable to anather express app
router.get('/shop', (req, res) => {
    //console.log(path.join(__dirname, '..', 'views', 'add-product.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
    //res.sendFile(__dirname + '/views/add-prodact.html');
});




module.exports = router;