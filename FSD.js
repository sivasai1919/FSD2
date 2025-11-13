const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()
const port = 3000
 
app.use(cookieParser())

app.get("/", (req,res) => {
    res.send("Starting of the website")
})

app.get("/set", (req, res) => {
    res.cookie('username', 'Sivasai', { maxAge: 60000, httpOnly : false })
    res.send("Hi..!Cookie has been sent")
})

app.get("/get", (req, res) => {
    const username = req.cookies.username
    if(username) { 
        res.send(`Hello !${username}`)
    }
    else {
        res.send("Cookie didnt get")
    }
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})