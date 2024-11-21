import { createContext, useContext, useState } from "react"

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [name, setName] = useState("harshit");

    return <AuthContext.Provider value={{ name }}>
        {children}
    </AuthContext.Provider>
}

export const UseAuth = ()=>{
    return useContext(AuthContext);
}