const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,       // e.g. smtp-relay.brevo.com
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: false, // Use true for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function sendEmail({ to, subject, text }) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,   // e.g. "Phil's Calendar <no-reply@yourdomain.com>"
    to,
    subject,
    text
  });
}

module.exports = { sendEmail };
