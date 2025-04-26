const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for sending emails
let transporter;

// Setup transporter based on environment variables
const setupTransporter = () => {
  try {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'appyraja786@gmail.com',
        pass: process.env.EMAIL_PASS // App password from Google account
      }
    });
    
    // Verify connection
    transporter.verify(function(error, success) {
      if (error) {
        console.error('Email service error:', error);
      } else {
        console.log('Email server is ready to send messages');
      }
    });
  } catch (error) {
    console.error('Failed to create email transporter:', error);
  }
};

setupTransporter();

// Booking endpoint
app.post('/api/bookings', async (req, res) => {
  try {
    const { 
      pickupLocation, 
      dropoffLocation, 
      materialWeight, 
      materialType, 
      contactNumber, 
      email 
    } = req.body;

    console.log('Received booking request:', req.body);

    // Validate required fields
    if (!pickupLocation || !dropoffLocation || !materialWeight || !materialType || !contactNumber || !email) {
      console.error('Missing required fields:', req.body);
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'appyraja786@gmail.com',
      to: 'appyraja786@gmail.com',
      subject: 'New Transport Booking Request',
      html: `
        <h2>New Transport Booking Request</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr>
            <th align="left">Field</th>
            <th align="left">Value</th>
          </tr>
          <tr>
            <td><strong>Pickup Location</strong></td>
            <td>${pickupLocation}</td>
          </tr>
          <tr>
            <td><strong>Drop-off Location</strong></td>
            <td>${dropoffLocation}</td>
          </tr>
          <tr>
            <td><strong>Material Weight</strong></td>
            <td>${materialWeight} kg</td>
          </tr>
          <tr>
            <td><strong>Material Type</strong></td>
            <td>${materialType}</td>
          </tr>
          <tr>
            <td><strong>Contact Number</strong></td>
            <td>${contactNumber}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">Please contact the customer to confirm the booking details.</p>
      `
    };

    // Send email
    console.log('Attempting to send email...');
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    res.status(200).json({ success: true, message: 'Booking request received', messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to process booking request', details: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 