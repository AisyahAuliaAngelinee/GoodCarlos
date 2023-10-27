const express = require('express')
const app = express()
const routers = require('./routers/index')
const session = require('express-session')
const port = 3000
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))


app.use(session({
  secret: `it's a secret`, //harus ada
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    sameSite: true //untuk security dari csrf attack
  }
}))

app.use(express.static(__dirname + '/public'));

app.use(routers)



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })