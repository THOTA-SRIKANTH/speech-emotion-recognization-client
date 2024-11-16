import React from 'react';
import { Box } from '@mui/material';
import { Carousel as ReactCarousel } from 'react-responsive-carousel'; // Rename import to avoid conflict
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import myImage1 from './images/istockphoto-1147944232-1024x1024.jpg'; // Import image
import myImage2 from './images/speech.jpg';
import myImage3 from './images/speech-2.jpg'
import myImage4 from './images/speech-3.jpg'

import myImage5 from './images/speech-4.jpg'
import myImage6 from './images/speech-5.jpg'
import myImage7 from './images/speech-6.jpg'


const CarouselPage = () => {
    const dummyImages = [myImage3, myImage2,myImage1 ,myImage4 ,myImage5,myImage7];

    return (
        <div className="carousels">
            <Box
                sx={{
                    width: '100vw',
                    height: 'calc(100vh - 64px)', // Adjust height to fit below the navbar (assuming navbar height is 64px)
                    overflow: 'hidden',
                    marginTop: '64px', // Offset by the navbar height
                }}
            >
                <ReactCarousel
                    emulateTouch
                    infiniteLoop
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    autoPlay
                    interval={2000}
                >
                    {dummyImages.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`carousel-image-${index}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </ReactCarousel>
            </Box>
        </div>
    );
};

export default CarouselPage;
