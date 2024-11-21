import React from 'react';
import { Link } from 'react-router-dom';

const Countdown = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 fixed top-0 right-0 left-0 bottom-0">
            <div className="min-h-screen flex flex-col justify-center items-center">
                <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" className="mb-8 h-40"/>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">Site is under maintenance</h1>
                    <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">We're working hard to improve the user experience. Stay tuned! ::<span className='text-blue-600'> :: Harshit Gupta</span></p>
                    <div className="flex space-x-4">
                        <Link  className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded dark:bg-blue-700 dark:hover:bg-blue-600">Contact Us</Link>
                        <Link to={"/"} className="border-2 border-blue-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white">Home</Link>
                    </div>
            </div>
        </div>
    );
};

export default Countdown;
