import { UseAuth } from "../../AuthProvider";
const ViewsDetail = () => {
    const { userDetail } = UseAuth();
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
                                    {userDetail.name}
                                </dd>
                            </div>
                            <div className="bg-white  px-4 py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    Place
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {userDetail.place}
                                </dd>
                            </div>
                            <div className="bg-gray-50  px-4 py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {userDetail.email}
                                </dd>
                            </div>
                            <div className="bg-gray-50  px-4 py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    Phone Number
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {userDetail.number}
                                </dd>
                            </div>
                            {
                                userDetail.isAdmin === false ? ""
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

                            {/* structure i will update after some time */}

                            {/* <div className="bg-white px-4  py-5 grid grid-cols-2  sm:grid-cols-3 sm:gap-12 ">
                                <dt className="text-sm font-medium text-gray-500">
                                    Total Review
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    0
                                </dd>
                            </div> */}
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
export default ViewsDetail;