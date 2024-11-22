import ImageBannerHome from "./homeComponent/ImageBannerHome";
import { useState } from "react";

const Home = () => {

    const [item, setItem] = useState("");

    return (
        <>
            <ImageBannerHome />

            <div className="flex flex-col w-full items-center pt-4 mt-6 gap-4 ">
                <p className="text-4xl md:text-5xl font-extrabold text-gray-600">Search Book</p>
                <form className="max-w-[480px] w-full px-4">
                    <div className="relative">
                        <input type="text" name="searchItem" className="w-full border h-12 shadow p-4 rounded-full" placeholder="search" value={item} onChange={(e) => setItem(e.target.value)} />
                        <button type="submit">
                            <svg className="text-gray-400 h-5 w-5 absolute top-3.5 right-3 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col w-full  justify-start px-3 mt-10  gap-4 ">
                {item && <p className="text-2sm md:text-3xl font-extrabold text-black">Search Results for : <span className="text-gray-600">{item}</span></p>}

            </div>
        </>
    )
}
export default Home;