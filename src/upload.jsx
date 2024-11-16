import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Snackbar, Alert } from '@mui/material';

const Upload = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'audio/mpeg' || file.type === 'audio/wav' || file.type === 'audio/mp3')) {
            setAudioFile(file);
            setAudioUrl(URL.createObjectURL(file));
        } else {
            setOpenSnackbar(true);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (audioFile) {
            navigate('/submit', { state: { audioUrl } });
        } else {
            alert('Please select a file to upload.');
        }
    };

    return (
        <div className='mt-[6rem]'>
        <Container maxWidth="sm">
            <Box sx={{
                backgroundColor: 'gray',
                padding: '10px',
                borderRadius: '8px',
                marginTop: '20px',
                marginBottom: '10px',
                textAlign: 'center'
            }}>
                <Typography variant="h5" component="h1" color="white">
                    Speech Emotion Recognition
                </Typography>
            </Box>

            <div className='mt-32'>
                <Typography variant="h5" component="h2" align="center" gutterBottom>
                    Upload Audio File
                </Typography>

                <Box
                    component="form"
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    onSubmit={handleSubmit}
                >
                    <Button variant="contained" component="label" sx={{ marginBottom: '20px' }}>
                        Choose Audio File
                        <input
                            type="file"
                            accept="audio/*"
                            hidden
                            onChange={handleFileChange}
                        />
                    </Button>

                    {audioFile && (
                        <Typography variant="body1" color="textSecondary">
                            Selected File: {audioFile.name}
                        </Typography>
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ marginTop: '20px' }}
                        disabled={!audioFile}
                    >
                        Submit
                    </Button>
                </Box>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={1500}
                    onClose={() => setOpenSnackbar(false)}
                >
                    <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                        Invalid file type! Please upload an audio file.
                    </Alert>
                </Snackbar>
            </div>
        </Container>
        </div>
    );
};

export default Upload;
