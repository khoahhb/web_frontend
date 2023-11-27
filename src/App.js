import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import { useState } from "react";
import { Routes, Route, useLocation  } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import UserManage from "./scenes/user";
import Invoices from "./scenes/invoices";
import AvatarManage from "./scenes/avatar";
import Bar from "./scenes/bar";
import ProfileManage from "./scenes/profile";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";


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
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;
