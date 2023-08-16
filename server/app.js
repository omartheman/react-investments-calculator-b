const express = require('express')
const session = require('express-session')
const app = express() 
const port = 5001; 

app.use(session({
  secret: 'keyboard-cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
  }
}))

app.get('/', function (req, res) {
  res.send('GET request to homepage')
})

app.listen(port, () => {
  console.log('now listening on port ' + port )
  console.log('session:', session)
})