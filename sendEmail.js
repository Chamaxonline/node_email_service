// Import the required modules
const nodemailer = require('nodemailer');
const config = require('./config');

// Create a transporter using SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Your SMTP server host (e.g., Gmail SMTP: smtp.gmail.com)
    port: 587, // SMTP port (e.g., Gmail SMTP: 587)
    secure: false, // True for 465, false for other ports; for Gmail SMTP use true
    auth: {
        user: process.env.GMAIL_EMAIL || config.gmailEmail,
        pass: process.env.GMAIL_PASSWORD || config.gmailPassword
    }
});

// Email content and details
let mailOptions = {
    from: 'yanawawahana2021@gmail.com', // Sender email address
    to: 'chamathran@gmail.com', // Recipient email address
    subject: 'Sample Email from Node.js', // Email subject
    text: 'This is a sample email sent from Node.js.' // Email body (plain text)
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error.message);
    } else {
        console.log('Email sent successfully!', info.response);
    }
});
