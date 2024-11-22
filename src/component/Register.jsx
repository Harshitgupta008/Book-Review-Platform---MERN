import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const [user, setUser] = useState({
        name: "", email: "", number: "", place: "", password: ""
    })

    const Navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const RegisterUser = async (e) => {
        e.preventDefault();
        const { name, email, number, place, password } = user;
        if (!name || !email || !number || !place || !password) return window.alert("All details are mendetory");

        try {
            const response = await fetch("/api/user-register", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(user)
            });

            if (response.status === 401) return window.alert("User already exist");

            if (response.status === 400) return window.alert("Fetch/Error/$#");

            if (response.ok){
                window.alert("Registrataion Successfully");
                return Navigate("/account/login");
            }

        } catch (error) {
            console.log("error found in Registerpage :: " + error);
            return window.alert("error :: "+error);
        }

    }
    return (

        <>
            <section>
                <div className="flex flex-col items-center justify-center  mx-auto md:h-fit py-5 ">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register your account
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" name="name" value={user.name} onChange={handleInput} id="name" placeholder="Enter your name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" value={user.email} onChange={handleInput} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a valid email" required="" />
                                </div>
                                <div>
                                    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone-number</label>
                                    <input type="number" name="number" value={user.number} onChange={handleInput} id="number" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a phone number" required="" />
                                </div>
                                <div>
                                    <label htmlFor="place" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Place</label>
                                    <input type="text" name="place" value={user.place} onChange={handleInput} id="place" placeholder="Enter your Location" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" value={user.password} onChange={handleInput} id="password" placeholder="Enter your Password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <button onClick={RegisterUser} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    already have an account? <Link to={"/account/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register;