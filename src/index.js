import dotenv from "dotenv"
import app from "./app.js";

dotenv.config({
    path:"./.env",
})
 

const port = process.env.PORT || 3000;


app.get('/' , ( req, res) => {
    console.log("Welcome");
})

app.listen( port , () => {
    console.log(`Example app listening on port https://localhost:${port}`)
});
 


