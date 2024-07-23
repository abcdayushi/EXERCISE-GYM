import React  from 'react'
import { Box } from '@mui/material';
import Excercises from '../Components/Excercises';
import SearchExcercises from '../Components/SearchExcercises';
import HeroBanner from '../Components/HeroBanner';
const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises/>
      <Excercises/>
    </Box>
    
  )
}

export default Home;