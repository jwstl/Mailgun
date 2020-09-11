const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const { text } = require('express');

const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'hello@mustangsky.com',
        subject: subject,
        text: subject
    };
    
    transporter.sendMail(mailOptions, function(err,data){
        if(err){
            cb(err, null);
        } else{
            cb(null, data);
        }
    });
}

module.exports = sendMail;