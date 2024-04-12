// Import Libraries
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
const route = require('./routes')
const db = require('./config/db')

//Connect to Database
db.conn()

// Other variables
const app = express()
const port = 3000

//

// Method overriding
app.use(methodOverride('_method'));

//
app.use(
  express.urlencoded({
      extended: true,
  }),
);

//
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')))

//Template Engine
app.engine('hbs', engine({
  extname: '.hbs',
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views' ))


//HTTP loger
//app.use(morgan('combined'))

// Response

// Routes
route(app)


// Listening socket
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})