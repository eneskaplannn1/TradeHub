// const nodemailer = require('nodemailer');
// const nodemailMailgun = require('nodemailer-mailgun-transport');
// const mg = require('mailgun-js');

// const mailgun = () =>
//   mg({
//     apiKey: process.env.MAILGUN_API_KEY,
//     domain: process.env.MAILGUN_DOMAIN,
//   });

// mailgun().messages().send({
//   from: 'k88817029@gmail.com EnesKaplan',
//   to: 'k88817028@gmail.com',
//   subject: 'welcome',
//   html: '<h1>Deneme<h1/>',
// });

// module.exports = class Email {
//   constructor(user, url) {
//     this.url = url;
//     this.to = user.email;
//     this.firstName = user.name.split(' ')[0];
//     this.from = `Enes Kaplan <k88817029@gmail.com>`;
//   }

//   newTransport() {
//     return nodemailer.createTransport(
//       nodemailMailgun({
//         auth: {
//           domain: process.env.MAILGUN_DOMAIN,
//           api_key: process.env.MAILGUN_API_KEY,
//         },
//       })
//     );
//   }

//   // Send the actual email
//   async send(subject) {
//     // const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
//     //   firstName: this.firstName,
//     //   url: this.url,
//     //   subject,
//     // });

//     const mailOptions = {
//       from: 'Enes Kaplan <k88817029@gmail.com>',
//       to: this.to,
//       subject,
//       html: `
//       <h1>Hello world <h1/>
//       `,
//     };

//     await this.newTransport().sendMail(mailOptions);
//   }
// };

// // const sendEmail = async (options) => {
// //   const transport = nodemailer.createTransport({
// //     host: 'sandbox.smtp.mailtrap.io',
// //     port: 587 ,
// //     auth: {
// //       user: '22b5fb75fc536c',
// //       pass: 'dad3bbcc442eb3',
// //     },
// //   });
// //   const mailOptions = {
// //     from: 'Enes Kaplan <k88817029@gmail.com>',
// //     to: options.email,
// //     subject: options.subject,
// //     text: options.message,
// //   };
// //   await transport.sendMail(mailOptions);
// //   return;
// // };
// // module.exports = sendEmail;
