// Import Libraries
const path = require('path')
const express = require('express')
//const morgan = require('morgan')
//const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
const route = require('./routes')
const db = require('./config/db')
const cookieParser = require('cookie-parser');

//Connect to Database
db.conn()

// Other variables
const app = express()
const port = 3000

//

// Method overriding
app.use(methodOverride('_method'));
app.use(cookieParser());

//
app.use(
  express.urlencoded({
      extended: true,
  }),
);

//
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')))

app.use(function SortMiddleware(req, res, next) {
    
  res.locals._sort = {
      enable: false,
      type: 'default',
  };

  if (req.query.hasOwnProperty('_sort')){
      Object.assign(res.locals._sort, {
          enable: true,
          type: req.query.type,
          collumn: req.query.collumn,
      })
  }

  next();
});


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'resource/views' ))


// Routes
route(app)


// Listening socket
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})