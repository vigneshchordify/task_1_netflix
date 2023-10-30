const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Helloo World!')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})