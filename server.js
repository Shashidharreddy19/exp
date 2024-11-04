const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/send-message', (req, res) => {
    const phoneNumber = req.query.number;
    res.send(`
        <h1>Vehicles</h1>
        <h2>Others</h2>
        <form action="/submit" method="post">
            <input type="text" name="message" placeholder="Enter your message" required />
            <input type="hidden" name="phoneNumber" value="${phoneNumber}" />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    const { message, phoneNumber } = req.body;
    // Here you would send the message to the phone number
    console.log(`Sending message "${message}" to ${phoneNumber}`);

    // Use your SMS service API here (Twilio, etc.)
    // Example with Nodemailer (for email):
    // const transporter = nodemailer.createTransport({...});
    // transporter.sendMail({...});

    res.send('Message sent!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
