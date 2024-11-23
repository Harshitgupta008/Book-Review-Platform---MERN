import { useEffect, useState } from "react";
import { UseAuth } from "../../AuthProvider";
import { useParams } from "react-router-dom";
const FindUser = () => {
    const { allUserData } = UseAuth();
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (allUserData && allUserData.length > 0) {
            const newUser = allUserData.find(data => data._id === id);
            setUser(newUser || null);
        }
        if (user) {
            // console.log("User found:", user);
            setLoading(true)
        } else {
            console.log("User not found or waiting for data.");
        }
    }, [allUserData, id, user]);

   
    if(!loading){
        return <div className="fixed top-0 right-0  left-0 sm:left-40 bottom-0 h-screen w-full flex justify-center items-center">
            <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        </div>
    }

    return (
        <>
            <div className="flex w-full items-center justify-center ">
                <div className="bg-white w-full   max-w-lg shadow  sm:rounded-lg">
                    <div className="border-t border-gray-200">
                        <dl>

                            <div className="bg-gray-50  px-4 py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.name}
                                </dd>
                            </div>
                            <div className="bg-white  px-4 py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    Place
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.place}
                                </dd>
                            </div>
                            <div className="bg-gray-50  px-4 py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.email}
                                </dd>
                            </div>
                            <div className="bg-gray-50  px-4 py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    Phone Number
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.number}
                                </dd>
                            </div>
                            {
                                user.isAdmin === false ? ""
                                    :

                                    <div className="bg-gray-50  px-4 py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Status
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            Admin
                                        </dd>
                                    </div>
                            }
                            <div className="bg-gray-50  px-4 py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    Password
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    **************
                                </dd>
                            </div>
                            <div className="bg-white px-4  py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    Total Review
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    0
                                </dd>
                            </div>
                            <div className="bg-gray-50  px-4 py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    About
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt pariatur incidunt labore quasi beatae, eum quidem molestias veritatis dolor itaque harum hic, architecto ex inventore libero accusantium corporis reiciendis ullam praesentium repellendus maxime, perferendis corrupti quisquam. Omnis.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FindUser;