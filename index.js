const express = require('express')
const axios = require('axios');
const bodyParser = require('body-parser'); // Import the body-parser module
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.all('/', (req, res) => {
    console.log("Just got a request!")
    console.log(req.body)
    res.send('RECEIVEOK')
})
app.all('/frontend', async(req, res) => {
    // console.log("Just got a request!")
    // console.log(req.body)
    // res.send('RECEIVEOK')
    try {
        console.log("Just got a request!");
        console.log(req.body);

        // Resend the request body to another endpoint using axios
        const response = await axios.post('http://68.183.180.30:3000/api/v1/slips/response-frontend', req.body);
        // const response = await axios.post('http://127.0.0.1:3000/api/v1/slips/response-frontend', req.body);

        console.log("Response from other endpoint:", response.data);
        res.redirect(response.headers.location);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
})
app.all('/backend', async(req, res) => {
    // console.log("Just got a request!")
    // console.log(req.body)
    // res.send('RECEIVEOK')
    try {
        console.log("Just got a request!");
        console.log(req.body);

        // Resend the request body to another endpoint using axios
        const response = await axios.post('http://68.183.180.30:3000/api/v1/slips/response-backend', req.body);

        console.log("Response from other endpoint:", response.data);
        
        res.send('RECEIVEOK');
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
})
app.all('/school-frontend', async(req, res) => {
    try {
        console.log("Just got a request!");
        console.log(req.body);

        // Resend the request body to another endpoint using axios
        const response = await axios.post('http://68.183.180.30:3000/api/v1/slips/response-school-frontend', req.body);
        // const response = await axios.post('http://127.0.0.1:3000/api/v1/slips/response-school-frontend', req.body);

        console.log("Response from other endpoint:", response.data);
        res.redirect(response.headers.location);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
})
app.all('/school-backend', async(req, res) => {
    try {
        console.log("Just got a request!");
        console.log(req.body);

        // Resend the request body to another endpoint using axios
        const response = await axios.post('http://68.183.180.30:3000/api/v1/slips/response-school-backend', req.body);
        // const response = await axios.post('http://127.0.0.1:3000/api/v1/slips/response-school-backend', req.body);

        console.log("Response from other endpoint:", response.data);
        
        res.send('RECEIVEOK');
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
})
// prod
app.all('/prod-frontend', async(req, res) => {
    // console.log("Just got a request!")
    // console.log(req.body)
    // res.send('RECEIVEOK')
    try {
        console.log("Just got a request!");
        console.log(req.body);

        // Resend the request body to another endpoint using axios
        const response = await axios.post('http://13.214.199.249:3000/api/v1/slips/response-frontend', req.body);
        // const response = await axios.post('http://127.0.0.1:3000/api/v1/slips/response-frontend', req.body);

        console.log("Response from other endpoint:", response.data);
        res.redirect(response.headers.location);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
})
app.all('/prod-backend', async(req, res) => {
    // console.log("Just got a request!")
    // console.log(req.body)
    // res.send('RECEIVEOK')
    try {
        console.log("Just got a request!");
        console.log(req.body);

        // Resend the request body to another endpoint using axios
        const response = await axios.post('http://13.214.199.249:3000/api/v1/slips/response-backend', req.body);

        console.log("Response from other endpoint:", response.data);
        
        res.send('RECEIVEOK');
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
})
app.all('/prod-school-frontend', async(req, res) => {
    try {
        console.log("Just got a request!");
        console.log(req.body);

        // Resend the request body to another endpoint using axios
        const response = await axios.post('http://13.214.199.249:3000/api/v1/slips/response-school-frontend', req.body);
        // const response = await axios.post('http://127.0.0.1:3000/api/v1/slips/response-school-frontend', req.body);

        console.log("Response from other endpoint:", response.data);
        res.redirect(response.headers.location);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
})
app.all('/prod-school-backend', async(req, res) => {
    try {
        console.log("Just got a request!");
        console.log(req.body);

        // Resend the request body to another endpoint using axios
        const response = await axios.post('http://13.214.199.249:3000/api/v1/slips/response-school-backend', req.body);
        // const response = await axios.post('http://127.0.0.1:3000/api/v1/slips/response-school-backend', req.body);

        console.log("Response from other endpoint:", response.data);
        
        res.send('RECEIVEOK');
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
})
app.listen(process.env.PORT || 3000)
