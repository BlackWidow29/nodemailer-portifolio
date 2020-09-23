const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const auth = require('./.auth.js');

const app = express();

app.use(bodyParser.json());

app.post("/sendemail", (req, res) => {
    const { name, email, telephone, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: auth.EMAIL,
            pass: auth.PASSWORD
        },
        debug: true
    });

    const mailOptions = {
        from: email,
        to: 'youremail here',
        subject: subject,
        text: email + " \n" + name + " \n" + telephone + " \n" + message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({ "error": error })
        }
        else {
            console.log("Email sent: ", info.response);
            res.json({ "info": info.response })
        }
    });
});

app.listen(3333, () => {
    console.log("Servidor rodando!");
});