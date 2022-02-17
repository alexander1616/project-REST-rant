require('dotenv').config();

const express = require('express');
// console.log(express);
const app = express();

app.use('/places', require('./controllers/places'))

app.get ('/', (req, res) => {
    // console.log('We did it!');
    res.send('PAGE CONTENT');
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
})

app.get ('/second', function(req, res) {
    res.send('My Second Page');
})

app.get('/two/:variable', (req,res) => {
    console.log(req.params);
    res.send('Welcome to the ' + req.params.variable + " page.");
})

app.listen(process.env.PORT, () => {
    console.log('listening on port:', 3000);
})

