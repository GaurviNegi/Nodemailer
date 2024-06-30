const nodemailer = require("nodemailer");

const sendEmail = async(to , messageContent)=>{
    try {
       //configuring the nodemailer
       const transporter = nodemailer.createTransport({
           host: "smtp.gmail.com",
           port: 587,
           secure: false, // Use `true` for port 465, `false` for all other ports
           auth: {
             user: "gaurvinegi333@gmail.com",
             pass: "cfqx lhvw grrl wuwr",
           },
         });
         //message object
         const message ={
           to:to,
           subject:"a new message from the nodemailer",
           html:`
           <h1>you have received an email from nodemailer</h1>
           <p>${messageContent}</p>
           `
         }
   
       const info =await transporter.sendMail(message);
       console.log(info);
    } catch (error) {
       console.log(error);
    }
   }
   
   module.exports={sendEmail}
