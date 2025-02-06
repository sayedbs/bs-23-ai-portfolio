"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (auth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const login = (password) => {
        const storedPassword = "mysecurepassword"; // Hardcoded for now
        if (password === storedPassword) {
            localStorage.setItem("auth", "true");
            setIsAuthenticated(true);
            router.push("/dashboard");
        } else {
            alert("Invalid password");
        }
    };

    const logout = () => {
        localStorage.removeItem("auth");
        setIsAuthenticated(false);
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
