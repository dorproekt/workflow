const { Router } = require('express')
const Test = require('../models/test')
const router = new Router()

router.get('/test', async (req, res) => {

    const test = new Test({
        title: 'title-1',
        price: 200
    })

    try{
        await test.save()
    }catch(e){
        console.log(e)
    }

    res.render('test', {
        title: 'Test',
    })
})

module.exports = router