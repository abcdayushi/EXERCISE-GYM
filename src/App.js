import React from 'react';

import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';// a div with some shading and colors.
import './App.css';

import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcerciseDetail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Box width= "400px" sx={{ width: {xl : '1488px'}}} m="auto">
        <Navbar/> <Routes>
            <Route path = "/" element= {<Home/>} />
            <Route path = "/excercise/:id" element={<ExcerciseDetail/>}/>
            </Routes>
            <Footer/>
            </Box>
  )
}

export default App;