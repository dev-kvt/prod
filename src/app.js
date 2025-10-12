import express from "express"
import cors from "cors"
import healthCheckRouter from "./routes/healthcheck.route.js"

import authRouter from "./routes/auth.routes.js"
const app = express();


// basic configurations
app.use(express.json( {  limit : "16kb"}));
app.use(express.urlencoded({extended : true , limit: "16kb"}));
app.use(express.static("public"));


//cors configuration 
app.use(cors({
    origin : process.env.CORS_ORIGIN|| "https://localhost:5173",
    credentials : true ,
    methods:["GET" , "POST" , "PUT " , " PATCH" , " DELETE" , "OPTIONS"],
    allowHeaders:["Content-Type" , " Authorization"],
}),
);

// import the routes 

app.use("/api/v1/healthcheck" , healthCheckRouter);
app.use('/api/c1/auth' , authRouter);



export default app;

