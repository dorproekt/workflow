const express = require('express')
const path = require('path')
const csrf = require('csurf')
const flash = require('connect-flash')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const varMiddleware = require('./middleware/variables')

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


/* session */
const store = new MongoStore({
    collection: 'sessions',
    uri: url
})

app.use(session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false,
    store
}))

app.use(csrf())
app.use(flash())

app.use(varMiddleware)
/* session */


/* routes */
const homeRoutes = require('./routes/home')
const authRoutes = require('./routes/auth')
const testRoutes = require('./routes/test')

app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/', testRoutes)
/* routes */ 

const PORT = process.env.PORT || 4000

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
