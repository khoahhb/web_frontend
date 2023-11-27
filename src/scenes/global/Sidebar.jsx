import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../constants/theme";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SignOut from "@mui/icons-material/Logout";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import avatar from '../../assets/images/avatar.png';
import suitcase from '../../assets/images/suitcase.png';

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
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
            icon={icon}
        >
            <Typography
                style={{
                    fontSize: '1rem',
                }}>
                {title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Manage User");

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
                            to="/"
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
                            setSelected={() => {
                                setSelected("Sign Out")
                            }}
                            isCollapsed={isCollapsed}
                        />
                    </Box>

                    {!isCollapsed && (
                        <Box mb="25px"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                textAlign: 'center',
                                p: '20px',
                                backgroundColor: colors.primary['main'],
                            }}
                        >
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="140px"
                                    height="140px"
                                    src={avatar}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h4"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Huynh Huu Bao Khoa
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.blueAccent[400]}
                                    sx={{ m: "10px 0 0 0" }}>
                                    Admin
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.blueAccent[400]} sx={{ m: "10px 0 24px 0" }}>
                                    2, Chau Thanh, Hau Giang
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
