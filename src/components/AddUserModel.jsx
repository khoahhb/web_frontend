import React, { useState } from "react";
import {
    Grid, Paper, TextField, Button, Typography, Radio, Divider,
    RadioGroup, FormControlLabel, FormControl, FormLabel, IconButton, InputAdornment
} from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import avatar from '../assets/images/test.jpg';

const paperStyle = {
    height: 'auto',
    width: 'auto',
    padding: 30,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    borderRadius: '20px',
    backgroundColor: 'rgba(30, 31, 37, 0.9)',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
};
const titleStyle = {
    margin: '0px 0px 0px 0px',
    padding: '0px',
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: '16px',
}
const btnstyle = {
    backgroundColor: 'rgba(67, 64, 204, 1)',
    color: 'white',
    fontSize: '1rem',
    padding: '8px 70px',
    marginBottom: '0px',
    borderRadius: '10px',
};

const AddUserModel = () => {

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

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
        <Paper elevation={10} style={paperStyle}>
            <Grid container spacing={3} style={{ padding: '0px', margin: '0px' }}>
                <Grid item xs={12} style={{ padding: '0px 0px 0px 0px' }}>
                    <Typography variant="h2" style={titleStyle}>
                        <strong>Add User</strong>
                    </Typography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={5} sm={5} container direction="column" spacing={2} justify="center" alignItems="center" style={{ paddingLeft: '32px' }} >

                        <TextField
                            variant="standard"
                            InputProps={{
                                style: { color: 'white' }
                            }}
                            InputLabelProps={{
                                style: { color: 'rgba(255, 255, 255, 1)' }
                            }}
                            label='Fullname'
                            placeholder='Fullname'
                            style={{ marginBottom: '14px', width: '250px' }}
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
                            style={{ marginBottom: '14px', width: '250px' }}
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                        <FormControl fullWidth component="fieldset"
                            style={{ marginBottom: '5px', textAlign: 'left', width: '250px' }}>
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
                                        style: { marginBottom: '14px', width: '250px' },
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
                            style={{ marginBottom: '14px', width: '250px' }}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Divider orientation="vertical" style={{ height: '300px' }} />
                    </Grid>


                    <Grid item xs={5} sm={5} container direction="column" spacing={1} justify="center" alignItems="left" style={{ padding: '32px 0px 0px 48px' }}>
                        <img
                            alt="profile-user"
                            src={avatar}
                            style={{ width: "100px", height: "100px", borderRadius: "20%", margin: "0px" }}
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
                            style={{ marginBottom: '14px', width: '250px' }}
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
                            style={{ marginBottom: '14px', width: '250px' }}
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
                            style={{ marginBottom: '14px', width: '250px' }}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ padding: '0px 0px 0px 0px', marginTop: "24px", marginBottom: "0px" }}>
                    <Button type='submit' style={btnstyle}
                        fullWidth={false} >Add</Button>
                </Grid>
            </Grid>
        </Paper>

    );
}

export default AddUserModel;
