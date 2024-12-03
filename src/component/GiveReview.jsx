import { useState } from "react";
import { UseAuth } from "../AuthProvider";

const GiveReview = ({ setReviewModle, booksid }) => {
    const { userDetail } = UseAuth();

    const [message, setMessage] = useState("")



    const SubmitReview = async (e) => {
        e.preventDefault();
        const { name, email } = userDetail;
        if (!email || !name) return window.alert("something wrong wait a minute");
        if (!message) return window.alert("Fill your review");
        try {
            const response = await fetch(`/api/submit-review/${booksid}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name, email, message,
                })
            });

            if (response.ok) {
                window.alert("Thaks for giving review of this book");
                setMessage("");
                return setReviewModle(false);
            } else if (response.status === 400) {
                setMessage("");
                return window.alert("found error#$%^&&");
            }
        } catch (error) {
            console.log("error found in submitreview :: " + error);
        }
    }
    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="relative bg-white p-6 w-full sm:w-96 rounded-lg shadow-lg max-h-full overflow-y-auto">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" readOnly value={userDetail.name} name="name" className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" readOnly value={userDetail.email} name="email" className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Review</label>
                            <textarea id="message" onChange={(e) => setMessage(e.target.value)} value={message} name="message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500" rows="4" placeholder="Give Your Review 😊"></textarea>
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