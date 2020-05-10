const { Router } = require('express')
const router = new Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Workflow',
    })
})

module.exports = router