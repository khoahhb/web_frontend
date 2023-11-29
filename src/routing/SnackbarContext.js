import React, { createContext, useContext, useState } from 'react';

const SnackbarContext = createContext();

export const useSnackbarContext = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
    const [snackbarInfo, setSnackbarInfo] = useState({
        open: false,
        message: '',
        severity: 'info',
    });

    const handleSnackbarOpen = (message, severity) => {
        setSnackbarInfo({
            open: true,
            message: message,
            severity: severity,
        });
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarInfo({ ...snackbarInfo, open: false });
    };

    return (
        <SnackbarContext.Provider value={{ handleSnackbarOpen, handleCloseSnackbar, snackbarInfo }}>
            {children}
        </SnackbarContext.Provider>
    );
};
