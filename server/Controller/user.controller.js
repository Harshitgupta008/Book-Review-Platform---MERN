import User from "../Modles/UserShema.js"
import bcrypt from "bcrypt"

const HealthCheck = (req, res) => {
    return res.status(200).send("server working properlly")
}

const UserRegister = async (req, res) => {
    const { name, email, number, place, password } = req.body;
    if (!name || !email || !number || !place || !password) return res.status(400).send("All field are mendetory");
    try {
        const check = await User.findOne({ email });
        if (check) return res.status(401).send("User Already Exist");

        const response = await new User({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            place: req.body.place,
            password: req.body.password,
        });

        await response.save()
        return res.status(200).send("Registrataion Successfully")
    } catch (error) {
        console.log("error find in register in controller :: " + error)
        return res.status(400).send("Error :: " + error);
    }
}
const UserLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("All field are mendetory");
    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser) return res.status(404).send("User not found");

        const checkPassword = await bcrypt.compare(password, checkUser.password);
        if (checkPassword) {
            const Payload = {
                _id: checkUser._id,
                email: checkUser.email,
                number: checkUser.number,
                name: checkUser.name,
                place: checkUser.place
            }
            const token = await checkUser.GenerateToken(Payload);
            return res.status(200).json({ "booksUser": token });
        } else {
            return res.status(404).send("User not found")
        }


    } catch (error) {
        console.log("error find in login in controller :: " + error)
        return res.status(400).send("Error :: " + error);
    }
}

const GetUser = async (req, res) => {
    try {

        const data = await req.user;
        return res.status(200).json({ data });

    } catch (error) {

        console.log("error find in getuser data in controller :: " + error)
        return res.status(400).send("Error :: " + error);
    }
}

const GetAllUser = async (req, res) => {
    try {
        const UserID =  req.params.id;
        const data = await User.find({ _id: { $nin: [UserID] } });
        
        return res.status(200).send( data );

    } catch (error) {

        console.log("error find in GetAllUser data in controller :: " + error)
        return res.status(400).send("Error :: " + error);
    }
}
export { HealthCheck, UserRegister, UserLogin, GetUser, GetAllUser };