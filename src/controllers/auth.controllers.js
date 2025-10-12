import {User} from "../model/user.model.js"
import {ApiResponse } from "../utils/api-response.js"
import {asyncHandler} from "../utils/async-handler.js"
import {ApiError} from "../utils/api-error.js"
import{sendEmail} from "../utils/mail.js"

const generateAccessAndRefrehTokens = async(userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({validateBeforSave: false})
        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Error generating tokens", [error.message]);
    }
}
const registerUser = asyncHandler(async(req, res)=>{
    const {email , username , password , role } = req.body
    
  const existerUser =   User.findone({
        $or:[{username} , {email}]
    })

    if(existerUser){
        throw new ApiError(409 , "User with email or name already exists" ,[])
    }

   const user = await   User.create({
        email,
        password,
        isEmailVerified: false ,
    })
const {unHashedToken , hashedToken , tokenExpiry} =
    user.generateTemporaryToken();

    user.emailVerificationToken = hashedToken;
    user.emailVerificationExpiry = tokenExpiry;

    await user.Save({validateBeforSave:false})
    await sendEmail({
        email: user?.email,
        subject: "please verify your email.",
        MailgenContent: emailVerificationMailgenContent(
            user.username,
            `${req.protocol}://${req.get("host")}/api/v`
        )
    })
}) 

export { registerUser };