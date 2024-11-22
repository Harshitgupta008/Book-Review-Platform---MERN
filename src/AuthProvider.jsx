import { createContext, useContext, useState, useEffect } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("booksUSer"));
    const [userDetail, setUserDetail] = useState("");

    const isLoggedin = !!token;

    const GenrateToken = (tokens) => {

        setToken(tokens);
        return localStorage.setItem("booksUSer", tokens);

    }

    const UserAuth = async () => {
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
            console.log(`error in Userfetching in contact form :: ${error}`)
        }
    }

    useEffect(() => {
        UserAuth();
    }, [userDetail, token]);
    return <AuthContext.Provider value={{ isLoggedin, GenrateToken, userDetail }}>
        {children}
    </AuthContext.Provider>
}

export const UseAuth = () => {
    return useContext(AuthContext);
}