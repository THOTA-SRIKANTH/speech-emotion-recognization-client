import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes
import { LoginProvider } from './LoginContext'; // Import the provider
import Navbar from './navbar.jsx';
import SignInSignUp from './signIn-signUp';
import Upload from './upload.jsx'
import EmotionPrediction from './emtionPrediction.jsx'
import CarouselPage from './carousels.jsx';


ReactDOM.render(
  <React.StrictMode>
  <LoginProvider>
      <BrowserRouter>
          <Navbar />
          <Routes>
          {/* <Route path="" element={<Carousel />} /> */}
          <Route path="/" element={<CarouselPage />} />
              <Route path="/sign-in" element={<SignInSignUp />} />
              {/* Add other routes as needed */}
              <Route path="/index" element={<Upload />} />
              <Route path="/submit" element={<EmotionPrediction />} />
          </Routes>
      </BrowserRouter>
  </LoginProvider>
</React.StrictMode>
,
    document.getElementById('root')
);
