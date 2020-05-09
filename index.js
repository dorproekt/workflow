const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 4000

app.use('/', (req, res) => {
    res.json({"text":"hello world"})
})

app.listen(PORT,() =>{
    console.log(`Server is running http://localhost:${PORT}/`) 
})
