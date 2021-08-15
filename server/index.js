const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// TRANSPORTER v.1
/*

let transport = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
      user: "c493566e985378",
      pass: "3dfebe45f8b6c8"
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

*/



//Transporter v.2

var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});



//POST
app.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.messageHtml


  var mailOptions = {
    from: email,
    to: 'tblackmore0@gmail.com',
    subject: 'Portfolio message',
    html: message
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});