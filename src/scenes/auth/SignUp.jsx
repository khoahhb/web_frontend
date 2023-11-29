import React, { useState } from "react";
import {
    Grid, Paper, TextField, Button, Typography, Radio,
    RadioGroup, FormControlLabel, FormControl, FormLabel, IconButton, InputAdornment
} from '@mui/material';
import { Link } from "react-router-dom";
import bgImage from '../../assets/images/bg.png';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { signUp } from '../../services/api';

const paperStyle = {
    padding: 40,
    height: 'auto',
    width: 500,
    borderRadius: '20px',
    backgroundColor: 'rgba(54, 62, 91, 0.74)',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    position: 'relative',
};
const btnstyle = {
    backgroundColor: 'rgba(67, 64, 204, 1)',
    color: 'white',
    fontSize: '1rem',
    padding: '8px 70px',
    marginBottom: '16px',
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
    color: 'rgba(255, 255, 255, 1)',
    fontSize: '12px'
};
const textStyle = {
    color: 'white',
    marginBottom: '32px',
    fontSize: '14px'
};

const SignUp = ({ onSnackbarOpen }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [selectedDate, handleDateChange] = useState(null);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                username,
                password,
                fullname: fullName,
                gender,
                dateOfBirth: selectedDate ? selectedDate.format("DD/MM/YYYY") : '',
                phone,
                email,
                address
            };
            await signUp(data);
            onSnackbarOpen('Sign Up successful!', 'success');
        } catch (error) {
            onSnackbarOpen('Sign Up failed: ' + error.message, 'error');
            console.log(error.message)
        }
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Typography variant="h2" style={{ margin: '0px 8px 0px 0px', color: 'rgba(255, 255, 255, 1)', marginBottom: '16px', }}>    <strong>SIGN UP</strong>
                </Typography>
                <TextField
                    variant="standard"
                    fullWidth
                    InputProps={{
                        style: { color: 'white' }
                    }}
                    InputLabelProps={{
                        style: { color: 'rgba(255, 255, 255, 1)' }
                    }}
                    label='Fullname'
                    placeholder='Fullname'
                    style={{ marginBottom: '16px' }}
                    onChange={(event) => {
                        setFullName(event.target.value);
                    }}
                />
                <TextField
                    variant="standard"
                    fullWidth
                    InputProps={{
                        style: { color: 'white' }
                    }}
                    InputLabelProps={{
                        style: { color: 'rgba(255, 255, 255, 1)' }
                    }}
                    label='Username'
                    placeholder='Username'
                    style={{ marginBottom: '16px' }}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <FormControl fullWidth component="fieldset" style={{ marginBottom: '16px', textAlign: 'left' }}>
                    <FormLabel component="legend" style={{ color: 'rgba(255, 255, 255, 1)' }}>Gender</FormLabel>
                    <RadioGroup
                        sx={{
                            '& .MuiSvgIcon-root': {
                                color: 'rgba(255, 255, 255, 1)',
                            },
                            display: 'initial',
                        }}
                        aria-label="gender"
                        name="gender"
                        value={gender}
                        onChange={handleGenderChange}
                    >
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date of Birth"
                        value={selectedDate}
                        onChange={handleDateChange}
                        format="DD/MM/YYYY"
                        slotProps={{
                            textField: {
                                variant: "standard",
                                InputProps: {
                                    style: { color: 'white' }
                                },
                                InputLabelProps: {
                                    style: { color: 'rgba(255, 255, 255, 1)' }
                                },
                                style: { marginBottom: '16px' },
                                fullWidth: true
                            },
                        }}

                    />
                </LocalizationProvider>
                <TextField
                    variant="standard"
                    fullWidth
                    InputProps={{
                        style: { color: 'white' }
                    }}
                    InputLabelProps={{
                        style: { color: 'rgba(255, 255, 255, 1)' },
                    }}
                    label='Email Address'
                    placeholder='Email Address'
                    style={{ marginBottom: '16px' }}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <TextField
                    variant="standard"
                    fullWidth
                    InputProps={{
                        style: { color: 'white' }
                    }}
                    InputLabelProps={{
                        style: { color: 'rgba(255, 255, 255, 1)' }
                    }}
                    label='Street Address'
                    placeholder='Street Address'
                    style={{ marginBottom: '16px' }}
                    onChange={(event) => {
                        setAddress(event.target.value);
                    }}
                />
                <TextField
                    variant="standard"
                    fullWidth
                    InputProps={{
                        style: { color: 'white' }
                    }}
                    InputLabelProps={{
                        style: { color: 'rgba(255, 255, 255, 1)' }
                    }}
                    label='Phone'
                    placeholder='Phone Number (+84)'
                    style={{ marginBottom: '16px' }}
                    onChange={(event) => {
                        setPhone(event.target.value);
                    }}
                />
                <TextField
                    variant="standard"
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
                        style: { color: 'rgba(255, 255, 255, 1)' }
                    }}
                    label='Password'
                    placeholder='Enter password'
                    type={showPassword ? "text" : "password"}
                    style={{ marginBottom: '32px' }}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <Button type='submit' 
                    style={btnstyle} fullWidth={false} 
                    onClick={handleSubmit}>Sign Up</Button>
                <Typography style={textStyle}>
                    Already have an Account?&nbsp;&nbsp;
                    <Link to="/signin" style={{ color: 'limegreen' }}>
                        Sign In Now
                    </Link>
                </Typography>

                <Typography variant="caption" style={versionStyle}>
                    Version: 22/11/2023
                </Typography>
            </Paper>
        </Grid>
    );
}

export default SignUp;
