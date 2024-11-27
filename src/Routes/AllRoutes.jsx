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
import FindUser from "../component/AdminPanal/FindUser";
import Books from "../component/AdminPanal/Books";
import AllBooks from "../component/AdminPanal/AllBooks";
import AddBooks from "../component/AdminPanal/AddBooks";
import BooksDetail from "../component/BooksDetail";
const AllRoutes = () => {
    const { isLoggedin, userDetail } = UseAuth();
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {
                    !isLoggedin ?
                        (<Route path="/account" element={<Account />}>
                            <Route path="/account" element={<Login />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>)
                        :
                        (
                            userDetail.isAdmin === false ?

                                (
                                    <>
                                        <Route path="/account" element={<UserAccount />}>
                                            <Route path="" element={<UserProfile />} />
                                            <Route path="profile" element={<UserProfile />} />
                                            <Route path="UserDetail" element={< ViewsDetail />} />
                                        </Route>
                                        <Route path="/booksdetail/:id" element={< BooksDetail />} />
                                    </>
                                )
                                :
                                (
                                    <>
                                        <Route path="/account" element={<AdimnAccount />}>
                                            <Route path="" element={<UserProfile />} />
                                            <Route path="profile" element={<UserProfile />} />
                                            <Route path="allusers" element={< AllUsers />} />
                                            <Route path="UserDetail" element={< ViewsDetail />} />
                                            <Route path="books" element={< Books />} >
                                                <Route path="" element={< AllBooks />} />
                                                <Route path="allbooks" element={< AllBooks />} />
                                                <Route path="addbooks" element={< AddBooks />} />
                                            </Route>
                                            <Route path="allusers/:id" element={< FindUser />} />
                                        </Route>
                                        <Route path="/booksdetail/:id" element={< BooksDetail />} />
                                    </>
                                )

                        )
                }
                <Route path="/countdown" element={<Countdown />} />
                <Route path="*" element={<ErrorPage />} />

            </Routes>
        </>
    )
}
export default AllRoutes;