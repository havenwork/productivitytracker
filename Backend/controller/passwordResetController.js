const crypto = require('crypto');
const User = require('../models/userModels');


const generateResetToken = async (req, res) => {
  try {
    const resetToken = crypto.randomBytes(20).toString('hex');
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expiry in 1 hour
    await user.save();

    const emailSent = await sendPasswordResetEmail(user.email, resetToken);
    if (emailSent) {
      return res.status(200).json({ message: 'Email sent successfully' });
    } else {
      throw new Error('Error sending email');
    }
  } catch (error) {
    console.error('Error in generating reset token:', error);
    res.status(500).json({ error: 'Error generating reset token' });
  }
};

const resetPassword = async (req, res) => {
  // Logic for resetting password using the token
  // Similar to the '/reset-password/:token' endpoint mentioned earlier
  // Assuming '/reset-password/:token' is the endpoint
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }, // Check if the token is not expired
    });

    if (!user) {
      return res.status(400).json({ error: 'Token is invalid or expired' });
    }

    // Set the new password for the user
    user.password = newPassword; // Don't forget to hash this password before saving!
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    // Optionally, send a confirmation email to the user about the password change

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error in password reset:', error);
    res.status(500).json({ error: 'Error resetting password' });
  }
});

};

module.exports = { generateResetToken, resetPassword };
