import defaultIamge from "../../images/defaultUser.jpg"
import { UseAuth } from "../../AuthProvider";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const AllUsers = () => {
    const { allUserData } = UseAuth();
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState("");

    const [allUsers, setAllUsers] = useState([]);

    const FindUserData = (e) => {
        e.preventDefault();
        if (item && allUserData) {

            const data = allUserData.filter((user) => {
                return user._id === item || user.email === item;
            })

            return setAllUsers(data);
        } else {
            return setAllUsers(allUserData);
        }
    }
    useEffect(() => {
        if (allUserData) {
            // console.log("User found:", user);
            setAllUsers(allUserData)
            setLoading(true)
        } else {
            console.log("User not found or waiting for data.");
        }
    }, [allUserData])
    if (!loading) {
        return <div className="fixed top-0 right-0  left-0 sm:left-40 bottom-0 h-screen w-full flex justify-center items-center">
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        </div>
    }

    return (
        <>
            <div className="flex flex-col w-full items-center pt-4 mt-6 mb-10 gap-4 ">

                <form className="max-w-[480px] w-full px-4">
                    <div className="relative">
                        <input type="text" name="searchItem" className="w-full border h-12 shadow p-4 rounded-full" placeholder="search User by email or id" value={item} onChange={(e) => setItem(e.target.value)} />
                        <button onClick={FindUserData}>
                            <svg className="text-gray-400 h-5 w-5 absolute top-3.5 right-3 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {allUsers.length > 0 ? (

                    allUsers.map((user, i) => (
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


