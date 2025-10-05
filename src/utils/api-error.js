class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something's Off",
        errors =[],
        stack = ""


    ){
        super(message)
        this.message = message 
        this.statusCode = statusCode
        this.data = null 
        this.success = false 
        thi.errors = errors



        if ( stack){
            this.stack = stack 

        }
        else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
}


export { ApiError}