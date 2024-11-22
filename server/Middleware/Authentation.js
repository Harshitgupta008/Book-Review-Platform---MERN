import jwt from "jsonwebtoken";
import User from "../Modles/UserShema.js"
import dotenv from "dotenv";

dotenv.config();

const Authentation = async (req, res, next) => {

    const token = await req.header("Authorization");
    try {
        if (!token) {
            return res.status(400).send("User Not Authorized");
        } else {

            const jwtToken = token.replace("Bearer", "").trim();

            const isVerified = await jwt.verify(jwtToken, process.env.SECREATE_KEY);

            const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });

            req.user = userData;
            req.token = token;
            req.UserId = userData._id;
            next();
        }


    } catch (error) {
        console.log("error found in Authentation :: " + error);
    }
}

export default Authentation;