const express = require('express');
const path = require('path');
const rootDirectory = require('./utilites/path');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const app = express();

app.use(express.static('public'));
app.use('/admin', adminRouter);//admin - is a filter
app.use('/shop', shopRouter);

app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDirectory, 'views', '404.html'));
});

/*app.get('/admin/add-product', (req, res) => {
    res.send('Hello from admin');
});*/

app.listen(5000, () => {
    console.log('Server is running on Port 5000!')
});