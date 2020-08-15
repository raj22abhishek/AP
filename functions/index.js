const functions = require('firebase-functions');
const admin=require('firebase-admin');
const nodemailer =require('nodemailer');
admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

exports.sendEmailNotification=functions.firestore.document('submissions/{docId}')
.onCreate((snap,ctx)=>{
    const data=snap.data();
    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:SENDER_EMAIL,
            pass:SENDER_PASSWORD
        }
    });
authData.sendMail({
from :'alia22roy.com',
to:'abhishek.1rn13is006@gmail.com',
subject:'Your submission Info',
text:`email:--${data.email} name:--${data.name} mobile:--${data.mobile} query:--${data.comment}`,
html:`<h2>email:--${data.email} name:--${data.name} mobile:--${data.mobile} query:--${data.comment}</h1>`,
}).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

});
