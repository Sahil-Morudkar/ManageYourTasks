const express = require("express")
const app = express()
const connectDb = require("./db/connect")
const tasks = require('./Routes/routes')
require('dotenv').config()

app.use(express.json())
app.use(express.static('./public'))
app.use('/api/v1/tasks', tasks)

// app.get('/hello', (req, res) => {
//     res.send("MY first Node App");
// })

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(5000, console.log("Running"))
    }
    catch (error) {
        console.log(error);
    }
}

start()