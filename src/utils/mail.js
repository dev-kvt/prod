import Mailgen from "mailgen";


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


