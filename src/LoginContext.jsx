import React, { createContext, useState, useEffect } from 'react';

// Create context
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    // Check if the user is already logged in from localStorage
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true'; // Fetch login state from localStorage
    });

    const [showSignIn, setShowSignIn] = useState(false);

    useEffect(() => {
        // Persist the login state in localStorage
        localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
    }, [isLoggedIn]);

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, setShowSignIn }}>
            {children}
        </LoginContext.Provider>
    );
};
