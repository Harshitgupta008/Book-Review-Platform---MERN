import express from "express";
import router from "./Router/AllRoutes.js";
const app = express();

const port = 3000 || 4000;

app.use("/api",router);

app.listen(port,()=>{
    console.log(`server run successfully on port ${port}`)
})