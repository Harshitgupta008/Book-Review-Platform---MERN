import { useEffect } from "react";
import { useState } from "react";
import defaultdp from "../images/defaultUser.jpg"
import { UseAuth } from "../AuthProvider";
const BooksReview = ({ booksid }) => {
    const { userDetail } = UseAuth();
    const [booksReview, setBooksReview] = useState([]);


    const DeleteReview = async (id) => {
        if (!id) return window.alert("find error #$%");

        try {
            const response = await fetch(`/api/review-delete/${id}`, {
                method: "DELETE",
            })

            if (response.ok) {
                return window.alert("Review Deleted");
            } else if (response.status === 400) {
                return window.alert("Server error *&%(#$")
            }

        } catch (error) {
            console.log("find Error in delete review :: " + error);
        }

    }

    const AllgetReview = async () => {
        try {
            const response = await fetch(`/api/books-review/${booksid}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            });
            if (response.ok) {
                const data = await response.json();
                return setBooksReview(data);
            } else {
                console.error(`Failed to fetch reviews. Status: ${response.status}`);
            }
        } catch (error) {
            console.error("Error in AllgetReview:", error);
        }
    };

    useEffect(() => {
        if (booksid) {
            AllgetReview();
        }
    }, [booksid, booksReview]);

    return (
        <>
            <div className="h-fit w-full bg-white py-5 px-6">
                {
                    booksReview.length <= 0 ?
                        <h1 className="text-center text-gray-500">No reviews</h1> :
                        booksReview.map((reviewer, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-center gap-4 border-b pb-5 mb-5">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <img src={!reviewer.image ? defaultdp : reviewer.image} alt="userdp" className="w-16 h-16 rounded-full object-cover" />
                                    {
                                        userDetail.isAdmin === false ? ""
                                            :
                                            <button onClick={() => DeleteReview(reviewer._id)} className="bg-red-500 text-white px-4 py-1 rounded-3xl">Delete</button>
                                    }
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold "><span onClick={() => window.alert("page are under maintenance")} className="hover:text-red-500 cursor-pointer">{reviewer.name}</span></h2>
                                    <p className="text-sm text-gray-500">{reviewer.email}</p>
                                </div>

                                <div className="flex-1 mt-2 md:mt-0">
                                    <p className="text-base text-gray-700">{reviewer.message}</p>
                                </div>
                            </div>
                        ))
                }
            </div>

        </>
    )
}
export default BooksReview;