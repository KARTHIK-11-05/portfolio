import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'koradavenkatakarthik@gmail.com',
    pass: process.env.passkey
  }
});

// POST route for sending emails
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please provide name, email, and message." });
  }

  try {
    const info = await transporter.sendMail({
      from: email,
      to: 'koradavenkatakarthik@gmail.com',
      subject: `Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin-top: 20px; font-style: italic;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">This message was automatically generated from your Portfolio contact form.</p>
        </div>
      `
    });
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ success: true, message: "Email sent perfectly." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
