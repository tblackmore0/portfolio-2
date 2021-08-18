const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mg = require("nodemailer-mailgun-transport");
const { env } = require('process');
var sgTransport = require('nodemailer-sendgrid-transport');

const app = express();

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});



let transporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com",
  port: 25 || 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  },
});

//POST
app.post('/send', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.text;
//
  
  let mail = {
    from: 'tblackmore0@gmail.com',
    to: 'tblackmore0@gmail.com',
    subject: 'Portfolio message',

    html:
    `
    <h3>Name: ${name}</h3>
    <h3>Email: ${email}</h3>

    <p>${message}</p>
    
    `,

    text: message,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        msg: err
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