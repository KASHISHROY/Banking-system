require('dotenv').config();
const nodemailer = require('nodemailer');
//sntp server of google mail requires this code to connect to it->transporter connects to sntp server
//transporter goes to the google sntp server especially designed for sending mails and ask it to send mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

module.exports = transporter;