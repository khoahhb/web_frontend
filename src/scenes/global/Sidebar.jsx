import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Button, Typography, useTheme, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../constants/theme";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SignOut from "@mui/icons-material/Logout";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import avatar from '../../assets/images/avatar.png';
import suitcase from '../../assets/images/suitcase.png';
import { useSelector } from 'react-redux';
import { signOut } from '../../services/api';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';

const Item = ({ title, to, icon, selected, setSelected, isCollapsed, image }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const itemMargin = isCollapsed ? '16px 0' : '0 0 16px 16px';

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
                margin: itemMargin,
            }}
            onClick={() => setSelected(title)}
            icon={icon}>
            {image == null ?
                <Typography
                    style={{
                        fontSize: '1rem',
                    }}>
                    {title}
                </Typography>
                :
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="150px"
                    height="150px"
                    sx={{
                        cursor: 'pointer',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        '&:hover, &.selected': {
                            bgcolor: '#6870fa',
                        },
                        ...(selected === title && {
                            bgcolor: '#6870fa',
                        }),
                    }}>
                    <img
                        alt="profile-user"
                        width="140px"
                        height="140px"
                        src={image}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                </Box>
            }
            <Link to={to}/>
        </MenuItem>
    );
};

const Sidebar = ({ onSnackbarOpen }) => {

    const dispatch = useDispatch();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Manage User");
    const userInfo = useSelector((state) => state.auth.userInfo);
    const token = useSelector((state) => state.auth.token);

    const handleSignOut = async (event) => {
        const message = await signOut(token);
        dispatch(logout());
        onSnackbarOpen(message, 'success');
        setSelected("Sign Out")
    };


    return (
        <Box
            sx={{
                position: 'relative',
                height: '100%',
                "& .pro-sidebar-inner": {
                    background: `${colors.primary['main']} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box mb="25px" >
                                <Box textAlign="center">
                                    <Typography
                                        variant="h2"
                                        color={colors.grey[100]}
                                        fontWeight="bold"
                                        sx={{ m: "0 0 8px 0" }}
                                    >
                                        WEB
                                    </Typography>
                                </Box>
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <img
                                        alt="profile-user"
                                        width="50px"
                                        height="50px"
                                        src={suitcase}
                                        style={{ cursor: "pointer" }}
                                    />
                                </Box>
                            </Box>
                        )}
                    </MenuItem>

                    <Box paddingLeft={isCollapsed ? undefined : "0%"}>
                        <Item
                            title="Manage User"
                            to="/users"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Manage Avatar"
                            to="/avatars"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Manage Profile"
                            to="/profiles"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Sign Out"
                            to="/signin"
                            icon={<SignOut />}
                            selected={selected}
                            setSelected={handleSignOut}
                            isCollapsed={isCollapsed}
                        />
                    </Box>

                    {!isCollapsed && (
                        <Box mb="0px"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                textAlign: 'center',
                                p: '20px',
                                backgroundColor: colors.primary['main'],
                            }}

                        >
                            <Item
                                title="User Information"
                                to="/users"
                                selected={selected}
                                setSelected={setSelected}
                                isCollapsed={isCollapsed}
                                image={avatar}
                            />

                            <Box textAlign="center">
                                <Typography
                                    variant="h4"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    {userInfo?.fullname || ''}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.blueAccent[400]}
                                    sx={{ m: "10px 0 0 0" }}>
                                    {userInfo?.userProfile?.type || ''}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.blueAccent[400]} sx={{ m: "10px 0 14px 0" }}>
                                    {userInfo?.address || ''}
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
