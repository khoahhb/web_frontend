import React from 'react';
import {
    Grid, Paper, TextField, Button, Typography,  Radio,
    RadioGroup, FormControlLabel, FormControl, FormLabel
} from '@mui/material';
import { Link } from "react-router-dom";
import bgImage from '../assets/images/bg.png';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SignUp = () => {
    const paperStyle = {
        padding: 50,
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
        marginBottom: '32px',
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

    return (
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Typography variant="h2" style={{ margin: '20px 20px 0px 20px', color: 'rgba(255, 255, 255, 1)', marginBottom: '24px', }}>    <strong>SIGN UP</strong>
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
                    style={{ marginBottom: '32px' }}
                />
                <FormControl fullWidth component="fieldset" style={{ marginBottom: '16px', textAlign: 'left' }}>
                    <FormLabel component="legend" style={{ color: 'rgba(255, 255, 255, 1)' }}>Gender</FormLabel>
                    <RadioGroup
                        sx={{
                            '& .MuiSvgIcon-root': {
                                color: 'rgba(255, 255, 255, 1)',
                            }
                        }}
                        aria-label="gender" name="gender" style={{ display: 'initial' }}>
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date of Birth"
                        format="DD-MM-YYYY"
                        slotProps={{
                            textField: {
                                variant: "standard",
                                InputProps: {
                                    style: { color: 'white' }
                                },
                                InputLabelProps: {
                                    style: { color: 'rgba(255, 255, 255, 1)' }
                                },
                                style: { marginBottom: '24px' },
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
                    style={{ marginBottom: '24px' }}
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
                    style={{ marginBottom: '24px' }}
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
                    style={{ marginBottom: '24px' }}
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
                    label='Password'
                    placeholder='Enter password'
                    type='password'
                    style={{ marginBottom: '32px' }}
                />
                <Button type='submit' style={btnstyle} fullWidth={false}>Sign Up</Button>
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
