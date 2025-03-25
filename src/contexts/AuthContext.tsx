import React, { createContext, useState, useContext, useEffect, useRef } from "react";
import authService from "../services/authService";
import api, { setupResponseInterceptor, setupRequestInterceptor } from "../services/api";

interface AuthContextProps {
    user: any;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = async (username: string, password: string): Promise<boolean> => {
        try {
            const response = await authService.signIn(username, password);

            if (!response) {
                throw new Error("Invalid response data");
            }

            const { user } = response;

            console.log(response)

            if (!user) {
                throw new Error("Invalid response data");
            }

            setUser(user);
            setIsAuthenticated(true);

            return true;
        } catch (error) {
            console.error("Login failed:", error);
            return false;
        }
    };

    const logout = () => {    
        setUser(null);
        setIsAuthenticated(false);
    
        delete api.defaults.headers["Authorization"];
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};