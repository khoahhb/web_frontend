import React from 'react';
import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material';
import bgImage from '../assets/images/bg.png';

const SignIn = () => {
    const paperStyle = {
        padding: 50,
        height: 'auto',
        width: 350,
        borderRadius: '20px',
        backgroundColor: 'rgba(54, 62, 91, 0.74)',
        color: 'rgba(170, 170, 170, 1)',
        textAlign: 'center',
        position: 'relative',
    };
    const btnstyle = {
        backgroundColor: 'limegreen',
        color: 'white',
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
        color: 'rgba(170, 170, 170, 1)',
    };
    const textStyle = {
        color: 'white',
        marginBottom: '32px',
        fontSize: '14px'
    };

    return (
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Typography variant="h4" style={{ margin: '20px 20px 0px 20px', color: 'rgba(255, 255, 255, 1)' }}>Welcome</Typography>
                <Typography variant="caption" style={{ marginBottom: '20px' }}>
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
                    style={{ marginBottom: '10px' }}
                />
                <TextField
                    variant="standard"
                    fullWidth
                    InputProps={{
                        style: { color: 'white' }
                    }}
                    InputLabelProps={{
                        style: { color: 'rgba(170, 170, 170, 1)' }
                    }}
                    label='Password'
                    placeholder='Enter password'
                    type='password'
                    style={{ marginBottom: '32px' }}
                />
                <Button type='submit' style={btnstyle} fullWidth={false}>Sign in</Button>
                <Typography style={textStyle} > Do you have an account?&nbsp;&nbsp;
                    <Link href="#" >
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
