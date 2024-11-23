import defaultIamge from "../../images/defaultUser.jpg"
import { UseAuth } from "../../AuthProvider";
const AllUsers = () => {
    const { allUserData } = UseAuth();
    
    return (
        <>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {allUserData.length > 0 ? (
                    allUserData.map((user, i) => (
                        <div
                            key={user._id || i}
                            className="bg-gray-100 dark:bg-gray-700 relative hover:scale-105 cursor-pointer shadow-xl h-fit w-fit hover:shadow-2xl rounded-xl p-5 transition-all duration-500 transform"
                        >
                            <div className="flex flex-wrap items-center gap-4">
                                <img
                                    src={defaultIamge}
                                    alt="User"
                                    className="h-32 w-32 rounded-full"
                                />
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-white">{user.name || "Unknown User"}</h1>
                                    <p className="text-gray-400">{user.email || "No Email"}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No users found.</p>
                )}
            </div>
        </>
    )
}
export default AllUsers;


