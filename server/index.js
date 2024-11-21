import express from "express";
import router from "./Router/AllRoutes.js";
import dotenv from "dotenv"
import Data from "./Db/data.db.js";
const app = express();

dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.json())
Data();
app.use("/api",router);

app.listen(port,()=>{
    console.log(`server run successfully on port ${port}`)
})