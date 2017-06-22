/* eslint no-console: 0 */

'use strict';

const nodemailer = require('../lib/nodemailer');

// Create a SMTP transporter object
let transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: 'summerlyudd@hotmail.com',
        pass:  'twobuttonclick123'
    }
}, {
    // default message fields

    // sender info
    from: 'summerlyudd@hotmail.com',
    headers: {
        'X-Laziness-level': 1000 // just an example header, no need to use this
    }
});

console.log('SMTP Configured');

// Read the file and print its contents.
var fs = require('fs')
var filename = 'template1.html';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  message.html = data;
  transporter.sendMail(message, (error, info) => {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
    transporter.close();
    });
});

// Message object
let message = {

    // Comma separated list of recipients
    to: 'summerlyudd@hotmail.com, taduat.emailapproval@jpmorgan.com',

    // Subject of the message
    subject: 'This is a test from twobuttonclick ✔',

};

console.log('Sending Mail');
