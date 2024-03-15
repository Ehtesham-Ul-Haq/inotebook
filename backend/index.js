const connectToMongo = require('./db');
const express = require('express')

async function startServer() {
    await connectToMongo();
    // Other server startup logic here
}

const app = express()
const port = 5000

app.use(express.json())


// available routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


startServer();