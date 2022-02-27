const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.render('idetail', { 
    })
})

module.exports = router