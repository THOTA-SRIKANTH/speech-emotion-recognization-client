import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const EmotionPrediction = () => {
    const location = useLocation();
    const audioUrl = location.state?.audioUrl;

    return (

        <div className='mt-[6rem]'>
        <div >

       
            <Container maxWidth="md">
                {/* Page Heading */}
                <Box sx={{
                    backgroundColor: 'whitesmoke', // Darker blue for contrast
                    padding: '5px',
                    borderRadius: '8px',
                    marginTop: '20px',
                    textAlign: 'center'
                }}>
                    <Typography variant="h4" component="h1" color="black">
                        Emotion Prediction
                    </Typography>
                </Box>

                {/* Audio Player Section */}
                {audioUrl ? (
                    <Box sx={{
                        marginTop: '30px',
                        textAlign: 'center',
                        padding: '20px',
                        backgroundColor: '#f5f5f5', // Light gray background
                        borderRadius: '8px'
                    }}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Playing Uploaded Audio
                        </Typography>
                        <audio controls>
                            <source src={audioUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </Box>
                ) : (
                    <Typography variant="body1" color="error" align="center" sx={{ marginTop: '20px' }}>
                        No audio file provided. Please go back and upload an audio file.
                    </Typography>
                )}
            </Container>
        </div>

        <div className='text-xl items-center bg-whitesmoke mt-6'>

            <p className='text-center'>display audio emotion here  </p>
            
        </div>
        </div>
    );
};

export default EmotionPrediction;
