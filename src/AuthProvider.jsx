import { createContext, useContext, useState, useEffect, useMemo } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("booksUSer"));
    const [userDetail, setUserDetail] = useState("");
    const [allUserData, setAllUserData] = useState([]);
    const [allbooksdata, setAllBooksData] = useState([]);

    const isLoggedin = !!token;

    // use after when you have large data
    // const memoizedUserDetail = useMemo(() => userDetail, [userDetail]);
    // const memoizedAllUserData = useMemo(() => allUserData, [allUserData]);

    const GenrateToken = (tokens) => {

        setToken(tokens);
        return localStorage.setItem("booksUSer", tokens);

    }
    const RemoveToken = () => {
        setToken("");
        setUserDetail("");
        setAllUserData([]);
        return localStorage.removeItem("booksUSer");
    }

    const UserAuth = async () => {
        if (!token) return;
        try {
            const response = await fetch("/api/getuserdata", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
                const user = await response.json();
                setUserDetail(user.data);

            } else {
                console.log("token not found")
            }
        } catch (error) {
            console.log(`error in UserAuth contextApi :: ${error}`)
        }
    }

    const AllUser = async (userDetail) => {
        try {


            const response = await fetch(`/api/allusers/${userDetail._id}`, {
                method: "GET",
            });

            if (response.status === 200) {
                const user = await response.json();

                return setAllUserData(user);
            } else {
                return console.log("Error: users not found");
            }

        } catch (error) {
            console.log(`Error in AllUser function: ${error}`);
        }
    }
    const BooksData = async () => {
        try {


            const response = await fetch(`/api/all-books`, {
                method: "GET",
                headers:{
                    "content-type": "application/json"
                }
            });

            if (response.status === 200) {
                const allbook = await response.json();

                return setAllBooksData(allbook);
            } else {
                return console.log("Error: users not found");
            }

        } catch (error) {
            console.log(`Error in AllUser function: ${error}`);
        }
    }

    useEffect(() => {
        UserAuth();

    }, [token]);

    useEffect(() => {
        if (userDetail) {
            AllUser(userDetail);
        }

    }, [userDetail]);

    useEffect(() => {
        BooksData();
    }, [allbooksdata]);


    return <AuthContext.Provider value={{token, isLoggedin, userDetail, allUserData, allbooksdata, GenrateToken, RemoveToken }}>
        {children}
    </AuthContext.Provider>
}

export const UseAuth = () => {
    return useContext(AuthContext);
}