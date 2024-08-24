import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'KAL12348468@student.kangan.edu.au',
        pass: 'PichaelT4f3'
    }
});

const mailOptions = {
    from: 'KAL12348468@student.kangan.edu.au',
    to: 'michaelpkalaf@outlook.com',
    subject: 'Sending Email using Node.js from Outlook',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
