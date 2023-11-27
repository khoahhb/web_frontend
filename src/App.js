import './App.css';
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SignIn from './scenes/SignIn'
import SignUp from './scenes/SignUp'
import Topbar from "./scenes/Topbar";
import Sidebar from "./scenes/Sidebar";
import UserManage from "./scenes/UserManagement";
import AvatarManage from "./scenes/AvatarManagement";
import ProfileManage from "./scenes/ProfileManagement";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isAuthPage && <Sidebar isSidebar={isSidebar} />}
          <main className={isAuthPage ? "fullWidthContent" : "content"}>
            {!isAuthPage && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<UserManage />} />
              <Route path="/avatars" element={<AvatarManage />} />
              <Route path="/profiles" element={<ProfileManage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;
