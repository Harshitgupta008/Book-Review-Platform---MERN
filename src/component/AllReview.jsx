import { UseAuth } from "../AuthProvider";
import defaultbookimage from "../images/defaultimage.jpg"

const AllReview = () => {
    const { userReview } = UseAuth();

    const DeleteReview = async (id) => {
        if (!id) return window.alert("find error #$%");

        try {
            const response = await fetch(`/api/review-delete/${id}`, {
                method: "DELETE",
            })

            if(response.ok){
                return window.alert("Review Deleted");
            }else if(response.status === 400){
                return window.alert("Server error *&%(#$")
            }

        } catch (error) {
            console.log("find Error in delete review :: " + error);
        }
    }
    

    return (
        <>
            {
                userReview.length <= 0 ?
                    (
                        <h1 className="text-center text-xl font-semibold mt-10">No review found</h1>
                    ) :
                    userReview.map((review, i) => (
                        <div key={i} className="w-lg mx-auto my-4 p-2 bg-white rounded-lg shadow-lg">
                            <div className="flex flex-wrap items-center space-x-4">
                                <img src={!review.image ? defaultbookimage : review.image} alt="booksimage" className="w-24 h-32 rounded-xl" />
                                <button onClick={() => DeleteReview(review._id)} className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition duration-300">Delete Review</button>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-700 text-base">{review.message}</p>
                            </div>

                        </div>
                    ))
            }


        </>
    )
}
export default AllReview;