import * as React from 'react';
import { Container, Box, Paper, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from './LoginContext';

const SignInSignUp = () => {
    const { isLoggedIn, setIsLoggedIn, setShowSignIn } = useContext(LoginContext);
    const [openSnackbar, setOpenSnackbar] = React.useState(false); // State for controlling the snackbar visibility
    const navigate = useNavigate();

    const handleSignInSubmit = (event) => {
        event.preventDefault();
        // Add validation or API call logic if necessary
        setIsLoggedIn(true); // Set login state to true
        setShowSignIn(false); // Hide the sign-in form
        setOpenSnackbar(true); // Show the snackbar

        setTimeout(() => {
            navigate('/index'); // Redirect to the desired route
        }, 500);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false); // Close the snackbar
    };

    return (
        <div className='mt-[10rem]'>
            <Container maxWidth="xs">
                <Paper elevation={3} sx={{ padding: 3, marginTop: 8 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography component="h2" variant="h5">
                            {isLoggedIn ? null : 'Sign In'}
                        </Typography>

                        {/* Show Sign In form if not logged in, otherwise show logout button */}
                        {!isLoggedIn ? (
                            <Box component="form" onSubmit={handleSignInSubmit} sx={{ mt: 2 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                                    Sign In
                                </Button>
                            </Box>
                        ) : null}
                    </Box>
                </Paper>

                {/* Snackbar for login success */}
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={1500}
                    onClose={handleSnackbarClose}
                >
                    <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                        Login successful!
                    </Alert>
                </Snackbar>
            </Container>
        </div>
    );
};

export default SignInSignUp;
