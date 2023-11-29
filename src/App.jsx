import './App.css';
import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./constants/theme";
import SignIn from './scenes/auth/SignIn'
import SignUp from './scenes/auth/SignUp'
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import UserManage from "./scenes/UserManagement";
import AvatarManage from "./scenes/AvatarManagement";
import ProfileManage from "./scenes/ProfileManagement";
import CustomSnackbar from "./components/CustomSnackbar ";
import ProtectedRoute from "./routing/ProtectedRoute"


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';
  const { token } = useSelector((state) => state.auth);

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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isAuthPage && <Sidebar isSidebar={isSidebar} onSnackbarOpen={handleSnackbarOpen} />}
          <main className={isAuthPage ? "fullWidthContent" : "content"}>
            {!isAuthPage && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<Navigate to={token ? "/users" : "/signin"} replace />} />
              <Route path="/signin" element={<SignIn onSnackbarOpen={handleSnackbarOpen} />} />
              <Route path="/signup" element={<SignUp onSnackbarOpen={handleSnackbarOpen} />} />
              <Route path="/users" element={<ProtectedRoute><UserManage onSnackbarOpen={handleSnackbarOpen} /></ProtectedRoute>} />
              <Route path="/avatars" element={<ProtectedRoute><AvatarManage /></ProtectedRoute>} />
              <Route path="/profiles" element={<ProtectedRoute><ProfileManage /></ProtectedRoute>} />
            </Routes>
            <CustomSnackbar
              open={snackbarInfo.open}
              onClose={handleCloseSnackbar}
              severity={snackbarInfo.severity}
              message={snackbarInfo.message}
            />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;
