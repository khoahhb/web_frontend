import './App.css';
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./constants/theme";
import SignIn from './scenes/auth/SignIn'
import SignUp from './scenes/auth/SignUp'
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import UserManage from "./scenes/UserManagement";
import AvatarManage from "./scenes/AvatarManagement";
import ProfileManage from "./scenes/ProfileManagement";
import CustomSnackbar from './components/CustomSnackbar ';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/';

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
          {!isAuthPage && <Sidebar isSidebar={isSidebar} />}
          <main className={isAuthPage ? "fullWidthContent" : "content"}>
            {!isAuthPage && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<SignIn onSnackbarOpen={handleSnackbarOpen} />} />
              <Route path="/signin" element={<SignIn onSnackbarOpen={handleSnackbarOpen} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/users" element={<UserManage />} />
              <Route path="/avatars" element={<AvatarManage />} />
              <Route path="/profiles" element={<ProfileManage />} />
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
