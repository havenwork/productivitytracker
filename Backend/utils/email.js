const nodemailer = require('nodemailer');

const sendResetPasswordEmail = async (email, subject) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'a3064e124cf38e',
        pass: '56a346bed412a7',
      },
    });

    const mailOptions = {
      from: 'auth-support<support@auth.com>',
      to: email,
      subject: subject,
      text:
        `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
        `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
        `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    // Sending email
    return await transporter.sendMail(mailOptions);
    // console.log('Email sent for password reset');
    // res.status(200).send("email sent successfully")
    // return true;

  } catch (error) {
    console.error('Error in sendResetPasswordEmail middleware:', error);
    // res.status(500).json({ error: `${error} processing forgot password request` });
    return false;
  }
};

module.exports = {
  sendResetPasswordEmail,
};


// const nodemailer = require("nodemailer");

// module.exports = async (email, subject, text) => {
// 	try {
// 		const transporter = nodemailer.createTransport({
// 			host: process.env.HOST,
// 			service: process.env.SERVICE,
// 			port: Number(process.env.EMAIL_PORT),
// 			secure: Boolean(process.env.SECURE),
// 			auth: {
// 				user: process.env.USER,
// 				pass: process.env.PASS,
// 			},
// 		});

// 		await transporter.sendMail({
// 			from: process.env.USER,
// 			to: email,
// 			subject: subject,
// 			text: text,
// 		});
// 		console.log("email sent successfully");
// 	} catch (error) {
// 		console.log("email not sent!");
// 		console.log(error);
// 		return error;
// 	}
// };