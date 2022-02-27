const express = require('express');
const app = express();

//config
require('dotenv').config();
const PORT = process.env.PORT
const methodOverride = require('method-override')

//rendering engine
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))

//routes
app.use('/places', require('./controllers/places'))

app.get ('/views/places', (req,res) => {
    res.render('index');
})
app.get ('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
    res.render('places/index', {places});
})

// Breads
const breadsController = require('./controllers')

app.get('*', (req, res) => {
    res.status(404).render('<h1>404 Page</h1>');
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

