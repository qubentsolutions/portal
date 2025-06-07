// app/actions/sendEmail.js
'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData) {
  const { name, email, message } = formData;

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@qubentsolutions.com', // destination email
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
}
