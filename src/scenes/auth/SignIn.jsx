import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid, Paper, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import bgImage from '../../assets/images/bg.png';
import CustomSnackbar from '../../components/CustomSnackbar ';
import { signIn, getUserData } from '../../services/api';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';

const paperStyle = {
    padding: 50,
    height: 'auto',
    width: 400,
    borderRadius: '20px',
    backgroundColor: 'rgba(54, 62, 91, 0.74)',
    color: 'rgba(170, 170, 170, 1)',
    textAlign: 'center',
    position: 'relative',
};
const btnstyle = {
    backgroundColor: 'limegreen',
    color: 'white',
    fontSize: '1rem',
    padding: '8px 70px',
    marginBottom: '24px',
    borderRadius: '10px',
};
const gridStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
};
const versionStyle = {
    bottom: '10px',
    right: '10px',
    color: 'rgba(170, 170, 170, 1)',
    fontSize: '12px'
};
const textStyle = {
    color: 'white',
    marginBottom: '32px',
    fontSize: '14px'
};

const SignIn = ({ onSnackbarOpen }) => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = await signIn(username, password);
            const userInfo = await getUserData(token);
            console.log(userInfo)
            dispatch(login({ token, userInfo }));
            onSnackbarOpen('Login successful!', 'success');
            navigate('/users');
        } catch (error) {
            onSnackbarOpen('Login failed: ' + error.message, 'error');
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Typography variant="h2" style={{ margin: '20px 20px 0px 20px', color: 'rgba(255, 255, 255, 1)' }}>Welcome</Typography>
                <Typography variant="caption" style={{ marginBottom: '20px', fontSize: '0.8rem' }}>
                    Please sign in to your account
                </Typography>
                <TextField
                    variant="standard"
                    fullWidth
                    InputProps={{
                        style: { color: 'white' }
                    }}
                    InputLabelProps={{
                        style: { color: 'rgba(170, 170, 170, 1)' }
                    }}
                    label='Username'
                    placeholder='Enter username'
                    style={{ marginBottom: '16px' }}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <TextField
                    variant="standard"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    InputProps={{
                        style: { color: 'white' },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    InputLabelProps={{
                        style: { color: 'rgba(170, 170, 170, 1)' }
                    }}
                    label='Password'
                    placeholder='Enter password'
                    style={{ marginBottom: '48px' }}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <Button type='submit' style={btnstyle} fullWidth={false}
                    onClick={handleSubmit}>
                    Sign in
                </Button>
                <Typography style={textStyle} > Do not have account?&nbsp;&nbsp;
                    <Link to="/signup" style={{ color: 'rgba(67, 64, 204, 1)' }}>
                        Sign Up Now
                    </Link>
                </Typography>
                <Typography variant="caption" style={versionStyle}>
                    Version: 22/11/2023
                </Typography>
            </Paper>
        </Grid>
    );
}

export default SignIn;
