import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide'; 
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = ({ open, onClose, severity, message }) => {
    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={2000}
            transitionDuration={{ enter: 600, exit: 1000 }}
            TransitionComponent={props => <Slide {...props} direction="left" />}
            onClose={onClose}
        >
            <Alert onClose={onClose} severity={severity} sx={{ width: '100%', fontSize: '1.1rem' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default CustomSnackbar;
