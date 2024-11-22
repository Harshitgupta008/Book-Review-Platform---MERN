import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const UserShema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    place: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
}, { timestamps: true });

UserShema.pre("save", async function(next){
    try {
        if(this.isModified("password")){
            this.password = await bcrypt.hash(this.password, 10);
        }
        next();
    } catch (error) {
        console.log("error found in bcrypt usermodle :: "+error)
    }
})
UserShema.methods.GenerateToken = async function(payload){
    try {
        const token = await jwt.sign(payload,process.env.SECREATE_KEY);
        return token;
    } catch (error) {
        console.log("error found to generate token usermodle :: "+error);
    }
}
const User = mongoose.model("BookUsers",UserShema);

export default User;