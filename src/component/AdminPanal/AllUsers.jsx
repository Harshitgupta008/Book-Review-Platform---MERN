import defaultIamge from "../../images/defaultUser.jpg"
import { UseAuth } from "../../AuthProvider";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const AllUsers = () => {
    const { allUserData } = UseAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (allUserData) {
            // console.log("User found:", user);
            setLoading(true)
        } else {
            console.log("User not found or waiting for data.");
        }
    }, [allUserData])
    if (!loading) {
        return <div className="fixed top-0 right-0  left-0 sm:left-40 bottom-0 h-screen w-full flex justify-center items-center">
            <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        </div>
    }

    return (
        <>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {allUserData.length > 0 ? (
                    allUserData.map((user, i) => (
                        <Link to={`/account/allusers/${user._id}`} key={user._id || i} className="bg-gray-100 dark:bg-gray-700 relative hover:scale-105 cursor-pointer shadow-xl h-fit w-fit hover:shadow-2xl rounded-xl p-5 transition-all duration-500 transform">
                            <div className="flex flex-wrap items-center gap-4">
                                <img src={defaultIamge} alt="User" className="h-32 w-32 rounded-full" />
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-white">{user.name || "Unknown User"}</h1>
                                    <p className="text-gray-400">{user.email || "No Email"}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-400">No users found.</p>
                )}
            </div>
        </>
    )
}
export default AllUsers;


