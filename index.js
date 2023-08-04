const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    console.log(req.body)
    res.send('RECEIVEOK')
})
app.listen(process.env.PORT || 3000)
