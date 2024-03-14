const connectToMongo = require('./db');
const express = require('express')

async function startServer() {
    await connectToMongo();
    // Other server startup logic here
}

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Ehtesham!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


startServer();