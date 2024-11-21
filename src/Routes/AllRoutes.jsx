import { Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import Account from "../component/Account";
import Login from "../component/Login";
import Register from "../component/Register";
import ErrorPage from "../component/ErrorPage";
import Countdown from "../CountDown";

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Account />}>
                    <Route path="/account" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                <Route path="/countdown" element={<Countdown />} />
                <Route path="*" element={<ErrorPage />} />

            </Routes>
        </>
    )
}
export default AllRoutes;