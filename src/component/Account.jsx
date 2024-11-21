import { Link, useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom';
const Account = () => {
    const location = useLocation();
    return (
        <>
            <div className="flex justify-center items-center gap-8 mt-5 mb-8">
                <button><Link className={`${location.pathname === "/account/login" || location.pathname === "/account" ? "bg-gray-800 px-5 py-2 rounded-lg text-white" : "text-black px-5 py-2 rounded-lg"}`} to={"login"}>Login</Link></button>
                <button><Link className={`${location.pathname === "/account/register"  ? "bg-gray-800 px-5 py-2 rounded-lg text-white" : "text-black px-5 py-2 rounded-lg"}`} to={"register"}>Register</Link></button>
            </div>
            <Outlet />
        </>
    )
}
export default Account;