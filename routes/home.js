const { Router } = require('express')
const auth = require('../middleware/auth')
const router = new Router()

router.get('/', auth, (req, res) => {
    res.render('index', {
        title: 'Workflow',
    })
})

module.exports = router