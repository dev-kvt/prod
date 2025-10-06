import {ApiResponse} from "../utils/api-response.js"
// catch errors with higher order async function 
/*
const healthCheck = async (req, res , next) => {
    try {
        const user = await getUserFromDB();
        res
            .status(200)
            .json(new ApiResponse(200, { message: "Server is Running" }));
    } catch (error) {
        next(err)
    }
}
*/
const healthCheck = asyncHandler(asyncHandler(async(req, res) => {
    res
    .status(200)
    .json( new ApiResponse(200 , { message : "Server is still Runnning"}))
}));

export { healthCheck};

  