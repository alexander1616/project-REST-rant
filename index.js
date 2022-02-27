const express = require('express');
const app = express();

//config
require('dotenv').config();
const PORT = process.env.PORT

//rendering engine
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.use('/places', require('./controllers/places'))
app.get ('/', (req, res) => {
    res.render('PAGE CONTENT');
})

// Breads
const breadsController = require('./controllers')

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

