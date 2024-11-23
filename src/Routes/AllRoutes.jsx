import { Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import Account from "../component/Account";
import Login from "../component/Login";
import Register from "../component/Register";
import ErrorPage from "../component/ErrorPage";
import Countdown from "../CountDown";
import UserProfile from "../component/UserDetail/UserProfile"
import UserAccount from "../component/UserDetail/UserAccount";
import ViewsDetail from "../component/UserDetail/ViewsDetail"
import { UseAuth } from "../AuthProvider";
import AdimnAccount from "../component/AdminPanal/AdminAccount";
import AllUsers from "../component/AdminPanal/AllUsers";
const AllRoutes = () => {
    const { isLoggedin,userDetail } = UseAuth();
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {
                    !isLoggedin ?
                       ( <Route path="/account" element={<Account />}>
                            <Route path="/account" element={<Login />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>)
                        :
                        (
                            userDetail.isAdmin ?

                                (<Route path="/account" element={<UserAccount />}>
                                    <Route path="profile" element={<UserProfile />} />
                                    <Route path="UserDetail" element={< ViewsDetail />} />
                                </Route>)
                                :
                                (<Route path="/account" element={<AdimnAccount />}>
                                    <Route path="profile" element={<UserProfile />} />
                                    <Route path="allusers" element={< AllUsers />} />
                                    <Route path="UserDetail" element={< ViewsDetail />} />
                                </Route>)

                        )
                }
                <Route path="/countdown" element={<Countdown />} />
                <Route path="*" element={<ErrorPage />} />

            </Routes>
        </>
    )
}
export default AllRoutes;