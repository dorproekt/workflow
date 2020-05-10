const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

const app = express()

/* mongodb */
const url = `mongodb+srv://admin:gTbezz191ai8V5Ej@cluster0-buhpp.mongodb.net/workflow`
/* mongodb */

/* handlebars */
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// публичная папка
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
/* handlebars */

/* routes */
const homeRoutes = require('./routes/home')
const testRoutes = require('./routes/test')
/* routes */ 

const PORT = process.env.PORT || 4000

app.use('/', homeRoutes)
app.use('/', testRoutes)

async function start(){

    try{
        // connect mongodb
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        app.listen(PORT,() =>{
            console.log(`Server is running http://localhost:${PORT}/`) 
        })
    }catch(e){
        console.log(e)
    }
 
}

start()
