const crypto = require('crypto');
const User = require('../models/userModels'); 
const nodemailer = require('nodemailer');
const JWT = require('jsonwebtoken');
require('dotenv').config({ path: './config.env' });



const forgotPassword = async (req, res) => {
  try {
    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    
    // Find user by email
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user's reset token and expiry time
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expiry in 1 hour
    await user.save();

    // // JWT token for reset password link (with a shorter expiry time)
    // const resetJWTToken = JWT.sign({ id: user._id }, process.env.RESET_SECRET, {
    //   expiresIn: '1h',
    // });

    // Nodemailer setup within the middleware
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 465,
      secure: true, // upgrade later with STARTTLS
      auth: {
        user: 'a3064e124cf38e',
        pass: '56a346bed412a7',
      },
    });

    // Email content
    const mailOptions = {
      from: 'auth-support<support@auth.com>',
      to: user.email,
      subject: 'Password Reset',
      text:
        `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
        `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
        `http://localhost:6766/forgotpassword//${req.headers.host}/reset` +
        `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    // Sending email
    await transporter.sendMail(mailOptions);
    console.log('Email sent for password reset');

    // Proceed to the next middleware or route handler
    
  } catch (error) {
    console.error('Error in forgotPassword middleware:', error);
    res.status(500).json({ error: `${error} processing forgot password request` });
  }
};

module.exports = {
  forgotPassword,
};
