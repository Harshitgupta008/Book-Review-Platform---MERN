import { Link } from "react-router-dom"

const Footer = () => {
    return <>

        <footer className="bg-white shadow mt-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/Harshitgupta008" className="hover:underline">BooksReview - Harshit</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link className="hover:underline me-4 md:me-6 hover:text-white">About</Link>
                    </li>
                    <li>
                        <Link className="hover:underline me-4 md:me-6 hover:text-white">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className="hover:underline hover:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>

    </>
}
export default Footer;