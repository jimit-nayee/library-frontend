import React, { useState, useContext, createContext } from "react";

const AUthContext = createContext(null);

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [role, setRole] = useState('');

    const addRole = (role) => {
        setRole(role);
    }

    const login = (isLoggedIn) => {
        setIsLoggedIn(true);
    };
    const logout = () => {
        setIsLoggedIn(false);
    };
    return (
        <AUthContext.Provider value={{ isLoggedIn, addRole, role, login, logout }}>
            {children}
        </AUthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AUthContext);
};