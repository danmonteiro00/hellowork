import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../service/api"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user, token');

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const response = await createSession(email, password);

        console.log(response);
        
        const loggedUser = response.data.response.user;
        const token = response.data.response.accessToken;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        setUser({ loggedUser })
        navigate("/")
    };

    const logout = () => {
        console.log("logout")
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login")
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!localStorage.getItem("user"), user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
}