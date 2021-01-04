import nodemailer from 'nodemailer';

// It's Fake DB, reset after build
const emails = [];

// Serverless have to return a Promise -> resolve if you want stop a promise
// Callback hell :( -> next.js have problem with that

export default async (req, res) => {
  return new Promise((resolve) => {
    const { email, message } = req.body;
    // Check if the e-mail has not been sent already
    if (emails.includes(email)) {
      res.json({
        success: false,
        msg: `You already send an email.`,
      });
      return resolve();
    }
    // Validate email
    if (!email) {
      res.json({
        success: false,
        msg: `Please add valid email.`,
      });
      return resolve();
    }
    // Validate Message
    if (!message || message.length < 16) {
      res.json({
        success: false,
        msg: 'Message is to short, min 16 characters.',
      });
      return resolve();
    } else if (message.length > 160) {
      res.json({
        success: false,
        msg: 'Message is to long, max 160 characters.',
      });
      return resolve();
    }
    // Create Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Create Mail
    const mailOptions = {
      from: email,
      to: 'dudekigor@gmail.com',
      subject: `Email From my CV page! - ${email}`,
      html: `<h2>${email}, chciałby się z tobą skontaktować.</h2><h4>Treść: </h4><p>${message}</p>`,
    };

    // Verify Transporter -> -> if ok, go further, if error resolve a promise
    transporter
      .verify()
      .then(() => {
        // Go further - send mail -> if ok, add email to fake DB and send resolve with success true, if err send resolve with success false
        transporter
          .sendMail(mailOptions)
          .then(() => {
            emails.push(req.body.email);
            res.json({
              success: true,
              msg: 'Message send.',
            });
            resolve();
          })
          .catch((err) => {
            // Resolve
            res.json({
              success: false,
              msg: 'Something went wrong.',
              err,
            });
            resolve();
          });
      })
      .catch((err) => {
        // Resolve
        res.json({
          success: false,
          msg: 'Something went wrong.',
          err,
        });
        resolve();
      });
  });
};
