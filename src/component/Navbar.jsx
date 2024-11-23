import { Link, useLocation } from "react-router-dom";
import defaultImgae from "../images/defaultUser.jpg";
import { UseAuth } from "../AuthProvider";
const Navbar = () => {
    const { isLoggedin } = UseAuth();
    const location = useLocation();
    return (
        <>
            <nav className="bg-gray-800 w-full text-white flex items-center p-6 justify-between">
                <div><a href="https://github.com/Harshitgupta008">Harshit</a></div>
                <div className="flex gap-4 items-center justify-center">
                    <Link to={"/"} className={`${location.pathname === "/" ? "text-blue-600" : "text-white"}`}>Home</Link>
                    {
                        !isLoggedin ?
                            <Link to={"/account/login"} className={`${location.pathname === "/account" || location.pathname.startsWith("/account") ? "text-blue-600" : "text-white"}`}>Account</Link>
                            :
                            <Link to={"/account/profile"} className={` h-fit w-fit flex gap-1 border-2 border-white rounded-2xl px-1 py-1 hover:bg-white hover:text-black ${location.pathname === "/account" || location.pathname.startsWith("/account") ? "text-black bg-white" : "text-white"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                </svg>

                                <img src={defaultImgae} className="h-5 w-5  rounded-full" alt="" />
                            </Link>
                    }

                </div>

            </nav>
        </>
    )
}
export default Navbar;