const express = require('express')
const bodyParser = require('body-parser'); // Import the body-parser module
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.all('/', (req, res) => {
    console.log("Just got a request!")
    console.log(req.body)
    res.send('RECEIVEOK')
})
app.all('/frontend', (req, res) => {
    console.log("Just got a request!")
    console.log(req.body)
    res.send('RECEIVEOK')
})
app.all('/backend', (req, res) => {
    console.log("Just got a request!")
    console.log(req.body)
    res.send('RECEIVEOK')
})
app.listen(process.env.PORT || 3000)
