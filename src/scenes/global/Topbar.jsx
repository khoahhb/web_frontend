import { Box, Typography, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { tokens } from "../../constants/theme";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [title, setTitle] = useState('User Mangement')

  let curLoc = useLocation();
  useEffect(() => {
    if(curLoc.pathname !== "/")
    {
      const titleMap = [
        { path: '/users', title: 'User Mangement' },
        { path: '/avatars', title: 'Avatar Mangement' },
        { path: '/profiles', title: 'Profile Mangement' }
      ]
      const curTitle = titleMap.find(item => item.path === curLoc.pathname)
      setTitle(curTitle.title)
    }
  }, [curLoc])

  return (
    <Box display="flex" justifyContent="space-between" p={2} backgroundColor={colors.primary['main']}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="3px"
        sx={{ width: '100%', height: '64px' }}
      >
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Topbar;

