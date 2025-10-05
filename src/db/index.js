import mongoose from "mongoose"



//mongoose.connect(process.env.MONGO_URI) , NOT SAFE WAY 


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.error("MongoDB connected ");

    } catch( error) {
        console.error("MongoDB connection failed ", error);
        process.exit(1);
        
    }

}

export default connectDB