import { useState } from "react";

const GiveReview = ({ setReviewModle }) => {
    const [review, setReview] = useState({
        name: "", email: "", message: ""
    })

    const HandleInput = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
    }

    const SubmitReview = (e) => {
        e.preventDefault();
        setReviewModle(false);
    }
    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="relative bg-white p-6 w-full sm:w-96 rounded-lg shadow-lg max-h-full overflow-y-auto">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" onChange={HandleInput} value={review.name} name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" onChange={HandleInput} value={review.email} name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Review</label>
                            <textarea id="message" onChange={HandleInput} value={review.message} name="message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500" rows="4" placeholder="Give Your Review 😊"></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button type="button" onClick={SubmitReview} className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div onClick={() => setReviewModle(false)} className="absolute top-1 text-black right-2 cursor-pointer hover:text-red-600">&#128473;</div>
                </div>
            </div>

        </>
    )
}
export default GiveReview;