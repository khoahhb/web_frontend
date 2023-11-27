import React from 'react';
import {
    Grid, Paper, TextField, Typography, Divider
} from '@mui/material';


const AddUserModel = () => {
    const paperStyle = {
        height: 'auto',
        width: 'auto',
        padding: 50,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        borderRadius: '20px',
        backgroundColor: 'rgba(54, 62, 91, 0.90)',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
    };
    const titleStyle = {
        margin: '20px 20px 0px 20px',
        color: 'rgba(255, 255, 255, 1)',
        marginBottom: '24px',
    }
    return (
        <Paper elevation={10} style={paperStyle}>
            <Typography variant="h2" style={titleStyle}>
                <strong>Add User</strong>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                    />
                </Grid>
                <Divider orientation="vertical" flexItem />

                <Grid item xs={12} sm={6}>
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
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddUserModel;
