const express = require('express')
const app = express()
const fs = require('fs')
const port = 3003

//First Middleware
app.use('/', (req,res,next) => {
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}`)
    res.send("Hacked by Middleware 1")
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

//Second Middleware
app.use('/', (req,res,next) => {
    console.log("Middleware 2 ")
    next()
})

app.get('/', (req,res) => {
    res.send("Nenu malli ochaa")
})

app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`)
})