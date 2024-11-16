import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from './LoginContext';

const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn, setShowSignIn } = useContext(LoginContext);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        setIsLoggedIn(false); // Set login state to false
        setShowSignIn(true); // Show the sign-in form
        setOpenSnackbar(true); // Show logout snackbar

        // Redirect to login page
        navigate('/');
    };


    const handleHomeClick = () =>{
        navigate('/')
    }
    const handleLoginClick = () => {
        setShowSignIn(true); // Show the sign-in form
        navigate('/sign-in')
    };

    const handlePreview = () => {
        if(isLoggedIn){
            navigate('/index'); // Redirect to home page

        }
       
    };
    return (
        <div className="navbar  mb-0.5 relative">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>

                        <div className='flex text-lg'>
                            <p>MyApp</p>
                           
                        </div>
                        
                        
                        <div className='flex ml-[65rem]'>
                        <Button color="inherit" onClick={handleHomeClick}  >
                            HOME
                        </Button>
                        <Button color="inherit" onClick={handlePreview}  >
                            Preview
                        </Button>
                        


                        </div>
                        
                    
                        <div className="ml-auto">
                            {isLoggedIn ? (
                                <Button color="inherit" onClick={handleLogoutClick}>
                                    Logout
                                </Button>
                            ) : (
                                <Button color="inherit" onClick={handleLoginClick}>
                                    Login
                                </Button>
                            )}
                        </div>

                    </Toolbar>
                </AppBar>
            </Box>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={1500}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="info" sx={{ width: '100%' }}>
                    Logged out successfully!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Navbar;
