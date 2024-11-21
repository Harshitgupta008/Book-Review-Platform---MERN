import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const Db = process.env.MONGO_URL;

const Data = async ()=>{
    try {
        await mongoose.connect(Db);
        console.log("data successfully working...")
    } catch (error) {
        console.log("error find in database (Data)"+error);
    }
}
export default Data;