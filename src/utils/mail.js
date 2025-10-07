import Mailgen from "mailgen";
import nodemailer from "nodemailer";
// this is about email generation 

const sendEmail = async (options) => {
   const mailGenerator = new Mailgen({
        theme: "default",
        product:
        {  
        name :"Task Manager",
        link: "https://taskmanagelink.com"
        }
    })
    

   const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
   const emailHtml = mailGenerator.generate(options.mailgenContent)
  





   const transporter = nodemailer.createTransport({
    host:process.env.MAILTRAP_SMTP_HOST,
    port:process.env.MAILTRAP_SMTP_PORT,
    auth:{
    user:process.env.MAILTRAP_SMTP_USER,
    pass:process.env.MAILTRAP_SMTP_PASS,
    }


   })

   const mail = {
    from:"mail.taskmanager@example.com",
    to: options.email,
    subjects:options.subject,
    text: email.Textual,
    html:emailHtml,
   }
   try{
    await transporter.sendEmail(mail)
   } catch(error){
    console.error("Email Service Failed silentiely , this might have happened because of credentials , make sure you have your credentials Mailtrap in .env")

   }

}

const emailVerificationMailgenContent = ( username , verficationUrl) =>{
    return{
        body:{
            name:username,
            intro:"Welcome to our app , we are excited to have you onboard ! ",
            action:{
                intructions :"To Verify your Email please click on the following button",
                button:{
                    colour :"#1aae5aff",
                    text:"Verify your email",
                    link: verficationUrl
                },


            }
        },
        outro: "Need Help , or have questions ? Just reply to this email , we'd love to help."

    };
};

const fogetPasswordMailgenContent = ( username , passwordRestUrl) =>{
    return{
        body:{
            name:username,
            intro:"We got a request to reset the password of your account  ",
            action:{
                intructions :"To reset the password click here ",
                button:{
                    colour :"#163ec2ff",
                    text:"Reset Password",
                    link: passwordRestUrl
                },


            }
        },
        outro: "Need Help , or have questions ? Just reply to this email , we'd love to help."

    };
};


export {
    emailVerificationMailgenContent ,
    fogetPasswordMailgenContent,
    sendEmail,
}
