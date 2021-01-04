import nodemailer from 'nodemailer';

// It's Fake DB, reset after build
const emails = [];

export default (req, res) => {
  if (emails.includes(req.body.email)) {
    res.json({
      success: false,
      msg: `You already send an email.`,
    });
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: 'dudekigor@gmail.com',
    subject: `Email From my CV page! - ${req.body.email}`,
    html: `<h2>${req.body.email}, chciałby się z tobą skontaktować.</h2><h4>Treść: </h4><p>${req.body.message}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res
        .json({
          success: false,
          msg: `Something went wrong.`,
          error,
        })
        .end();
    } else {
      emails.push(req.body.email);
      res
        .status(200)
        .json({ success: true, msg: `Message Send`, info: info.response });
    }
  });
};
