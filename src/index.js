import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./.env",
})
 

const port = process.env.PORT || 3000;


app.get('/' , ( req, res) => {
    console.log("Welcome");
})

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port https://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("mongoDB connection error", err);
    process.exit(1);

  });
     



  