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
    

    useEffect(() => {
    }, [userDetail, token]);
    return <AuthContext.Provider value={{ isLoggedin, GenrateToken, userDetail }}>
        {children}
    </AuthContext.Provider>
}

export const UseAuth = () => {
    return useContext(AuthContext);
}