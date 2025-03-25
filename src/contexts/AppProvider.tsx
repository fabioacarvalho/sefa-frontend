// src/contexts/AppProvider.tsx
import React from "react";
import { AuthProvider } from "./AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

interface AppProviderProps {
    children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <AuthProvider>
            {children}
            <ToastContainer autoClose={3000} />
        </AuthProvider>
    );
};

export default AppProvider;