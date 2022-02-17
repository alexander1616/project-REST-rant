const express = require('express');
// console.log(express);
const app = express();

app.get ('/', (req, res) => {
    // console.log('We did it!');
    res.send('PAGE CONTENT');
})

app.get ('/second', function(req, res) {
    res.send('My Second Page');
})

app.get('/two/:variable', (req,res) => {
    console.log(req.params);
    res.send('Welcome to the ' + req.params.variable + " page.");
})

app.listen(3000, () => {
    console.log('listening on port:', 3000);
})