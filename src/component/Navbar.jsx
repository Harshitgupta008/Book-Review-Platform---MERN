import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation(); 
    return (
        <>
            <nav className="bg-gray-800 w-full text-white flex items-center p-6 justify-between">
                <div><a href="https://github.com/Harshitgupta008">Harshit</a></div>
                <div className="flex gap-4">
                    <Link to={"/"} className={`${location.pathname === "/" ? "text-blue-600" : "text-white"}`}>Home</Link>
                    <Link to={"/account/login"} className={`${location.pathname === "/account" || location.pathname.startsWith("/account") ? "text-blue-600" : "text-white"}`}>Account</Link>
                </div>

            </nav>
        </>
    )
}
export default Navbar;