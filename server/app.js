const express = require('express')
const app = express() 
const port = 5001; 

app.get('/', function (req, res) {
  res.send('GET request to homepage')
})

app.listen(port, () => {
  console.log('now listening on port ' + port )
})